import { mapLabels, listLabels } from "@/constants";
import type { Label } from "@/constants";
import { watch } from "vue";

export const addLabels = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const mapLabel: Label = {
    label: mapLabels.label,
    lat: mapLabels.lat,
    lang: mapLabels.lang
  }

  if (mapLabels.label.trim() != '') {
    listLabels.value.push(mapLabel);
  }
}

watch(
  () => mapLabels.label, 
    (newLabel: string, oldLabel:string) => {
      console.log(oldLabel, newLabel);
  }, 
  {deep: true}
)