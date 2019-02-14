import Vue from 'vue';
import Vuex from 'vuex';
import toDoList from './toDoList';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        toDoList
    }
});

export default store;
