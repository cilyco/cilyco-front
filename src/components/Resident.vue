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
    <ResidentContact/>
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
import ResidentContact from "./ResidentContact";

let route = useRoute()

console.log(route.params.id)

const current = ref(0);
</script>

<style scoped>

</style>