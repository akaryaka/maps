<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  interface Label {
    label: string,
    lat: number,
    lang: number,
  }

  const mapLabels = reactive({
    label: '',
    lat: 0,
    lang: 0,
  });

  const listLabels: any = ref([]);

  const addLabels = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const mapLabel: Label = {
      label: mapLabels.label,
      lat: mapLabels.lat,
      lang: mapLabels.lang
    }

    listLabels.value.push(mapLabel);
  }
</script>

<template>
  <div class="wrapper">
    <div class="app-box app-box_1">
      <h1>maps</h1>
      <form class="form">
        <input v-model="mapLabels.label" name="name" type="text" placeholder="название">
        <input v-model="mapLabels.lat" name="name" type="text" placeholder="широта">
        <input v-model="mapLabels.lang" name="name" type="text" placeholder="долгота">
        <input type="submit" value="добавить" @click="addLabels">
        <ul>
          <li v-for="(item, index) in listLabels" :key="index">
            <p>{{ item.label }}</p>
            <p>{{ item.lat }}</p>
            <p>{{ item.lang }}</p>
          </li>
        </ul>
      </form>
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

  .form {
    display: flex;
    flex-direction: column;
  }

  .app-box_1 {
    margin-right: 50px;
  }
</style>