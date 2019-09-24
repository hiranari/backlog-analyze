import setup from '@/store/modules/setup'
import backlog from '@/api/backlog'

describe('setup.js - getters', () => {
  it('not yet certified', () => {
    const state = {
      authenticated: false
    }

    const actual = setup.getters.isAuthenticated(state)

    expect(actual).toBe(false)
  })

  it('already certified', () => {
    const state = {
      authenticated: true
    }

    const actual = setup.getters.isAuthenticated(state)

    expect(actual).toBe(true)
  })
})

describe('setup.js - mutations', () => {
  it('update baseUrl', () => {
    const baseUrl = 'aaaaaaaa'
    const state = {
      baseUrl: ''
    }

    setup.mutations.updateBaseUrl(state, baseUrl)

    expect(state).toEqual({
      baseUrl: baseUrl
    })
  })

  it('update apiKey', () => {
    const apiKey = 'aaaaaaaa'
    const state = {
      apiKey: ''
    }

    setup.mutations.updateApiKey(state, apiKey)

    expect(state).toEqual({
      apiKey: apiKey
    })
  })

  it('update authenticated', () => {
    const authenticated = true
    const state = {
      authenticated: false
    }

    setup.mutations.updateAuthenticated(state, authenticated)

    expect(state).toEqual({
      authenticated: authenticated
    })
  })
})

jest.mock('@/api/backlog')

let response = {
  data: {}
}

describe('setup.js - actions', () => {
  it('authenticate', () => {
    const commit = jest.fn()
    backlog.authenticate.mockImplementation((baseUrl, apiKey, cb, errorCb) => cb(response))

    setup.actions.authenticate({ commit })

    expect(commit).toHaveBeenCalledWith('updateAuthenticated', true)
  })
})
