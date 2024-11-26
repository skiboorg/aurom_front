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



</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full"  src="~/assets/images/other.png" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-2xl md:text-4xl mb-5">{{t('breadcrumb_news')}}</h1>

      <div class="grid grid-cols-2 gap-2">
        <div class="bg-gray-50 rounded p-7 flex flex-col items-start gap-5" v-for="item in news" :key="item.id">
          <img :src="item.image" alt="">
          <p class="font-medium">{{item.name}}</p>
          <p class="opacity-60">{{item.description}}</p>
          <NuxtLinkLocale class="border-b inline-block border-black" :to="`/news/${item.slug}`">{{t('button_product_card')}}</NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
