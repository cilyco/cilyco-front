<template>
  <Layout style="height: 100%">
    <a-affix>
      <LayoutHeader style=" background-color: darkgrey; justify-items: right; justify-content: right; display: flex" >
        <div style="height: 64px; width: 100%; justify-content: center; padding: 10px">
          Cilyco
        </div>
        <div>
            <span style="margin-left: 24px">
              <a-badge :dot="true">
                <a-avatar shape="square">
                  <template #icon><MessageOutlined /></template>
                </a-avatar>
              </a-badge>
            </span>
        </div>
        <div>
            <span style="margin-left: 24px; cursor: pointer">
              <a-badge @click="router.push('/utilisateur')">
                <a-avatar shape="square">
                  <template #icon><UserOutlined /></template>
                </a-avatar>
              </a-badge>
            </span>
        </div>
      </LayoutHeader>
    </a-affix>
    <Layout>
      <LayoutSider breakpoint="lg" collapsed-width="0">
        <TheSidebar/>
      </LayoutSider>

      <LayoutContent style="padding: 24px;">
        <router-view/>
        <TheSideEvent/>
      </LayoutContent>
    </Layout>
  </Layout>


</template>

<script setup>
import { Layout, LayoutSider, LayoutHeader, LayoutContent } from "ant-design-vue";
import TheSidebar from "./components/TheSidebar";
import { UserOutlined, MessageOutlined } from '@ant-design/icons-vue';
import {useRouter} from "vue-router";
import TheSideEvent from "./components/TheSideEvent";

const router = useRouter()

</script>
