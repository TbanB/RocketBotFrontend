import axios from 'axios';

const state = {
    frames: [],
    picture: null,
};
const getters = {
    rocketPicture: state => state.picture
};
const actions = {
    async getRocketPicture () {
        const response = await axios.get();
        console.log(response)
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
};