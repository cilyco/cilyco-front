<template>
  <div>
    Animation
    <a-range-picker v-model:value="date" :placeholder="['Debut', 'Fin']" />
    <AnimationBase/>
  </div>
</template>

<script setup>

import {ref} from "vue";
import AnimationBase from "./AnimationBase";

const date = ref()
</script>

<style scoped>

</style>