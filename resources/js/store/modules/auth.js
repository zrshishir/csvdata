import { router } from '../../app'

const state = {
    token: false
}

const getters = {
    isLoggedIn: (state) => {
        return !!state.token
    },

    menus: (state) => {
        if(state.token){
            return([
                { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
                { icon: 'room', title: 'Organize Meetups', link: '/meetup/new'},
                { icon: 'person', title: 'Profile', link: '/profile'},
            ])
        }else{
            return ([
                { icon: 'face', title: 'Sign up', link: '/signup'},
                { icon: 'lock_open', title: 'Sign in', link: '/signin'},
            ])
        }
    }
}

const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}

