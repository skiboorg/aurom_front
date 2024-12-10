<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section>
    <div class="container bg-[url('/map.png')] bg-no-repeat bg-right  w-full">
      <p class="text-sm md:text-md opacity-60 mb-4 md:mb-9">{{t('index_tag_add_map')}}</p>
      <div class="grid grid-cols-1 mb-14 md:mb-28 pt-11 gap-5 md:gap-0 ">
        <div class="w-full md:w-1/3 ">
          <h3 class="text-2xl  uppercase font-bold mb-5 w-full md:w-[80%]">{{t('index_delivery_map_opt1_title')}}</h3>
          <p class="">{{t('index_delivery_map_opt1_text')}}</p>
        </div>

        <div class="w-full md:w-[40%] md:ml-auto ">
          <h3 class="text-2xl   font-bold mb-5 w-[80%]">{{t('index_delivery_map_opt2_title')}}</h3>
          <p class="">{{t('index_delivery_map_opt2_text')}}</p>
        </div>

        <div class="w-full md:w-1/2 ">
          <h3 class="text-2xl  uppercase font-bold mb-5 w-[80%]">{{t('index_delivery_map_opt3_title')}}</h3>
          <p class="">{{t('index_delivery_map_opt3_text')}}</p>
        </div>
      </div>
      <a href="https://wa.me/+79280675112" target="_blank">
        <Button size="large" fluid severity="contrast" :label="t('button_index_consult')"/>
      </a>


    </div>
  </section>
</template>
