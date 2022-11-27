<template>
  <a-row>
    <a-col :span="12">
      <div>
        Animation liste
      </div>
    </a-col>
    <a-col :span="12">
      <div>
        Animation
        <AnimationBase/>
      </div>
    </a-col>
  </a-row>

</template>

<script setup>
import AnimationBase from '@/components/animation/AnimationBase'
</script>

<style scoped>

</style>