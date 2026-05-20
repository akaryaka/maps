<script lang="ts" setup>
</script>

<template>
  <div class="wrapper">
    <div class="app-box app-box_1">
      <h1>maps</h1>
      <form class="form" action="">
        <label for="name">название</label>
        <input name="name" type="text">
        <input type="submit" value="добавить">
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

<script>
  initMap();

  async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;
    const map: any = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById('map'),
      // Передаём параметры инициализации карты
      {
        location: {
            // Координаты центра карты
          center: [37.588144, 55.733842],
          zoom: 10
        }
      }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
  }
</script>