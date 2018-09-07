<template>
  <nav class="navbar navbar-toggleable-md header">
    <ul class="navbar-nav mr-auto">
    </ul>
    <ul class="nav navbar-nav">
      <form class="form-inline my-2 my-lg-0">
        <input type="text" class="form-control mr-sm-2" 
        placeholder="広告主検索" aria-label="広告主検索">
      </form>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss">
  .header {
    color: #FFFFFF;
    height: 4rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
    padding: 0 40px;

    a {
      color: #fff;
      margin-right: 20px;
    }

    form {
      float: right;
    }
  }
</style>