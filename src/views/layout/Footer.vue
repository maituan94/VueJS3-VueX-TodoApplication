<template>
  <footer class="footer d-flex">
    <span> Copyright &copy; MT </span>
    <ul>
      <li class="nav-item"><a href="#">Privacy Policy</a></li>
      <li class="nav-item"><a href="#">Terms of use</a></li>
    </ul>
  </footer>
</template>
<style scoped>
.footer {
  background-color: var(--primary-color);
  color: black;
  padding: 1rem;
  height: 56px;
}

.footer span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: auto;
}

.footer li {
  padding: 0 0.5rem;
}

.footer a {
  color: black;
}
</style>