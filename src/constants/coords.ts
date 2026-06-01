import type {YMapLocationRequest} from '@yandex/ymaps3-types';

export const LOCATION: YMapLocationRequest = {
  center: [20.5092, 54.7081], // starting position [lng, lat]
  zoom: 14.7 // starting zoom
};

// latitude - широта
// langitude - долгота
// 55.7522, 37.6156 - Москва широта, долгота