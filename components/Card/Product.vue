<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps(['product'])
const route = useRoute()
console.log(route)
</script>

<template>
  <div  class="bg-gray-50 rounded p-7 flex flex-col items-start gap-5">
    <img :src="product?.image" alt="">
    <p class="font-medium text-xl">{{product?.name}}</p>

    <div class="font-normal">
      <p><span class="opacity-60">{{t('item_page_in_stock')}} </span> {{product?.in_stock}}</p>
      <p><span class="opacity-60">{{t('item_page_in_fas')}} </span> {{product?.unit}}</p>
      <p><span class="opacity-60">{{t('item_page_in_country')}} </span> {{product?.country}}</p>
      <p><span class="opacity-60">{{t('item_page_price')}} </span> {{product?.price}} ₽</p>
    </div>
    <NuxtLinkLocale class="block w-full" :to="`/catalog/${route.params.catalog_slug}/${product?.slug}`">
      <Button fluid severity="contrast"  :label="t('button_product_card')"/>
    </NuxtLinkLocale>


  </div>
</template>

<style scoped>

</style>