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
    <p class="font-medium">{{product?.name}}</p>

    <div class="font-normal">
      <p><span class="opacity-60">В наличии: </span> {{product?.in_stock}}</p>
      <p><span class="opacity-60">Фасовка: </span> {{product?.unit}}</p>
      <p><span class="opacity-60">Страна производства: </span> {{product?.country}}</p>
    </div>
    <NuxtLinkLocale :to="`/catalog/${route.params.catalog_slug}/${product?.slug}`">
      <Button fluid severity="contrast"  :label="t('button_product_card')"/>
    </NuxtLinkLocale>


  </div>
</template>

<style scoped>

</style>