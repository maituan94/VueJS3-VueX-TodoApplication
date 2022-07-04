<template>
  <div class="pa-0">
    List Tasks.
  </div>
</template>
<script>
import Task from './Task.vue'
export default {
  name: "list-task",
  components: {
    'single-task': Task,
  }
};
</script>
