<template>
  <div class="input-group mb-3">
    <div class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        aria-label="Checkbox for following text input"
      />
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Text input with checkbox"
    />
    <span v-if="task.dueDate" class="input-group-text">{{
      task.dueDate
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

export default {
  name: "todo-task",
  props: ["task"],
};
</script>

<style>
</style>
