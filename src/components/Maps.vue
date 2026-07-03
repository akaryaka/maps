<script lang="ts" setup>
  import Form from './Form.vue';
  import { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } from './../assets/libs/ymaps3';
  import { YMapLocationRequest } from '@yandex/ymaps3-types';

  const LOCATION: YMapLocationRequest = {
    center: [37.588144, 55.733842],
    zoom: 9
  };

  // const {YMapDefaultMarker} = vuefy.module(await ymaps3.import('@yandex/ymaps3-default-ui-theme'));
</script>

<template>
  <div class="wrapper">
    <div class="app-box app-box_1">
      <h1 class="title">maps</h1>
      <Form />
    </div>
    <div class="app-box">
      <div style="width: 400px; height: 400px">
        <YMap :location="LOCATION">
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />

          <YMapMarker :coordinates="[37.588144, 55.733842]" :draggable="true">
            <!-- <section>
              <h1>You can drag this header</h1>
            </section> -->
          </YMapMarker>
        </YMap>
      </div>
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