<template>
  <div>
    <a-tabs v-model:activeKey="activeKey" centered type="card" :tabBarGutter="3" size="large">
      <a-tab-pane key="1" tab="Transmission">
        <ResidentTransmission/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Calendrier">
        <ResidentCalendier/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Soins">
        <ResidentSoins/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="Chambre">
        <ResidentChambre/>
      </a-tab-pane>
      <a-tab-pane key="5" tab="Animation">
        <ResidentAnimation/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";
import ResidentAnimation from "./resident/ResidentAnimation";
import ResidentChambre from "./resident/ResidentChambre";
import ResidentSoins from "./resident/ResidentSoins";
import ResidentCalendier from "./resident/ResidentCalendier";
import ResidentTransmission from "./resident/ResidentTransmission";

const activeKey = ref('1');
</script>

<style scoped>

</style>