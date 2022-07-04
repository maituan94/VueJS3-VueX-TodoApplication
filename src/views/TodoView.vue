<template>
  <div class="home pa-0">
    <add-task />
    <list-tasks
      v-if="$store.state.tasks.length"
    />
    <empty-task v-else/>
  </div>
</template>

<script>
import AddTask from '../components/Todo/AddTask.vue'
import ListTasks from '../components/Todo/ListTasks.vue'
import EmptyTask from '../components/Todo/EmptyTask.vue'

export default {
  name: 'Todo',
  components: {
    'add-task': AddTask,
    'list-tasks': ListTasks,
    'empty-task': EmptyTask
  }
}
</script>
