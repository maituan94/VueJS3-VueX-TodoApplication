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
          <input type="date" class="form-control" />
        </div>
        <div class="modal-footer">
          <button
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
  props: ["task", "modalId"]
};
</script>