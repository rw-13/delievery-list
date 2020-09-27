import Vue from 'vue';
import Vuex from 'vuex';

// Components
import delivery from './Delivery';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        delivery
    },
});