<template>
  <div>
    data {{ id }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  id: Number
})
</script>

<style scoped>

</style>