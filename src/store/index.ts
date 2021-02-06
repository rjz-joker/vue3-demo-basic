import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0,
    baseURL: 'https://autumnfish.cn/api',
    jokersUrl: 'https://autumnfish.cn/api',
    weaherUrl: 'http://wthrcdn.etouch.cn/weather_mini'
  },
  getters: {
    states() {
      return store.state
    }
  },
  mutations: {
    updateCount(state, n = 0) {
      state.count = n
      return state.count
    },
    updateBaseUrl(state, n = '') {
      state.baseURL = n
      return state.baseURL
    },
    updateJokersUrl(state, n = '') {
      state.jokersUrl = n
      return state.jokersUrl
    },
    updateWeatherUrl(state, n = '') {
      state.weaherUrl = n
      return state.weaherUrl
    },
  },
  actions: {

  },
  modules: {

  }
})

export default store