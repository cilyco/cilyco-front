<template>
  <div>
    Animation
    <a-range-picker v-model:value="date" :placeholder="['Debut', 'Fin']" />
  </div>
</template>

<script setup>

import {ref} from "vue";

const date = ref()
</script>

<style scoped>

</style>