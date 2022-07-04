/* eslint-disable implicit-arrow-linebreak */
import { createStore } from 'vuex';
import Localbase from 'localbase';

// docs: https://github.com/dannyconnell/localbase#disable-the-gorgeous-logs
const db = new Localbase('db');
db.config.debug = false;

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        title: 'hello',
        done: false,
        dueDate: null,
      },
    ],
    toaster: {
      show: false,
      text: 'There is no message for you',
    },
    search: null,
    appTitle: 'Todo Application',
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {
    
  },
});
