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
    <a-form :model="formState" name="nest-messages" layout="vertical">
      <a-form-item :name="['user', 'nom']" label="Nom" :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.nom" />
      </a-form-item>
      <a-form-item :name="['user', 'prenom']" label="Prénom" :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.prenom" />
      </a-form-item>
      <a-form-item :name="['user', 'naissance']" label="Date Naissance">
        <a-date-picker v-model:value="formState.user.naissance" value-format="DD-MM-YYYY" />
      </a-form-item>
      <a-form-item :name="['user', 'commentaire']" label="Commentaire">
        <a-textarea v-model:value="formState.user.commentaire" />
      </a-form-item>
      <a-form-item :name="['user', 'statut']" label="Statut">
        <a-select v-model:value="formState.user.statut">
          <a-select-option value="jack">Déjà résident</a-select-option>
          <a-select-option value="lucy">Inscription</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Ajout</a-button>
      </a-form-item>
    </a-form>
  </a-drawer>

</template>

<script setup>

import {ref,reactive} from "vue";

const isAddResident = ref(false)

const OpenAddResident = () => {
  isAddResident.value = true
}

const closeAddResident = () => {
  isAddResident.value = false
}

const formState = reactive({
  user: {
    nom: '',
    prenom: '',
    naissance: '22-12-2012',
    commentaire: '',
    statut: ''
  },
});

</script>

<style scoped>

</style>