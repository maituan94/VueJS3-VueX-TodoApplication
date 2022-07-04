<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../../assets/mt-logo.png"
            alt=""
            width="50"
            height="50"
            class="me-3"
          />
          Todo Application
        </a>
        <live-date-time />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li v-if="$route.path === '/'" class="nav-item">
              <search />
            </li>
            <li v-for="(menu, index) in menus" :key="index" class="nav-item">
              <a class="btn btn-primary" :href="menu.to">{{ menu.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.navbar-dark .navbar-brand {
  color: black;
  font-weight: bold;
}
</style>
<script>
import LiveDateTime from "../../components/Shared/LiveDateTime.vue";
import Search from "../../components/Todo/Features/Search.vue";

export default {
  data() {
    return {
      menus: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
      ],
    };
  },
  components: {
    "live-date-time": LiveDateTime,
    "search": Search,
  },
};
</script>
