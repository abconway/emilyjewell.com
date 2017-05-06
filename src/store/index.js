import Vue from 'vue'
import Vuex from 'vuex'
import api from 'store/api'
import types from 'store/mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        newsItems: {},
        bioParagraphs: {},
    },

    getters: {
        allNewsItems: state => state.newsItems,
        allBioParagraphs: state => state.bioParagraphs,
    },

    mutations: {
        [types.GET_ALL_NEWS_ITEMS] (state, payload) {
            state.newsItems = payload
        },
        [types.GET_ALL_BIO_PARAGRAPHS] (state, payload) {
            state.bioParagraphs = payload
        },
    },

    actions: {
        getAllNewsItems({ commit, state }) {
            state.newsItems = {}
            api.getAllNewsItems().then(data => commit(types.GET_ALL_NEWS_ITEMS, data))
        },
        getAllBioParagraphs({ commit, state }) {
            state.bioParagraphs = {}
            api.getAllBioParagraphs().then(data => commit(types.GET_ALL_BIO_PARAGRAPHS, data))
        },
    }
})

export default store
