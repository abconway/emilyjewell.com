import Vue from 'vue'
import Vuex from 'vuex'
import api from 'store/api'
import types from 'store/mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        listItems: {}
    },

    getters: {
        allListItems: state => state.listItems,
    },

    mutations: {
        [types.GET_ALL_LIST_ITEMS] (state, payload) {
            state.listItems = payload
        },
    },

    actions: {
        getAllListItems({ commit, state }) {
            state.listItems = {}
            api.getAllListItems().then(data => commit(types.GET_ALL_LIST_ITEMS, data))
        },
    }
})

export default store
