<template>
    <a-row>
      <a-col :span="6">
        <a-button type="dashed" block style="margin-bottom: 10px" @click="visible = true">Ajout véhicule</a-button>

        <a-list item-layout="horizontal" :data-source="vehicules" :loading="isLoading">
          <template #renderItem="{ item }" style="background-color: grey; padding: 5px">
            <a-list-item>
              <a-list-item-meta :description="item.commentaire">
                <template #title>
                  <a @click="selected = item.id">{{ item.marque }} {{ item.modele }}</a>
                </template>
                <template #avatar>
                  <a-avatar size="large" :style="{'background-color': item.couleur || 'grey'}" />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
      <a-col :span="18">
        <a-calendar @panelChange="onPanelChange" @select="onSelect"></a-calendar>
        <VehiculeData :id="selected"/>
      </a-col>
    </a-row>
  <a-drawer
      v-model:visible="visible"
      style="color: red"
      title="Ajout véhicule"
      placement="right"
      width="550"
  >
    <a-form :model="vehicule" name="validate_other" layout="vertical">
      <a-form-item name="marque" label="Marque">
        <a-input v-model:value="vehicule.marque" placeholder="" />
      </a-form-item>
      <a-form-item name="modele" label="Modele">
        <a-input v-model:value="vehicule.modele" placeholder="" />
      </a-form-item>
      <a-form-item name="immatriculation" label="Immatriculation">
        <a-input v-model:value="vehicule.immatriculation" placeholder="" />
      </a-form-item>
      <a-form-item name="kilometrage" label="Kilometrage">
        <a-input-number v-model:value="vehicule.kilometrage" addon-after="Km"></a-input-number>
      </a-form-item>
      <a-form-item name="couleur" label="Couleur">
        <span style="margin-right: 24px">
          <a-badge :dot="vehicule.couleur == 'black'">
            <a-avatar shape="square" style="background-color: black; cursor: pointer" @click="vehicule.couleur = 'black'"/>
          </a-badge>
        </span>
        <span style="margin-right: 24px; ">
          <a-badge :dot="vehicule.couleur == 'white'">
            <a-avatar shape="square" style="background-color: white; cursor: pointer; border: black solid 1px" @click="vehicule.couleur = 'white'"/>
          </a-badge>
        </span>
        <span style="margin-right: 24px">
          <a-badge :dot="vehicule.couleur == 'red'">
            <a-avatar shape="square" style="background-color: red; cursor: pointer" @click="vehicule.couleur = 'red'"/>
          </a-badge>
        </span>
        <span style="margin-right: 24px">
          <a-badge :dot="vehicule.couleur == 'blue'">
            <a-avatar shape="square" style="background-color: blue; cursor: pointer" @click="vehicule.couleur = 'blue'"/>
          </a-badge>
        </span>
        <span style="margin-right: 24px">
          <a-badge :dot="vehicule.couleur == 'green'">
            <a-avatar shape="square" style="background-color: green; cursor: pointer" @click="vehicule.couleur = 'green'"/>
          </a-badge>
        </span>
      </a-form-item>

      <a-form-item name="commentaire" label="Commentaire">
        <a-textarea v-model:value="vehicule.commentaire" placeholder="Commentaire" :rows="4" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" @click="postVehicule">Submit</a-button>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>

<script setup>
import {reactive, ref} from "vue";
import {getVehicules, setVehicule} from "@/api/vehicule";
import VehiculeData from "./VehiculeData";

const visible = ref(false)

const vehicule = reactive({
  modele: "",
  marque: "",
  kilometrage: 0,
  immatriculation: "",
  etat: "",
  couleur: ""
})

const onPanelChange = (date, mode) => {
  console.log("PANEL CHANGE", date, mode)
}

const onSelect = (date) => {
  console.log("SELECT DATE", date)
}

const vehicules = ref([]);

const selected = ref(null)

const isLoading = ref(true)

const getVehicule = async () => {
  let {data} = await getVehicules()
  vehicules.value = data
  isLoading.value = false
}

const postVehicule = async () => {
  await setVehicule(vehicule)
  visible.value = false
  await getVehicule()
}

getVehicule()

</script>