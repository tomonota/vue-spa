<template>
  <nav class="col-sm-3 col-md-2 col-lg-2 col-xl-2 sidebar">
    <ul class="nav flex-column">
      <li class="nav-item" v-bind:class="{ active: isActive }">
        <a class="nav-link" href="#">Campaign <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <!-- change router-link -->
        <a class="nav-link" href="#">Reports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Analytics</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Export</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">

// Sidebar
.sidebar {
  background: rgb(7, 8, 77);
  // linear-gradient(to bottom,rgba(6, 8, 134, 0.788), rgb(2, 2, 58));
  position: fixed;
  top: 4rem;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  border-right: 1px solid #eee;

  // Sidebar navigation
  .nav-item {
    width: 100%;
    margin-bottom: 4px;
    padding: 0 20px;
  }
  .nav-link {
    font-size: large;
    font-weight: 400;
    color: rgb(12, 82, 161);
    border-radius: 0;
  }

  .active {
    background: #f7c9c9;
  }
}
</style>