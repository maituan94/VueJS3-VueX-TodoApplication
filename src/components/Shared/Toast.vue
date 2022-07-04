<template>
  <div class="toast-container position-absolute p-3 bottom-0 end-0 mb-5
  ">
    <div
      class="toast align-items-center "
      :class="$store.state.toaster.show ? 'show': 'hide'"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">{{$store.state.toaster.text}}</div>
        <button
          type="button"
          class="btn-close me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "toaster",
};
</script>
<style>
.toast-body {
  font-size: 1.5em;
  font-weight: bold;
}
</style>