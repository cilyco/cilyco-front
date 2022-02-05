<template>
  <div>
    <a-button type="primary" @click="visible = true" style="margin-top: 10px">Ajouter un contact</a-button>
    <a-divider>Contact</a-divider>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <a>Delete</a>
        </template>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
    </a-table>
    <a-drawer
        v-model:visible="visible"
        style="color: red"
        title="Ajout contact"
        placement="right"
        width="550"
    >
      <a-form :model="formState" name="validate_other" layout="vertical">
        <a-form-item name="nom" label="Nom">
          <a-input v-model:value="contact.nom" placeholder="" />
        </a-form-item>
        <a-form-item name="prenom" label="Prenom">
          <a-input v-model:value="contact.prenom" placeholder="" />
        </a-form-item>
        <a-form-item name="telephone" label="Téléphone">
          <a-input-group compact>
            <a-select v-model:value="contact.prenom">
              <a-select-option value="Option1">Option1</a-select-option>
              <a-select-option value="Option2">Option2</a-select-option>
            </a-select>
            <a-input v-model:value="value6" style="width: 50%" />
          </a-input-group>
        </a-form-item>
        <a-form-item
            name="select-multiple"
            label="Select[multiple]"
            :rules="[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]"
        >
          <a-select
              v-model:value="formState['select-multiple']"
              mode="multiple"
              placeholder="Please select favourite colors"
          >
            <a-select-option value="red">Red</a-select-option>
            <a-select-option value="green">Green</a-select-option>
            <a-select-option value="blue">Blue</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="InputNumber">
          <a-form-item name="input-number" no-style>
            <a-input-number v-model:value="formState['input-number']" :min="1" :max="10" />
          </a-form-item>
          <span class="ant-form-text">machines</span>
        </a-form-item>

        <a-form-item name="switch" label="Switch">
          <a-switch v-model:checked="formState.switch" />
        </a-form-item>

        <a-form-item name="radio-group" label="Radio.Group">
          <a-radio-group v-model:value="formState['radio-group']">
            <a-radio value="a">item 1</a-radio>
            <a-radio value="b">item 2</a-radio>
            <a-radio value="c">item 3</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item name="commentaire" label="Commentaire">
          <a-textarea v-model:value="contact.commentaire" placeholder="Basic usage" :rows="4" />
        </a-form-item>

        <a-form-item label="Dragger">
          <a-form-item name="dragger" no-style>
            <a-upload-dragger v-model:fileList="formState.dragger" name="files" action="/upload.do">
              <p class="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p class="ant-upload-hint">Support for a single or bulk upload.</p>
            </a-upload-dragger>
          </a-form-item>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {
  InboxOutlined
} from '@ant-design/icons-vue';
const visible = ref(false)
const formState = reactive({
  'input-number': 3,
  'checkbox-group': ['A', 'B'],
  rate: 3.5,
});

const contact = reactive({
  nom: "",
  prenom: "",
  lien: "",
  commentaire: "",
  telephone: []
})

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  sorter: {
    compare: (a, b) => a.name - b.name,
    multiple: 3,
  },

}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
}];
const data = [{
  key: 1,
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
}, {
  key: 2,
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
}, {
  key: 3,
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
}];
</script>

<style scoped>

</style>