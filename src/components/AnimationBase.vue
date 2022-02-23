<template>
  <div>
    <a-transfer
        v-model:target-keys="targetKeys"
        :data-source="mockData"
        show-search
        :filter-option="filterOption"
        :render="item => item.nom + ' ' + item.prenom"
        :locale="transferLang"
        @change="handleChange"
        @search="handleSearch"
    />
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import {getResidents} from "../api/resident";
  import {transferLang} from "@/configuration/transferFilterLang"
  const mockData = ref([]);
  const targetKeys = ref([]);

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

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

</script>

<style scoped>

</style>