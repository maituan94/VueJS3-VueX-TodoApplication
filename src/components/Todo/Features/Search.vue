<template>
  <form class="d-flex">
    <input
    v-model="value"
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
  data: () => ({
    value: ''
  }),
  methods: {
    onSearch() {
        this.$store.commit('setSearch', this.value)
    }
  }
};
</script>