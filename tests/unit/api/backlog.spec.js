import backlog from '@/api/backlog'

// TODO manual mock
let url = ''
let body = {}
let mockError = false

jest.mock('axios', () => ({
  get: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) {
        throw Error()
      }

      url = _url
      body = _body
      resolve(true)
    })
  }
}))

describe('backlog.js - authenticate', () => {
  it('authenticated a space', async () => {
    const baseUrl = 'aaaaa'
    const apiKey = 'bbbbb'

    await backlog.authenticate(baseUrl, apiKey, () => {}, null)

    expect(url).toBe('aaaaa/api/v2/space?apiKey=bbbbb')
    expect(body).toBeUndefined()
  })

  it('catches an error', async () => {
    mockError = true

    await expect(backlog.authenticate('', '', null, () => { throw Error('An error has occurred.') }))
      .rejects.toThrow('An error has occurred.')
  })
})
