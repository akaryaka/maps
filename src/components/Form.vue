<script lang="ts" setup>
  import { mapLabels} from '@/constants';
  import { addLabels } from '@/composables/maps';
  import FormOutput from './FormOutput.vue';
  import FormInput from './FormInput.vue';
</script>

<template>
  <form class="form">
    <FormInput v-model="mapLabels.label" :placeholder="mapLabels.label"/>
    <input class="btn-submit" type="submit" value="добавить" @click="addLabels">
  </form>
  <FormOutput />
</template>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .btn-submit {
    cursor: pointer;
    padding: 10px;
    background-color: rgb(241, 251, 91);
    border: none;
    border-radius: 5px;
  }
</style>