<template>
  <div>
    <a-steps v-model:current="current" type="navigation" size="small" percent="10">
      <a-step status="finish" title="Contact" sub-title="Le 20/01/2010">
        <template #icon>
          <phone-outlined />
        </template>
      </a-step>
      <a-step status="finish" title="Contrat" sub-title="Le 20/01/2010">
        <template #icon>
          <solution-outlined />
        </template>
      </a-step>
      <a-step status="finish" title="Visite">
        <template #icon>
          <loading-outlined />
        </template>
      </a-step>
      <a-step status="error" title="Accueil">
        <template #icon>
          <smile-outlined />
        </template>
      </a-step>
    </a-steps>
    <ResidentContact v-if="current === 0"/>
    <ResidentContrat v-if="current === 1"/>
    <ResidentVisite v-if="current === 2"/>
    <ResidentMenu/>
  </div>
</template>

<script setup>
import {
  PhoneOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue';

import {useRoute} from "vue-router";
import {ref} from "vue";
import ResidentContact from "./resident/ResidentContact";
import ResidentContrat from "./resident/ResidentContrat";
import ResidentMenu from "./ResidentMenu";
import ResidentVisite from "./resident/ResidentVisite";
import {getResident} from "@/api/resident";

let route = useRoute()

console.log(route.params.id)

const resident = ref({})
let useResident = async () => {
  let {data} = await getResident(route.params.id)
  resident.value = data
}
useResident()
const current = ref(0);
</script>

<style scoped>

</style>