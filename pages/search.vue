<script setup lang="ts">

const {$api} = useNuxtApp()
const products = ref([])
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const q = ref(null)
const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_search')},
]);



const search = async () => {
  products.value = await $api(`/api/shop/search?q=${q.value}`)
}

</script>

<template>
  <section>
    <div class="container">
      <PageBreadcrumbs :items="items" />

        <InputGroup  class="mb-4">
          <InputGroupAddon>
            <i class="pi pi-search"></i>
          </InputGroupAddon>
          <InputText v-model="q" placeholder="Поиск по артикулу, названию товара" />
          <InputGroupAddon>
            <Button :disabled="!q"  @click="search" severity="secondary" label="Найти" />
          </InputGroupAddon>
        </InputGroup>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CardProduct v-for="(product, index) in products" :key="index" :product="product" />
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>