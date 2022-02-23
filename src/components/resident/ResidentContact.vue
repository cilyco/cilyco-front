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
      <a-form :model="contact" name="validate_other" layout="vertical">
        <a-form-item name="nom" label="Nom">
          <a-input v-model:value="contact.nom" placeholder="" />
        </a-form-item>
        <a-form-item name="prenom" label="Prenom">
          <a-input v-model:value="contact.prenom" placeholder="" />
        </a-form-item>
        <a-form-item name="telephone" label="Téléphone 1">
          <a-input-group compact>
            <a-select v-model:value="contact.telephone_1_type" style="width: 40%">
              <a-select-option value="port">Portable</a-select-option>
              <a-select-option value="fixe">Fixe</a-select-option>
              <a-select-option value="urgence">Urgence</a-select-option>
            </a-select>
            <a-input v-model:value="contact.telephone_1_numero" style="width: 60%" />
          </a-input-group>
        </a-form-item>
        <a-form-item name="telephone" label="Téléphone 2">
          <a-input-group compact>
            <a-select v-model:value="contact.telephone_2_type" style="width: 40%">
              <a-select-option value="port">Portable</a-select-option>
              <a-select-option value="fixe">Fixe</a-select-option>
              <a-select-option value="urgence">Urgence</a-select-option>
            </a-select>
            <a-input v-model:value="contact.telephone_2_numero" style="width: 60%" />
          </a-input-group>
        </a-form-item>
        <a-form-item name="select-multiple" label="Lien">
          <a-select v-model:value="contact.lien" mode="multiple" placeholder="Merci de selectionner un lien avec le résident">
            <a-select-option value="conf">Personne de confiance</a-select-option>
            <a-select-option value="enfant">Enfant</a-select-option>
            <a-select-option value="parent">Parent</a-select-option>
            <a-select-option value="frere-soeur">Frere, Soeur</a-select-option>
            <a-select-option value="ami">Ami</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item name="switch" label="Actif">
          <a-switch v-model:checked="contact.actif" />
        </a-form-item>

        <a-form-item name="commentaire" label="Commentaire">
          <a-textarea v-model:value="contact.commentaire" placeholder="Commentaire" :rows="4" />
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
  lien: [],
  commentaire: "",
  telephone_1_type: "",
  telephone_1_numero: "",
  telephone_2_type: "",
  telephone_2_numero: "",
  actif: true
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