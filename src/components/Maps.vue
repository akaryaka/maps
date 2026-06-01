<script lang="ts" setup>
  import Form from './Form.vue';
</script>

<template>
  <div class="wrapper">
    <div class="app-box app-box_1">
      <h1 class="title">maps</h1>
      <Form />
    </div>
    <div class="app-box">
      <div id="map" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .app-box_1 {
    margin-right: 50px;
  }

  .title {
    margin-bottom: 10px;
    text-align: center;
  }

</style>