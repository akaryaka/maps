<script lang="ts" setup>
  import { listLabels } from '@/constants';
</script>

<template>
  <h2> Список локаций </h2>
  <ol>
    <li v-for="(item, index) in listLabels" :key="index">
      <p>{{ item.label }}</p>
      <p>{{ item.lat }}</p>
      <p>{{ item.lang }}</p>
    </li>
  </ol>
</template>