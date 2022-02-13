<template>
  <div>
    <a-tabs v-model:activeKey="activeKey" tab-position="left">
      <a-tab-pane key="1" tab="Transmission">

      </a-tab-pane>
      <a-tab-pane key="2" tab="Calendrier">

      </a-tab-pane>
      <a-tab-pane key="3" tab="Soins">

      </a-tab-pane>
      <a-tab-pane key="4" tab="Chambre">

      </a-tab-pane>
      <a-tab-pane key="5" tab="Animation">

      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";

const activeKey = ref('1');
</script>

<style scoped>

</style>