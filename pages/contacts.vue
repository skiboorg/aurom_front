<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_contacts')},
]);
useSeoMeta({
  title: `${t('breadcrumb_contacts')} L’aurom`,
  ogTitle: `${t('breadcrumb_contacts')} L’aurom`,
})
</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full"  src="~/assets/images/other.png" alt="">

      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-2xl md:text-4xl mb-5">{{t('breadcrumb_contacts')}}</h1>
      <p class="opacity-60 text-md md:text-xl whitespace-pre-line">{{t('contacts_text')}}</p>


    </div>
  </section>
  <section>
    <div class="container">
      <p class="text-sm md:text-xl opacity-60 mb-4 md:mb-9">{{t('contacts_tag_all')}}</p>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div class="bg-gray-50 p-7 rounded-xl ">
          <p class="text-2xl font-medium mb-9">{{t('contacts_phone')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap">{{t('contacts_ru_call')}}</p>
          <a class="opacity-90 text-lg font-medium block border-b mb-4 pb-4" href="tel:+7 928 067 51 12">+7 928 067 51 12</a>

          <p class="opacity-60 text-sm whitespace-pre-wrap">{{t('contacts_www_call')}}</p>
          <a class="opacity-90 text-lg font-medium " href="tel:+7 928 067 51 12">+7 928 067 51 12</a>

        </div>
        <div class="bg-gray-50 p-7  rounded-xl">
          <p class="text-2xl font-medium mb-9">{{t('contacts_email')}}</p>
          <a class="opacity-60 text-lg font-medium " href="mailto:meridiantour@yandex.ru">meridiantour@yandex.ru</a>
        </div>
        <div class="bg-gray-50 p-7  rounded-xl">
          <p class="text-2xl font-medium mb-9">{{t('contacts_time')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap">{{t('contacts_time_msk')}}</p>
          <p class="opacity-90 text-lg font-medium block border-b mb-4 pb-4" >{{t('contacts_time_msk_val')}}</p>

          <p class="opacity-60 text-sm whitespace-pre-wrap">{{t('contacts_time_days')}}</p>
          <p class="opacity-90 text-lg font-medium " >{{t('contacts_time_days_val')}}</p>

        </div>
      </div>
    </div>
  </section>



  <section>
    <div class="container">
      <p class="text-sm md:text-xl opacity-60 mb-4 md:mb-9">{{t('contacts_tag_ru')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium  border-b mb-4 pb-4">{{t('contacts_card_ru_address1')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_fact_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ru_address2')}}</p>
        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ru_address3')}}</p>
  </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/ru.png" alt="">
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <p class="text-sm md:text-xl opacity-60 mb-4 md:mb-9">{{t('contacts_tag_ar')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ar_address1')}}</p>

        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_ar_address2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/ar.png" alt="">
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <p class="text-sm md:text-xl opacity-60 mb-4 md:mb-9">{{t('contacts_tag_gr')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_gr_address1')}}</p>

        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_gr_address2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/gr.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <p class="text-sm md:text-xl opacity-60 mb-4 md:mb-9">{{t('contacts_tag_tr')}}</p>
      <div class="grid grid-cols-4 gap-3">
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_tr_address1')}}</p>

        </div>
        <div class="col-span-1 bg-gray-50 p-7">
          <p class="text-2xl font-medium mb-9">{{t('contacts_card_store_address')}}</p>
          <p class="opacity-60 text-sm whitespace-pre-wrap mb-3">{{t('contacts_ur_address')}}</p>
          <p class="opacity-90 leading-none  font-medium ">{{t('contacts_card_tr_address2')}}</p>
        </div>
        <div class="col-span-2 rounded-xl">
          <img class="rounded-xl" src="~assets/images/tr.png" alt="">
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>

</style>