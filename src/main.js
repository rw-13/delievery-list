import Vue from 'vue';
import store from "./store";

// components
import App from './App.vue';

new Vue({
    render: h => h(App),
    store,
}).$mount('#app');