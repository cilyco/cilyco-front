<template>
  <div>
    <ResidentsHeader></ResidentsHeader>
    <a-divider>Residents</a-divider>
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
          <span>
            <StarOutlined/>
            123
          </span>
            <span>
            <LikeOutlined/>
            123
          </span>
            <span>
            <MessageOutlined/>
            123
          </span>
          </template>
          <template #extra>
            <img
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <router-link :to="item.to">
                {{ item.title }}
              </router-link>
            </template>
            <template #avatar><a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>

  </div>
</template>

<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import ResidentsHeader from "@/components/ResidentsHeader";
import { v4 as uuidv4 } from 'uuid';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/big-ears-neutral';
const pagination = {
  onChange: (page) => {
    console.log(page);
  },
  pageSize: 3,
};

const listData = [];
for (let i = 0; i < 23; i++) {
  let svg = createAvatar(style, {
    seed: uuidv4()
  });
  listData.push({
    href: 'https://www.antdv.com/',
    to: `/resident/${i}`,
    title: `ant design vue part ${i}`,
    avatar: svg,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

</script>

<style scoped>

</style>