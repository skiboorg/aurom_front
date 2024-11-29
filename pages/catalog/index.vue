<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_catalog')},
]);
useSeoMeta({
  title: `${t('breadcrumb_catalog')} L’aurom`,
  ogTitle: `${t('breadcrumb_catalog')} L’aurom`,
})
</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full" src="~/assets/images/other.png" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-4xl mb-5">{{t('breadcrumb_catalog')}}</h1>
      <PageCatalog/>
    </div>
  </section>
  <PageFaq/>
</template>

<style scoped>

</style>