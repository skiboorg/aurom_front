<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const pageData = ref({})

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('promotion')},
]);
useSeoMeta({
  title: `${t('breadcrumb_catalog')} L’aurom`,
  ogTitle: `${t('promotion')} L’aurom`,
})
const {$api} = useNuxtApp()
onBeforeMount(async (): Promise<void> => {

      pageData.value = await $api(`/api/data/sales?sale_type=sale`)
    }
)
</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full" src="~/assets/images/other.png" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-4xl mb-5">{{pageData.name}}</h1>
      <div v-if="pageData.content" class="mb-9" v-html="pageData.content"></div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CardProduct v-for="(product, index) in pageData.product" :key="index" :product="product" />
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>