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

  if (mapLabels.label.trim() != '' && mapLabels.lat !== 0 && mapLabels.lang !== 0) {
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