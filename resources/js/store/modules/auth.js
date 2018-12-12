import { router } from '../../app'
import axios from 'axios'

const state = {
    token: false,
    allData:[],
    returnMsg:''
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
    },
    dessrts: (state) => {
        axios.get('http::/csvdata.test/api/getData')
            .then(function (response) {
               state.allData = response
            })
            .catch(function (error) {
                
            })
            .then(function () {
               
            });
    },
    csv_fileFun: (state, file)=>{
        axios.post('http::/csvdata.test/api/csvdata', {
            csv_file: file,
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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

