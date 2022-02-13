<template>
  <a-affix :style="{ position: 'absolute', bottom: '10px', right: '10px'}">
    <a-button type="primary" shape="round" size="large" @click="visible = !visible">
      <template #icon>
        <FundViewOutlined />
      </template>
    </a-button>
  </a-affix>
  <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="Basic Drawer"
      placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script setup>
import { FundViewOutlined } from '@ant-design/icons-vue';
import {ref} from "vue";
const visible = ref(false)
</script>

<style scoped>

</style>