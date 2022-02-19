<template>
  <div>
    <ResidentsHeader></ResidentsHeader>
    <a-divider>Residents</a-divider>
    <a-input-search
        v-model:value="searchInput"
        placeholder="Nom, téléphone, ..."
        enter-button="Recherche"
        @search="onSearch"
    />
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="residents">
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
          <span>
            <a-button type="primary" shape="round" size="small">
              <template #icon>
                <LoginOutlined />
              </template>
            </a-button>
          </span>
          </template>
          <template #extra>
            <img
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-list-item-meta :description="item.commentaire">
            <template #title>
              <router-link :to="`/resident/${item.id}`">
                {{ item.prenom }} {{ item.nom }}
                <a-tag color="warning">Admission</a-tag>
              </router-link>
            </template>
            <template #avatar><a-avatar :src="item.id" /></template>
          </a-list-item-meta>
          {{ item.commentaire }}
        </a-list-item>
      </template>
    </a-list>

  </div>
</template>

<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined, LoginOutlined } from '@ant-design/icons-vue';
import ResidentsHeader from "@/components/ResidentsHeader";
import { ref } from "vue";
import { getResidents} from "@/api/fetch.js"

let residents = ref([])
const fetchResidents = async () => {
  let {data} = await getResidents()
  residents.value = data
}

fetchResidents()

const pagination = {
  onChange: (page) => {
    console.log(page);
  },
  pageSize: 3,
};

const searchInput = ref("")

</script>

<style scoped>

</style>