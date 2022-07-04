<template>
  <div class="input-group mb-3">
    <div @click="doneTask(task.id)" class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        :checked="task.done"
        aria-label="Checkbox for following text input"
      />
    </div>
    <input
      type="text"
      :disabled="!isEnableEdit"
      class="form-control"
      aria-label="Text input with checkbox"
      :value="task.title"
      @keyup.enter="changeTitle"
      @blur="changeTitle"
    />
    <span v-if="task.dueDate" class="input-group-text">{{
      formatDate(task.dueDate)
    }}</span>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="actionDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ...
      </button>
      <ul class="dropdown-menu" aria-labelledby="actionDropdown">
        <li @click="editTitle">
          <div class="dropdown-item pt-2 pb-2">
            <i class="bi bi-pencil"></i><span class="ms-3">Edit</span>
          </div>
        </li>
        <li>
          <due-date :modalId="'modalDatePicker' + task.id" />
        </li>
        <li>
          <delete-button :modalId="'modalDelete' + task.id" />
        </li>
      </ul>
    </div>
  </div>
  <modal-delete :task="task" :modalId="'modalDelete' + task.id" />
  <date-picker :task="task" :modalId="'modalDatePicker' + task.id" />
</template>

<script>
import moment from "moment";
import Delete from "./Features/Delete.vue";
import ModalDelete from "./modal/ModalDelete.vue";
import DueDate from "./Features/DueDate.vue";
import DatePicker from "./modal/DatePicker.vue";

export default {
  name: "todo-task",
  props: ["task"],
  data: () =>({
    isEnableEdit: false
  }),
  methods: {
    doneTask(id) {
      this.$store.dispatch("doneTask", id);
    },
    formatDate(value) {
      return moment(value).format("MMM DD");
    },
    editTitle() {
      this.isEnableEdit = true
    },
    changeTitle(e) {
      e.preventDefault();
      const value = e.target.value;
      const payload = {
        id: this.task.id,
        title: value
      }
      this.$store.dispatch('updateTaskTitle', payload)
      this.isEnableEdit = false
    }
  },
  components: {
    "delete-button": Delete,
    "modal-delete": ModalDelete,
    "due-date": DueDate,
    "date-picker": DatePicker,
  },
};
</script>

<style>
</style>
