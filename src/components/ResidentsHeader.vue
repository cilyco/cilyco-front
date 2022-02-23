<template>
  <a-page-header title="Residents" sub-title="Liste des résidents de l'établissement" @back="() => $router.go(-1)">
    <template #tags>
      <a-tag color="blue">Running</a-tag>
    </template>
    <template #extra>
      <a-button key="3" @click="isAddResident = true">Ajout résident</a-button>
      <a-button key="2">Soins</a-button>
      <a-button key="1" type="primary">Primary</a-button>
    </template>
    <a-row type="flex">
      <a-statistic title="Résidents" value="62" />
      <a-statistic title="En repas" value="22" :style="{margin: '0 32px'}"/>
      <a-statistic title="En animation" value="3"/>
    </a-row>
  </a-page-header>
  <a-drawer title="Ajouter un résident" :visible="isAddResident" width="400">
    <ResidentAddForm @submit="submitResident"/>
  </a-drawer>
</template>

<script setup>

import {ref} from "vue";
import ResidentAddForm from "@/components/ResidentAddForm";
import {addResident} from "@/api/resident";

const isAddResident = ref(false)

const submitResident = async (resident) => {
  console.log(resident)
  await addResident(resident)
}

</script>

<style scoped>

</style>