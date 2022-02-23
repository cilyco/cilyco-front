<template>
  <a-form :model="resident" name="nest-messages" layout="vertical">
    <a-form-item label="Nom" :rules="[{ required: true }]">
      <a-input v-model:value="resident.nom" />
    </a-form-item>
    <a-form-item label="Prénom" :rules="[{ required: true }]">
      <a-input v-model:value="resident.prenom" />
    </a-form-item>
    <a-form-item label="Date Naissance">
      <a-date-picker v-model:value="naissanceObj" format="DD/MM/YYYY" />
    </a-form-item>
    <a-form-item label="Commentaire">
      <a-textarea v-model:value="resident.commentaire" />
    </a-form-item>
    <a-form-item label="Statut">
      <a-select v-model:value="resident.statut">
        <a-select-option value="resident">Déjà résident</a-select-option>
        <a-select-option value="inscription">Inscription</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="$emit('submit', resident)">Ajout</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import {watch, reactive, ref} from "vue";

const resident = reactive({
  nom: '',
  prenom: '',
  commentaire: '',
  dateNaissance: '',
  statut: ''
});

const naissanceObj = ref("")

watch(naissanceObj, (newValue) => {
  resident.dateNaissance = newValue.toISOString()
});

</script>

<style scoped>

</style>