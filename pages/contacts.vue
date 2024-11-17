<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_contacts')},
]);

</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full"  src="~/assets/images/other.png" alt="">

      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-2xl md:text-4xl mb-5">{{t('breadcrumb_contacts')}}</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div class="bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-3">{{t('contacts_rf_title')}}</p>
          <p class="opacity-60 font-medium whitespace-pre-wrap">{{t('contacts_rf_text')}}</p>
        </div>
        <div class="bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-3">{{t('contacts_gr_title')}}</p>
          <p class="opacity-60 font-medium whitespace-pre-wrap">{{t('contacts_gr_text')}}</p>
        </div>
        <div class="bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-3">{{t('contacts_ar_title')}}</p>
          <p class="opacity-60 font-medium whitespace-pre-wrap">{{t('contacts_ar_text')}}</p>
        </div>
        <div class="bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-3">{{t('contacts_tr_title')}}</p>
          <p class="opacity-60 font-medium whitespace-pre-wrap">{{t('contacts_tr_text')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>