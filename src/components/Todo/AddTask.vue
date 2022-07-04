<template>
  <div class="input-group mb-3">
    <input
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      type="text"
      class="form-control"
      placeholder="No more tasks, please!"
      aria-label="No more tasks, please!"
      aria-describedby="button-addon2"
    />
    <button
      class="btn btn-secondary"
      type="button"
      id="button-addon2"
      @click="addTask"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>
