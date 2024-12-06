<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const {$api} = useNuxtApp()
const news_item = ref({})
const route = useRoute()
let items = []

onBeforeMount(async (): Promise<void> => {

  news_item.value = await $api(`/api/news/all/${route.params.slug}`)
   items = [
    { label: t('breadcrumb_home'), route: '/' },
    { label: t('breadcrumb_news'), route: '/news'},
    { label: news_item.value.name},
  ];

  useSeoMeta({
    title: `${news_item.value.name}`,
    ogTitle: `${news_item.value.name}`,
  })
})





</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full"  :src="news_item.image_top" alt="">
      <PageBreadcrumbs :items="items" />
      <div class="w-full md:w-10/12 m-auto">
        <h1 class="font-medium text-2xl md:text-4xl mb-5">{{news_item.name}}</h1>

        <div class="mb-4" v-html="news_item.content"></div>

        <div v-if="news_item?.images.length>0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="" v-for="image in news_item.images" :key="image.id">
            <img :src="image.image" class="w-full"  alt="">
          </div>

        </div>

      </div>


    </div>
  </section>
</template>
