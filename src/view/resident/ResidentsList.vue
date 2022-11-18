<template>
  <div>
    <ResidentsHeader></ResidentsHeader>
    <a-divider>Residents</a-divider>
    <a-input-search
        v-model:value="searchInput"
        placeholder="Nom, téléphone, ..."
        enter-button="Recherche"
        @search="onSearch"
        :loading="true"
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
            <a-tooltip>
              <template #title color="yellow">Surveiller</template>
              <a-button type="primary" shape="round" size="small">
                <template #icon>
                  <LoginOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </span>
          </template>
          <template #extra>
            <a-statistic title="Actuellement" value="En repas" />
          </template>
          <a-list-item-meta :description="item.commentaire">
            <template #title>
              <router-link :to="`/resident/${item.id}`">
                {{ item.prenom }} {{ item.nom }}
                <a-tag color="warning">En cours d'admission</a-tag>
              </router-link>
            </template>
            <template #avatar><a-avatar :src="`https://avatars.dicebear.com/api/avataaars/${item.id}.svg`" /></template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>

  </div>
</template>

<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined, LoginOutlined } from '@ant-design/icons-vue';
import ResidentsHeader from "@/components/ResidentsHeader";
import { ref } from "vue";
import { getResidents} from "@/api/resident.js"

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

const onSearch = (value, event) => {
  console.log(value, event)
}

const searchInput = ref("")

</script>