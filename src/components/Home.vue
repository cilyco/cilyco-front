<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic title="Residents" :value="statistique.resident_nb" style="margin-right: 50px">
        <template #suffix>
          <like-outlined />
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="12">
      <a-statistic title="Agent disponible" :value="statistique.agent_nb" class="demo-class">
        <template #suffix>
          <like-outlined />
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>

<script setup>
import { ref } from "vue";
import { getStatistiques } from "@/api/statistique";

const statistique = ref({})
let useStatistique = async () => {
  const {data} = await getStatistiques()
  statistique.value = data
}
useStatistique()
</script>