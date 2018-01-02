import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//create a pbject to save the state of app at start
const state = {
    connection : null
}

//create a object to save the function of mutation
const mutations = {
    SET_CONN: (state, conn) => {
        if (conn != null && state.connection == null) {
            state.connection = conn;
        }
    },
    TEST_A: (state) => {
      console.log('asd')
    }

}

export default new Vuex.Store({
    state,mutations
});
