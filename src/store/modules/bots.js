import axios from 'axios';
import API_PORT from '../../variables';

const state = {
    frames: [],
    picture: null,
    loading: false,
    loadingImg: 'https://miro.medium.com/max/6684/1*F_5AEXIfr1AXuShXhYT4zg.gif'
};
const actions = {
    async getRocketPicture ({commit}) {
        console.log('entra en store')
        state.loading = true
        await axios.get(API_PORT + '/video').then(res => {
            state.picture = null
            commit('setPicture', res.data)
        })
        state.loading = false
    }
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