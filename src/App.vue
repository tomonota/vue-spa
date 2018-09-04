<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppMain from '@/components/AppMain.vue'

export default {
  components: {
    'app-header': AppHeader,
    'app-sidebar': AppSidebar,
    'app-main': AppMain,
  }
}
</script>

<style lang="scss">
  @import 'bootstrap';
  #app {
    padding-top: 4rem;
  }
</style>