import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App'

require('./bootstrap');

Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    router,
    store,
    
    render: h => h(App)
});
