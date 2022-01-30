<template>
  <Layout style="height: 100%">
    <LayoutSider breakpoint="lg" collapsed-width="0">
      <div style="height: 50px; width: 100%; background-color: aqua; justify-content: center; padding: 10px">
        Cilyco
      </div>
      <TheSidebar/>
    </LayoutSider>
    <Layout>
      <LayoutHeader  :style="{ background: '#fff', padding: 0 }" >

      </LayoutHeader>
      <LayoutContent style="padding: 24px;">
        <a-page-header
            :ghost="false"
            title="Title"
            sub-title="This is a subtitle"
            @back="() => $router.go(-1)"
        >
          <template #extra>
            <a-button key="3">Operation</a-button>
            <a-button key="2">Operation</a-button>
            <a-button key="1" type="primary">Primary</a-button>
          </template>
          <a-descriptions size="small" :column="3">
            <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
            <a-descriptions-item label="Association">
              <a>421421</a>
            </a-descriptions-item>
            <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
            <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
            <a-descriptions-item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </a-descriptions-item>
          </a-descriptions>
        </a-page-header>
        <router-view/>
      </LayoutContent>
      <layout-footer>
        test
      </layout-footer>
    </Layout>
  </Layout>


</template>

<script setup>
import { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter } from "ant-design-vue";
import TheSidebar from "./components/TheSidebar";

</script>
