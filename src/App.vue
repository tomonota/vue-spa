<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 fixed-top h-100 left">
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 h-100 right">
          <app-header></app-header>
          <app-main></app-main>
        </div>
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
    .left {
      padding: 0;
    }
    .right {
      padding: 0;
      background:radial-gradient(farthest-side circle at center top, #78e6d7 0%, #427a9b 100%);
    }
  }
</style>