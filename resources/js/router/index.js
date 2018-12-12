import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

import Profile from '../components/User/Profile'
import Signup from '../components/User/Signup'
import Signin from '../components/User/Signin'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        { path: '/', name: 'Home', component: Home },

        { path: '/profile', name: 'Profile', component: Profile },
        { path: '/signup', name: 'Signup', component: Signup },
        { path: '/signin', name: 'Signin', component: Signin },
    ],
    mode: 'history'
})