<template>
    <a-row>
      <a-col :span="6">
        <a-list :grid="{ gutter: 2, column: 1 }" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title="item.title">Card content</a-card>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
      <a-col :span="18">
        Vehicule
      </a-col>
    </a-row>

</template>

<script setup>
const data = [{
  title: 'Title 1',
}, {
  title: 'Title 2',
}, {
  title: 'Title 3',
}, {
  title: 'Title 4',
}];
</script>

<style scoped>

</style>