<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const {$api} = useNuxtApp()
const { t } = useI18n()
const categories = ref([])
onBeforeMount(async ()=>{
  categories.value = await $api('/api/shop/categories')

})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="bg-gray-50 rounded p-7 flex flex-col items-start justify-between gap-5" v-for="category in categories" :key="category.slug">
      <div class="">
        <img :src="category.image" alt="">
        <p class="font-medium">{{category.name}}</p>
        <p class="opacity-60">{{category.short_description}}</p>

      </div>
      <div class="">
        <p class="mb-2">{{category.display_amount}} {{t('total_items_in_category')}}</p>
        <nuxt-link class="text-primary border-b border-primary inline-block" :to="`/catalog/${category.slug}`">{{t('to_category')}}</nuxt-link>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>