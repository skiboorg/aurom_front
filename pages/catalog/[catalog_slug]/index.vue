<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {$api} = useNuxtApp()
const { t } = useI18n()
const route = useRoute()
let items

const category = ref({})
onBeforeMount(async ()=>{
  category.value = await $api(`/api/shop/category/${route.params.catalog_slug}`)
  items = [
    { label: t('breadcrumb_home'), route: '/' },
    { label: t('breadcrumb_catalog'), route: '/catalog'},
    { label: category.value.name }
  ]
})

</script>

<template>
  <section v-if="category">
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full" src="https://placehold.co/1920x800" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-4xl mb-5 mt-5">{{category?.name}}</h1>
      <div class="grid grid-cols-1 md:grid-cols-4">
        <CardProduct v-for="(product, index) in category.products" :key="index" :product="product" />
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>