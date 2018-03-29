<template>
  <header class="app-header">
      <span class="ui-header-title">{{headerTitle}}</span>
  </header>
</template>
<script>
export default {
    props: ['headerTitle']
}
</script>
<style>
.app-header{
    position: fixed;
    top:0;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    background: #fff;
    z-index: 300;
}
.ui-header-title {
    position: absolute;
    left: 85px;
    right: 80px;
    font-size: 18px;
    color: #333;
    font-weight: 500;
    z-index: -1;
    text-align: center;
}
</style>
