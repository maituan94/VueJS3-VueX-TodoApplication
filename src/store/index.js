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
    sorting: false,
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      
      return state.tasks.filter((task) =>
        task.title.toLocaleLowerCase().includes(state.search.toLocaleLowerCase()));
    },
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    doneTask(state, id) {
      const task = state.tasks.filter((t) => t.id === id)[0];
      task.done = !task.done;
    },
    updateTaskTitle(state, payload) {
      const task = state.tasks.filter((t) => t.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      const task = state.tasks.filter((t) => t.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    showtoaster(state, text) {
      if (state.toaster.show) state.toaster.show = false;
      setTimeout(() => {
        state.toaster.show = true;
        state.toaster.text = text;
      }, 300);
      setTimeout(() => {
        state.toaster.show = false;
        state.toaster.text = '';
      }, 4000);
    },
    setSearch(state, value) {
      state.search = value;
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    addTask({ state, commit }, newTaskTitle) {
      if (newTaskTitle.trim() === '') {
        return;
      }
      let max = {
        id: 0,
      };
      if (state.tasks.length > 0) {
        max = state.tasks.reduce((prev, current) => ((prev.id > current.id) ? prev : current));
      }
      const newTask = {
        id: max.id + 1,
        title: newTaskTitle.trim(),
        done: false,
        dueDate: null,
      };
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask);
        commit('showtoaster', 'New task is added.');
      });
    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id }).delete().then(() => {
        commit('deleteTask', id);
        commit('showtoaster', 'Well done, delete task successfully!');
      });
    },
    doneTask({ state, commit }, id) {
      const task = state.tasks.filter((t) => t.id === id)[0];
      db.collection('tasks').doc({ id }).update({
        done: !task.done,
      }).then(() => {
        commit('doneTask', id);
        commit('showtoaster', 'Yes, one less!');
      });
    },
    updateTaskTitle({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.title,
      }).then(() => {
        commit('updateTaskTitle', payload);
        commit('showtoaster', 'Task updated');
      });
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate,
      }).then(() => {
        commit('updateTaskDueDate', payload);
        commit('showtoaster', 'Task due date updated');
      });
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then((tasks) => { // get from localbase
        commit('setTasks', tasks); // set into vuex memory storage
      });
    },
    setTasks({ commit }, tasks) {
      db.collection('tasks').set(tasks); // set new sort tasks
      commit('setTasks', tasks);
    },
  },
});
