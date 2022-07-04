<template>
  <div
    class="dropdown-item pt-2 pb-2"
    data-bs-toggle="modal"
    :data-bs-target="'#'+modalId"
  >
    <i class="bi bi-trash"></i><span class="ms-3">Delete</span>
  </div>
</template>
<script>
export default {
  name: "delete-task",
  props: ["modalId"],
}
</script>