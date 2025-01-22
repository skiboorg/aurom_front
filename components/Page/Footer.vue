<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="container">
      <div class="border-b border-t py-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-36  ">
        <div class="bg-primary p-3 flex flex-col items-start justify-between rounded-md h-[300px]">
          <p class="text-white text-xl">{{t('footer_news')}}</p>
          <div class="w-full flex items-center justify-between">
            <a class="text-sm opacity-50 text-white " href="mailto:info@laurom.ru">info@laurom.ru</a>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.4999 19.9999C39.4999 30.7695 30.7695 39.4999 19.9999 39.4999C9.23042 39.4999 0.5 30.7695 0.5 19.9999C0.5 9.23042 9.23042 0.5 19.9999 0.5C30.7695 0.5 39.4999 9.23042 39.4999 19.9999Z" stroke="white"/>
              <path d="M12.667 27.3334L27.3336 12.6667M27.3336 12.6667V27.3334M27.3336 12.6667H12.667" stroke="white" stroke-linecap="square"/>
            </svg>

          </div>
        </div>
        <div class="">
          <p class="text-sm opacity-60 mb-6">{{t('footer_menu')}}</p>
          <div class="flex flex-col">
            <NuxtLinkLocale to="/about" class="opacity-60 text-sm">О компании</NuxtLinkLocale>
<!--            <nuxt-link to="/" class="opacity-60 text-sm">Партнерство</nuxt-link>-->
<!--            <nuxt-link to="/" class="opacity-60 text-sm">Дополнительные услуги</nuxt-link>-->
<!--            <nuxt-link to="/" class="opacity-60 text-sm">Доставка и оплата</nuxt-link>-->
<!--            <nuxt-link to="/" class="opacity-60 text-sm">Новости</nuxt-link>-->
<!--            <nuxt-link to="/" class="opacity-60 text-sm">Каталог</nuxt-link>-->
            <NuxtLinkLocale to="/contacts" class="opacity-60 text-sm">Контакты</NuxtLinkLocale>
          </div>
        </div>
        <div class="flex flex-col items-start justify-between">
          <div class="flex flex-col items-start">
            <p class="text-sm opacity-60 mb-6">{{t('footer_contact')}}</p>
            <a class="text-xl font-bold"  href="tel:+7 928 067 51 12">+7 928 067 51 12</a>
            <a class="text-xl font-bold"  href="mailto:info@laurom.ru">info@laurom.ru</a>
          </div>
<!--          <div class="">-->
<!--            <p class="text-sm opacity-60 mb-6">{{t('footer_address')}}</p>-->
<!--            <p class="text-sm opacity-60 ">{{t('footer_address1')}}<br>{{t('footer_address2')}}</p>-->
<!--          </div>-->

        </div>
        <div class="">
          <p class="text-sm opacity-60 mb-6">{{t('footer_time')}}</p>

          <p class="text-xl font-bold" >{{t('contacts_time_msk_val')}}</p>
        </div>
      </div>
      <div class="flex items-center justify-between py-6 flex-wrap">
        <p class="opacity-60">© 2010 - 2024 United Expo Trade</p>
        <p  class="opacity-60"><a href="https://www.instagram.com/vkryaz/" target="_blank">Website Development</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>