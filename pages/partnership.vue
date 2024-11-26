<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_partnership')},
]);

</script>

<template>
  <section>
    <div class="container">
      <img class="rounded-2xl h-[300px] object-cover w-full"  src="~/assets/images/other.png" alt="">
      <PageBreadcrumbs :items="items" />
      <h1 class="font-medium text-2xl md:text-4xl mb-5">{{t('partnership_title')}}</h1>
      <p class="opacity-60 text-md md:text-xl whitespace-pre-line mb-9">{{t('partnership_text')}}</p>
    
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div class="bg-gray-50 rounded-xl py-10 px-8 ">
          <p class="text-primary font-medium text-2xl md:text-6xl mb-4">3%</p>
          <p class="whitespace-pre-line text-sm md:text-xl opacity-60">{{t('partnership_opt1_text')}}</p>
        </div>
        <div class="bg-gray-50 rounded-xl py-10 px-8 ">
          <p class="text-primary font-medium text-2xl md:text-6xl mb-4">5%</p>
          <p class="whitespace-pre-line text-sm md:text-xl opacity-60">{{t('partnership_opt2_text')}}</p>
        </div>
        <div class="bg-gray-50 rounded-xl py-10 px-8 ">
          <p class="text-primary font-medium text-2xl md:text-6xl mb-4">10%</p>
          <p class="whitespace-pre-line text-sm md:text-xl opacity-60">{{t('partnership_opt3_text')}}</p>
        </div>
        <div class="bg-primary rounded-xl flex items-center justify-center gap-3 h-[168px] md:h-auto">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19.9999" cy="19.9999" r="18.9999" stroke="white" stroke-width="2"/>
            <path d="M12.6665 27.3334L27.3331 12.6667M27.3331 12.6667V27.3334M27.3331 12.6667H12.6665" stroke="white" stroke-width="2" stroke-linecap="square"/>
          </svg>

          <NuxtLinkLocale to="/catalog" class="text-white text-xl uppercase">{{t('partnership_to_catalog')}}</NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
  
</template>
