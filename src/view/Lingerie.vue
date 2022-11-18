<template>
  <a-row>
    <a-col :span="6">
      <a-list
        class="demo-loadmore-list"
        :loading="loading"
        item-layout="horizontal"
        :data-source="residents"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions>
              <a key="list-loadmore-edit">edit</a>
            </template>
            <a-skeleton avatar :title="false" :loading="loading" active>
              <a-list-item-meta
                description="63 pieces de linge"
              >
                <template #title>
                  <a href="#">{{ item.prenom }} {{ item.nom }}</a>
                </template>
                <template #avatar>
                  <a-avatar :src="`https://avatars.dicebear.com/api/avataaars/${item.id}.svg`" />
                </template>
              </a-list-item-meta>
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
    </a-col>
    <a-col :span="18">
      <LingeResident  />
    </a-col>
  </a-row>
</template>

<script setup>
  import { ref } from "vue";
  import { getResidents} from "@/api/resident.js"
  import LingeResident from "@/components/lingerie/LingeResident";

  let loading = ref(true)
  let residents = ref([])
  const fetchResidents = async () => {
    let {data} = await getResidents()
    residents.value = data
    loading.value = false
  }

  fetchResidents()
</script>