<template>
  <div>
    <a-form
      :model="formState"
      @finish="onFinish"
    >
      <a-form-item label="RangePicker[showTime]">
        <a-range-picker
          v-model:value="formState['range-time']"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item label="Residents">
        <a-transfer
          v-model:target-keys="formState['residents']"
          :data-source="mockData"
          show-search
          :filter-option="filterOption"
          :render="item => item.nom + ' ' + item.prenom"
          @change="handleChange"
          @search="handleSearch"
        />
      </a-form-item>
      <a-form-item label="Agents">
        <a-transfer
          v-model:target-keys="formState['agents']"
          :data-source="mockData"
          show-search
          :filter-option="filterOption"
          :render="item => item.nom + ' ' + item.prenom"
          @change="handleChange"
          @search="handleSearch"
        />
      </a-form-item>
      <a-form-item label="Besoin d'un vehicule ?" >
        <a-checkbox-group>
          <a-checkbox v-model:checked="useVehicule" value="Y" style="line-height: 32px">Oui</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="Agents" v-if="useVehicule">
        <a-transfer
          v-model:target-keys="formState['vehicules']"
          :data-source="mockData"
          show-search
          :filter-option="filterOption"
          :render="item => item.modele + ' ' + item.marque"
          @change="handleChange"
          @search="handleSearch"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";
  import {getResidents} from "../../api/resident";
  import { getVehicules } from "@/api/vehicule";
  const mockData = ref([]);
  const vehicules = ref([]);
  const targetKeys = ref([]);
  const useVehicule = ref(false);


  const fetchResidents = async () => {
    let {data} = await getResidents()
    data = data.map(resident => {
      resident.key = resident.id.toString()
      resident.title = resident.nom
      resident.description = resident.prenom
      return resident
    })
    mockData.value = data
  }
  fetchResidents()

  const fetchVehicule = async () => {
    let {data} = await getVehicules()
    data = data.map(vehicule => {
      vehicule.key = vehicule.id.toString()
      vehicule.title = vehicule.marque
      vehicule.description = vehicule.modele
      return vehicule
    })
    vehicules.value = data
  }
  fetchVehicule()

  const onFinish = (values) => {
    console.log('Success:', values, formState);
  };

  const filterOption = (inputValue, option) => {
    return option.nom.indexOf(inputValue) > -1;
  };

  const handleChange = (keys, direction, moveKeys) => {
    console.log(keys, direction, moveKeys);
    if (direction === "right")
      targetKeys.value.push(...moveKeys)
    if (direction === "left")
      targetKeys.value = targetKeys.value.filter(key => key !== moveKeys[0])
  };

  const formState = reactive({});

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

</script>

<style scoped>

</style>