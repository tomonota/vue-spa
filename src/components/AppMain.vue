<template>
  <main>
    <div class="box">
      <router-view></router-view>
      <p>abcde</p>
    </div>
  </main>
</template>

<script>
</script>

<style lang="scss">
  main {
    height: 100%;
    padding: 30px 40px;
    color: white;
    font-weight: 100;
    font-size: 1.2rem;

    .box {
      width: 100%;
      height: 400px;
      background: #0f1544a9;
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
    }

  }
</style>