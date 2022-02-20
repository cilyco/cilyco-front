<template>
    <a-row>
      <a-col :span="6">
        <a-button type="dashed" block style="margin-bottom: 10px" @click="visible = true">Ajout véhicule</a-button>
        <a-card hoverable v-for="vehicule in vehicules" :key="vehicule.id" style="margin-bottom: 10px">
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta :title="vehicule.modele" :description="vehicule.marque">
            <template #avatar>
              <a-avatar size="large">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="18">
        Vehicule
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
import { SettingOutlined, EditOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons-vue';
import {reactive, ref} from "vue";
import {getVehicules, setVehicule} from "@/api/vehicule";

const visible = ref(false)

const vehicule = reactive({
  modele: "",
  marque: "",
  kilometrage: 0,
  immatriculation: "",
  etat: ""
})

const vehicules = ref([]);

let getVehicule = async () => {
  let {data} = await getVehicules()
  vehicules.value = data
}

getVehicule()

const postVehicule = () => {
  setVehicule(vehicule)
  getVehicule()
}

</script>

<style scoped>

</style>