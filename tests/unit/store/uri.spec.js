import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import uri from '@/store/uri'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('uri.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(uri)
  })
  it('get space url.', () => {
    store.replaceState({
      baseUrl: 'https://test_test.co.jp',
      apiKey: 'aaaabbbbcccc'
    })
    expect(store.getters['getSpace']).toBe('https://test_test.co.jp/api/v2/space?apiKey=aaaabbbbcccc')
  })
})
