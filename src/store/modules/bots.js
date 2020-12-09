import axios from 'axios';
import API_PORT from '../../variables';

const state = {
    frames: [],
    picture: null,
    loading: false,
    loadingImg: 'https://miro.medium.com/max/6684/1*F_5AEXIfr1AXuShXhYT4zg.gif',
    questionTime: false,
};
const actions = {
    async getRocketPicture ({commit}) {
        state.loading = true
        await axios.get(API_PORT + '/video').then(res => {
            state.picture = null
            commit('setPicture', res.data)
        })
        state.loading = false
    },
    async sendUserInput ({state}, payload) {
        state.loading = true
        console.log('payload', payload)
        await axios.post(API_PORT + '/user-input', payload).then()
        state.loading = false
    },
};
const mutations = {
    setPicture(state, pict) {
        state.picture = pict
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};