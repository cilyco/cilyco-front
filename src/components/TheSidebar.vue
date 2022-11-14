<template>
  <a-menu
      id="dddddd"
      mode="inline"
      @click="handleClick"
  >
    <a-menu-item key="1">
      <template #icon>
        <HomeOutlined />
      </template>
      <span>Accueil</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <SmileOutlined />
      </template>
      <template #title>Residents</template>
      <a-menu-item key="2" to="/residents">Liste</a-menu-item>
      <a-menu-item key="3" to="/">Repas</a-menu-item>
      <a-menu-item key="4" to="/">Inscription</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <TeamOutlined />
      </template>
      <template #title>Agents</template>
      <a-menu-item key="5" to="/agents">Liste</a-menu-item>
      <a-menu-item key="6" to="/">Temps</a-menu-item>
      <a-menu-item key="7" to="/">Option 1</a-menu-item>
    </a-sub-menu>

    <a-menu-item key="8" to="/vehicule">
      <template #icon>
        <CarOutlined />
      </template>
      <span>Véhicules</span>
    </a-menu-item>

    <a-menu-item key="9" to="/cuisine">
      <template #icon>
        <CoffeeOutlined />
      </template>
      <span>Cuisine</span>
    </a-menu-item>

    <a-menu-item key="10" to="/stock">
      <template #icon>
        <BarcodeOutlined />
      </template>
      <span>Stock</span>
    </a-menu-item>

    <a-menu-item key="11" to="/comptabilite">
      <template #icon>
        <PieChartOutlined />
      </template>
      <span>Comptabilité</span>
    </a-menu-item>

    <a-menu-item key="12" to="/animation">
      <template #icon>
        <LikeOutlined />
      </template>
      <span>Animation</span>
    </a-menu-item>

    <a-menu-item key="13" to="/lingerie">
      <template #icon>
        <SkinOutlined />
      </template>
      <span>Lingerie</span>
    </a-menu-item>

    <a-menu-divider/>
  </a-menu>
</template>

<script setup>

import { PieChartOutlined, BarcodeOutlined, CarOutlined, CoffeeOutlined, HomeOutlined, SmileOutlined, TeamOutlined, SkinOutlined, LikeOutlined } from '@ant-design/icons-vue';
import {useRouter} from "vue-router";

// import {useUser} from "../store/user";

const router = useRouter()

const handleClick = event => {
  console.log(event.item.to)
  let route = event.item.to || "/"
  router.push(route)
}
</script>

<style scoped>

</style>