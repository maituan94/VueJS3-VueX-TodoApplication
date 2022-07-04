<template>
  <main-header />
  <main class="content container mt-3 mb-3">
    <router-view />
    <toast />
  </main>
  <main-footer />
</template>

<script>
import Header from "./views/layout/Header.vue";
import Footer from "./views/layout/Footer.vue";
import Toast from "./components/Shared/Toast.vue";
export default {
  data() {},
  components: {
    "main-header": Header,
    "main-footer": Footer,
    "toast": Toast
  },
  mounted() {
    this.$store.dispatch("getTasks");
  },
};
</script>
<style>
@import url("./assets/base.css");
.content {
  height: calc(100vh - 132px - 2rem);
}
</style>
