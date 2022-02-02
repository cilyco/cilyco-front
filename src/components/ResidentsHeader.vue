<template>
  <a-page-header title="Residents" sub-title="Liste des résidents de l'établissement" @back="() => $router.go(-1)">
    <template #tags>
      <a-tag color="blue">Running</a-tag>
    </template>
    <template #extra>
      <a-button key="3" @click="OpenAddResident">Ajout résident</a-button>
      <a-button key="2">Soins</a-button>
      <a-button key="1" type="primary">Primary</a-button>
    </template>
    <a-row type="flex">
      <a-statistic title="Résidents" value="62" />
      <a-statistic title="En repas" value="22" :style="{margin: '0 32px'}"/>
      <a-statistic title="En animation" value="3"/>
    </a-row>
  </a-page-header>

  <a-drawer title="Ajouter un résident" :visible="isAddResident" @close="closeAddResident" width="400">
    <a-form :model="resident" name="nest-messages" layout="vertical">
      <a-form-item :name="['nom']" label="Nom" :rules="[{ required: true }]">
        <a-input v-model:value="resident.nom" />
      </a-form-item>
      <a-form-item :name="['prenom']" label="Prénom" :rules="[{ required: true }]">
        <a-input v-model:value="resident.prenom" />
      </a-form-item>
      <a-form-item :name="['naissance']" label="Date Naissance">
        <a-date-picker v-model:value="resident.naissance" value-format="DD-MM-YYYY" />
      </a-form-item>
      <a-form-item :name="['commentaire']" label="Commentaire">
        <a-textarea v-model:value="resident.commentaire" />
      </a-form-item>
      <a-form-item :name="['statut']" label="Statut">
        <a-select v-model:value="resident.statut">
          <a-select-option value="jack">Déjà résident</a-select-option>
          <a-select-option value="lucy">Inscription</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" @click="postResident()">Ajout</a-button>
      </a-form-item>
    </a-form>
  </a-drawer>

</template>

<script setup>

import {ref, reactive} from "vue";

import { useFetch } from "@/api/fetch";

const isAddResident = ref(false)

const OpenAddResident = () => {
  isAddResident.value = true
}

const closeAddResident = () => {
  isAddResident.value = false
}

const resident = reactive({
  nom: '',
  prenom: '',
  naissance: '22-12-2012',
  commentaire: '',
  statut: '',
  type: 'resident'
});

const postResident = async () => {
  console.log(resident)
  const { data, error } = await useFetch("").post(JSON.stringify(resident), 'json').json()
  console.log(data, error)
}

</script>

<style scoped>

</style>