<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_catalog')},
]);

</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full" src="https://placehold.co/1920x800" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-4xl mb-5">{{t('breadcrumb_catalog')}}</h1>
      <PageCatalog/>
    </div>
  </section>
  <PageFaq/>
</template>

<style scoped>

</style>