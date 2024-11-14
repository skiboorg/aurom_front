<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const { t } = useI18n()
const cartCount = useState('cartCount')
const mobileMenuActive = ref(false)
const languages = [
  {name:'RU',value:'ru'},
  {name:'EN',value:'en'},
]

const selectedLang = ref(locale.value)
const switchLanguage = () => {
  console.log(selectedLang.value)
  locale.value = selectedLang.value
  window.location.href = `/${selectedLang.value}${window.location.pathname.replace(/^\/[^\/]+/, '')}`
}

const links = [
  {label:t('menu_about'), url:'/about'},
  {label:t('menu_partner'), url:'/'},
  {label:t('menu_add_service'), url:'/'},
  {label:t('menu_delivery'), url:'/'},
  {label:t('menu_contacts'), url:'/'},
  {label:t('menu_news'), url:'/'},
]
</script>

<template>
  <header>

    <div class="container">
      <div class="flex items-center justify-between py-5 border-b gap-5">
        <NuxtLinkLocale  to="/">
        <img src="~/assets/images/logo.png" alt="">
        </NuxtLinkLocale>
        <div class="hidden lg:flex items-center gap-4">
          <div class="flex items-center gap-2">

            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_0_58)">
                <path d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>

            <p class="opacity-80 ">8 800 333 55 70</p>

          </div>
          <Button :label="t('button_callback')" />
          <Select v-model="selectedLang" :options="languages" @update:modelValue="switchLanguage" option-value="value" option-label="name"   />
        </div>
        <div class="flex lg:hidden items-center gap-4">
          <NuxtLinkLocale to="/cart" class="flex lg:hidden items-center justify-between cursor-pointer">
            <div class="flex items-center gap-2">
              <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.804 1.0322C9.24114 1.27353 7.93399 2.22506 7.25911 3.6041C6.93232 4.27293 6.79735 4.90728 6.79735 5.84503V6.62418H5.19894C3.50818 6.62418 3.25243 6.66555 3.14587 6.94825C3.05352 7.1689 0.964928 22.7175 1.00045 22.8692C1.02176 22.945 1.27751 23.2277 1.56877 23.5035L2.09447 24H11.4789H20.8562L21.2328 23.6759C21.6732 23.2967 22 22.9175 22 22.7865C22 22.5865 19.8688 7.04478 19.8262 6.93446C19.7196 6.66555 19.4496 6.62418 17.7731 6.62418H16.1747V5.84503C16.1747 4.91418 16.0397 4.27293 15.72 3.62478C15.1375 2.43192 14.1642 1.5976 12.8997 1.21147C12.2959 1.0322 11.3652 0.949457 10.804 1.0322ZM12.6511 2.28022C13.2194 2.46639 13.6883 2.76978 14.1145 3.22486C14.8036 3.95575 15.038 4.61769 15.038 5.81055V6.62418H11.486H7.93399V5.91398C7.93399 5.52785 7.98372 5.01071 8.04056 4.76938C8.34603 3.51446 9.38322 2.50087 10.6762 2.1768C11.2161 2.04579 12.097 2.08716 12.6511 2.28022ZM18.8316 7.91358C18.8955 8.23075 20.7923 22.2486 20.7923 22.421C20.7923 22.5037 20.7213 22.6485 20.636 22.7382L20.4868 22.8968H11.486H2.4923L2.30759 22.7037L2.12999 22.5175L3.14587 15.1397C3.69998 11.0785 4.16175 7.75499 4.16175 7.7412C4.16885 7.7343 7.45802 7.72741 11.4789 7.72741H18.789L18.8316 7.91358Z" fill="#666666" stroke="#666666" stroke-width="0.5"/>
              </svg>
              {{cartCount}}

            </div>
          </NuxtLinkLocale>
          <i  class="block lg:hidden pi pi-bars" @click="mobileMenuActive = !mobileMenuActive"></i>
        </div>

      </div>
      <div class="hidden lg:flex items-center justify-between py-5">

          <NuxtLinkLocale class="flex items-center gap-2 cursor-pointer" to="/catalog">
          <svg width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L17.2609 1.5" stroke="#666666" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 7.5H23" stroke="#666666" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p class="text-gray-400">Каталог</p>
          </NuxtLinkLocale>

        <div class="flex items-center gap-4">
          <NuxtLinkLocale class="opacity-80 " :to="link.url" v-for="(link,index) in links" :key="index">{{link.label}}</NuxtLinkLocale>

        </div>
        <NuxtLinkLocale to="/cart" class="flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-2">
            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.804 1.0322C9.24114 1.27353 7.93399 2.22506 7.25911 3.6041C6.93232 4.27293 6.79735 4.90728 6.79735 5.84503V6.62418H5.19894C3.50818 6.62418 3.25243 6.66555 3.14587 6.94825C3.05352 7.1689 0.964928 22.7175 1.00045 22.8692C1.02176 22.945 1.27751 23.2277 1.56877 23.5035L2.09447 24H11.4789H20.8562L21.2328 23.6759C21.6732 23.2967 22 22.9175 22 22.7865C22 22.5865 19.8688 7.04478 19.8262 6.93446C19.7196 6.66555 19.4496 6.62418 17.7731 6.62418H16.1747V5.84503C16.1747 4.91418 16.0397 4.27293 15.72 3.62478C15.1375 2.43192 14.1642 1.5976 12.8997 1.21147C12.2959 1.0322 11.3652 0.949457 10.804 1.0322ZM12.6511 2.28022C13.2194 2.46639 13.6883 2.76978 14.1145 3.22486C14.8036 3.95575 15.038 4.61769 15.038 5.81055V6.62418H11.486H7.93399V5.91398C7.93399 5.52785 7.98372 5.01071 8.04056 4.76938C8.34603 3.51446 9.38322 2.50087 10.6762 2.1768C11.2161 2.04579 12.097 2.08716 12.6511 2.28022ZM18.8316 7.91358C18.8955 8.23075 20.7923 22.2486 20.7923 22.421C20.7923 22.5037 20.7213 22.6485 20.636 22.7382L20.4868 22.8968H11.486H2.4923L2.30759 22.7037L2.12999 22.5175L3.14587 15.1397C3.69998 11.0785 4.16175 7.75499 4.16175 7.7412C4.16885 7.7343 7.45802 7.72741 11.4789 7.72741H18.789L18.8316 7.91358Z" fill="#666666" stroke="#666666" stroke-width="0.5"/>
            </svg>
            {{cartCount}}
            <p class="text-gray-400">Корзина</p>
          </div>
        </NuxtLinkLocale>
      </div>
    </div>
    <Drawer v-model:visible="mobileMenuActive" header=" " position="right">
      <div class="flex flex-col items-start gap-4">
        <NuxtLinkLocale class="opacity-80 " :to="link.url" v-for="(link,index) in links" :key="index">{{link.label}}</NuxtLinkLocale>
        <Select fluid class="w-full" v-model="selectedLang" :options="languages" @update:modelValue="switchLanguage" option-value="value" option-label="name"   />
        <Button :label="t('button_callback')"  fluid/>
      </div>


    </Drawer>
  </header>
</template>

<style scoped>

</style>