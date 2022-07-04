<template>
  <div class="pa-0">
    <single-task v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>
<script>
import Task from './Task.vue'
export default {
  name: "list-task",
  components: {
    'single-task': Task,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.dispatch("setTasks", value);
      },
    },
  },
};
</script>
