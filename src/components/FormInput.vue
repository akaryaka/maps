<script lang="ts" setup>
  const model = defineModel();
</script>

<template>
  <input v-model="model" class="input" type="text">
</template>

<style scoped>
  .input {
    padding: 10px;
    margin-bottom: 10px;
  }
</style>