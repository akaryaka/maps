import { reactive, ref } from "vue";

export interface Label {
  label: string,
  lat: number,
  lang: number,
}

export const mapLabels = reactive({
  label: 'название',
  lat: 0,
  lang: 0,
});

export const listLabels = ref<Label[]>([]);
