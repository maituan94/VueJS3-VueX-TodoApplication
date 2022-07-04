<template>
  <form class="d-flex">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search Todo"
      aria-label="Search"
      @keyup="onSearch"
    />
  </form>
</template>
<script>
export default {
  name: "tools-search",
  methods: {
    onSearch(e) {
      const value = e.target.value;
      this.$store.commit("setSearch", value);
    },
  },
};
</script>