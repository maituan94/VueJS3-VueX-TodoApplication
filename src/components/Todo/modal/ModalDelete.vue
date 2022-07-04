<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="modalId"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Delete Task</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Are you sure to delete this task?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            No
          </button>
          <button
            @click="$store.dispatch('deleteTask', task.id)"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Yes, Delete It
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "delete-modal",
  props: ["task", "modalId"],
};
</script>