import Vue from 'vue'
import Vuex from 'vuex'
import api from 'store/api'
import types from 'store/mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        newsItems: {},
        bioParagraphs: {},
        pressShows: {},
        mediaItems: {},
    },

    getters: {
        allNewsItems: state => state.newsItems,
        allBioParagraphs: state => state.bioParagraphs,
        allPressShows: state => state.pressShows,
        allMediaItems: state => state.mediaItems,
    },

    mutations: {
        [types.GET_ALL_NEWS_ITEMS] (state, payload) {
            state.newsItems = payload
        },
        [types.GET_ALL_BIO_PARAGRAPHS] (state, payload) {
            state.bioParagraphs = payload
        },
        [types.GET_ALL_PRESS_SHOWS] (state, payload) {
            state.pressShows = payload
        },
        [types.GET_ALL_MEDIA_ITEMS] (state, payload) {
            state.mediaItems = payload
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
        getAllPressShows({ commit, state }) {
            state.pressShows = {}
            api.getAllPressShows().then(data => commit(types.GET_ALL_PRESS_SHOWS, data))
        },
        getAllMediaItems({ commit, state }) {
            state.mediaItems = {}
            api.getAllMediaItems().then(data => commit(types.GET_ALL_MEDIA_ITEMS, data))
        },
    }
})

export default store
