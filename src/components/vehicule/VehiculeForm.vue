<template>
  {{props.id}}
  {{vehicule}}
</template>

<script setup>
  import { defineProps, ref } from "vue";
  import { getVehicule } from "@/api/vehicule";

  const props = defineProps({
    id: Number
  })

  const vehicule = ref({})
  const useVehicule = async () => {
    const {data} = await getVehicule(props.id)
    vehicule.value = data
  }
  useVehicule()
</script>