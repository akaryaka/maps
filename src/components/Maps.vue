<script lang="ts" setup>
import Form from './Form.vue';

import { TRANSLATIONS, LOCATION, MARKER_LOCATION } from './variables';
import { InfoMessage, fetchGeoObject } from './commons';
import * as Vue from 'vue';

async function main() {
  const [ymaps3Vue] = await Promise.all([ymaps3.import('@yandex/ymaps3-vuefy'), ymaps3.ready]);

  const vuefy = ymaps3Vue.vuefy.bindTo(Vue);
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls } = vuefy.module(ymaps3);
  const { InfoMessage: InfoMessageV } = vuefy.module({ InfoMessage });
  const { YMapDefaultMarker } = await vuefy.module(await ymaps3.import('@yandex/ymaps3-default-ui-theme'));

  const app = Vue.createApp({
    components: {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapControls,
      YMapDefaultMarker,
      InfoMessageV
    },
    setup() {
      const geoObject = Vue.ref(null);
      const show = Vue.ref(false);

      // Replace balloon content with fetched data
      const handleMarkerClick = async () => {
        show.value = !show.value;
        if (!geoObject.value) {
          const response = await fetchGeoObject(MARKER_LOCATION);
          setTimeout(() => {
            geoObject.value = response;
          }, 3000);
        }
      };

      console.log('show', show);
      return {
        LOCATION,
        TRANSLATIONS,
        MARKER_LOCATION,
        geoObject,
        handleMarkerClick,
        // renderBalloon,
        show
      };
    },
    template: `
        <YMap :location="LOCATION" showScaleInCopyrights>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <YMapDefaultMarker
            :coordinates="MARKER_LOCATION"
            size="normal"
            iconName="fallback"
            :popup="{show, position: 'top'}"
            @click="handleMarkerClick"
          >
            <template #popupContent>
              <div class="balloon">
                <div v-if="!geoObject">
                  <p class="skeleton-title"></p>
                  <div class="description-container">
                    <p class="skeleton-description w60"></p>
                    <p class="skeleton-description w80"></p>
                    <p class="skeleton-description w70"></p>
                    <p class="skeleton-description w40"></p>
                  </div>
                </div>
                <div v-else>
                  <p class="title">{{ TRANSLATIONS.balloonTitle }}</p>
                  <p class="description">{{ TRANSLATIONS.balloonDescription }}</p>
                  <p class="description">
                    {{ TRANSLATIONS.address }}: {{ geoObject?.metaDataProperty.GeocoderMetaData.Address.formatted }}
                  </p>
                </div>
              </div>
            </template>
          </YMapDefaultMarker>
          <YMapControls position="top left">
            <InfoMessageV :text="TRANSLATIONS.infoText" />
          </YMapControls>
        </YMap>
      `
  });
  app.mount('#app-box');
}

main();


</script>

<template>
  <div class="wrapper">
    <div class="app-box app-box_1">
      <h1 class="title">maps</h1>
      <Form />
    </div>
    <div class="app-box">
      <div id="app-box" style="width: 400px; height: 400px">


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

.info_window {
  padding: 8px 12px 8px 40px;
  border-radius: 12px;
  background-color: #313133;
  background-image: url('./info-icon.svg');
  background-position: 10px 8px;
  background-repeat: no-repeat;
  color: #f2f5fa;
  font-size: 14px;
  line-height: 20px;
  min-width: max-content;
}

.title {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.description {
  line-height: 20px;
  font-size: 14px;
  margin: 0;
  color: #7b7d85ff;
}

.balloon {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  border-radius: 12px;
  padding: 8px 4px;
  height: 100%;
  width: 350px;
  overflow: hidden;
}

.skeleton-title {
  height: 20px;
  width: 45%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 0 8px 0;
}

.description-container {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.skeleton-title,
.skeleton-description {
  background-color: rgba(0, 0, 0, 0.05);
}

.skeleton-description {
  height: 9px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin: 0;
}

.skeleton-title::after,
.skeleton-description::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 100%);
  animation: loading 2s infinite;
}

.w40 {
  width: 40%;
}

.w60 {
  width: 60%;
}

.w70 {
  width: 70%;
}

.w80 {
  width: 80%;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(200%);
  }
}
</style>