<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const {$api} = useNuxtApp()
const news = ref([])
const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_news')},
]);

onBeforeMount(async (): Promise<void> => {

  news.value = await $api(`/api/news/all`)
})
useSeoMeta({
  title: `${t('breadcrumb_news')} L’aurom`,
  ogTitle: `${t('breadcrumb_news')} L’aurom`,
})


</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full"  src="~/assets/images/other.png" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-2xl md:text-4xl mb-5">{{t('breadcrumb_news')}}</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div class="bg-gray-50 rounded p-7 flex flex-col items-start gap-5" v-for="item in news" :key="item.id">
          <img class="w-full object-cover" :src="item.image" alt="">
          <p class="font-medium">{{item.name}}</p>
          <p class="opacity-60">{{item.description}}</p>

          <div class="flex items-center justify-between w-full">
            <NuxtLinkLocale class="border-b block border-black" :to="`/news/${item.slug}`">{{t('button_product_card')}}</NuxtLinkLocale>
            <p class="opacity-60">{{new Date(item.created).toLocaleDateString()}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
