<template>
  <nav class="sidebar">
    <a class="brand" href="#">
      <logo class="w-75"/>
    </a>
    <ul class="nav">
      <router-link to="/campaign" tag="li" class="nav-item">
        <a class="nav-link">Campaign</a>
      </router-link>
      <router-link to="/report" tag="li" class="nav-item">
        <a class="nav-link">Report</a>
      </router-link>
      <router-link to="/export" tag="li" class="nav-item">
        <a class="nav-link">Export</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import Logo from '@/images/logo.svg'
export default {
  components: {
    'logo': Logo
  }
}
</script>

<style lang="scss">

// Sidebar
.sidebar {
  width: 100%;
  height: 100%;
  background: #171e3b;
  z-index: 1000;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */

  .brand {
    display: block;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  // Sidebar navigation
  .nav-item {
    width: 100%;
    height: 60px;
    padding: 0 20px;
  }

  .nav-link {
      height: 60px;
      font-size: 1rem;
      font-weight: 300;
      color: #4c687a;
      border-radius: 0;
      display: table-cell;
      vertical-align: middle;
  }

  .router-link-active {
    background: linear-gradient(to right, #458a96 0%, #171e3b 100%);

    a {
      color: #ffffff;
    }
  }

  .active {
    background: #f7c9c9;
  }
}
</style>