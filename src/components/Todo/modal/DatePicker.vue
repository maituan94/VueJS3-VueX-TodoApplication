<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    aria-labelledby="dueDatePickerLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="dueDatePickerLabel">Set Due Date</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input v-model="date" type="date" class="form-control" />
        </div>
        <div class="modal-footer">
          <button
            @click="saveTask"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Set
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "duedate",
  props: ["task", "modalId"],
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  mounted() {
    if (this.task.dueDate) {
      this.date = this.task.dueDate;
    }
  },
  methods: {
    saveTask() {
      const payload = {
        id: this.task.id,
        dueDate: this.date,
      };
      console.log(payload);
      this.$store.dispatch('updateTaskDueDate', payload)
    },
  },
};
</script>