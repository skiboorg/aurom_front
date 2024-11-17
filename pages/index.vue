<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const {$api} = useNuxtApp()
const { t } = useI18n()
const popular = ref([])
const deliveryOptions = [
  {title:t('index_delivery_opt1_title'),text:t('index_delivery_opt1_text')},
  {title:t('index_delivery_opt2_title'),text:t('index_delivery_opt2_text')},
  {title:t('index_delivery_opt3_title'),text:t('index_delivery_opt3_text')},
  {title:t('index_delivery_opt4_title'),text:t('index_delivery_opt4_text')},
]
onBeforeMount(async (): Promise<void> => {
  popular.value = await $api(`/api/shop/popular`)
})

</script>

<template>

  <section >
    <div class="container">
      <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5 leading-tight md:leading-[52px] w-full lg:w-[58%]">
          {{t('index_offer')}}<br class="hidden md:inline"> <span class="text-primary">{{t('index_offer_span')}}</span>
      </h3>
      <p class="opacity-60 w-full md:w-[45%] mb-5">{{t('index_offer_text')}}</p>
      <img class="rounded-2xl" src="https://placehold.co/1920x800" alt="">
    </div>
  </section>

  <section >

    <div class="container">
      <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5">
        {{t('index_catalog_title')}}
      </h3>
      <p class="opacity-60 w-full md:w-[65%] mb-5">{{t('index_catalog_text')}}</p>
     <PageCatalog/>

    </div>
  </section>

  <section >
    <div class="container">
      <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5">
        {{t('index_popular_title')}}
      </h3>
      <p class="opacity-60 w-full md:w-[65%] mb-5">{{t('index_popular_text')}}</p>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CardProduct :product="product" v-for="(product,index) in popular" :key="index"/>
      </div>

    </div>
  </section>

  <section v-if="false">
    <div class="container">
      <h3 class="text-4xl uppercase font-bold mb-5">
        {{t('index_news_text')}}
      </h3>
    <div class="grid grid-cols-2 gap-2">
      <div class="bg-gray-50 rounded p-7 flex flex-col items-start gap-5" v-for="i in 2">
        <img src="https://placehold.co/600x400" alt="">
        <p class="font-medium">Ароматизатор для пищевых продуктов «Pear»</p>
        <p class="opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, urna quis vehicula volutpat, dolor justo tempor sem, non finibus ante turpis nec quam.</p>
        <nuxt-link class="border-b inline-block border-black" to="/">Подробнее</nuxt-link>
      </div>
    </div>
    </div>

  </section>

  <section >
    <div class="container">
      <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5 w-[80%]">{{t('index_delivery_title')}}</h3>
      <p class="opacity-60  w-full md:w-[65%] mb-5">{{t('index_delivery_text')}}</p>
      <div class="flex items-center  border-t py-7 " v-for="(item,index) in deliveryOptions" :key="index">
        <p class="text-primary font-medium w-[30%] md:w-[5%]">0{{index+1}}</p>
        <div class="">
          <p class="font-bold text-2xl mb-3">{{item.title}}</p>
          <p class="opacity-60 w-full md:w-[60%]">{{item.text}}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-50 py-20">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="">
          <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5">{{t('index_delivery_term_title')}}</h3>
          <p class="opacity-60 w-full md:w-[65%] mb-5">{{t('index_delivery_term_text')}}</p>
        </div>
        <div class="bg-white rounded-xl p-7">
          <div class="mb-9">
            <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.75 6.25439H21.1538C20.7338 3.87564 18.9625 1.91189 16.5612 1.29439C15.9 1.12314 15.2125 1.52564 15.0387 2.19314C14.8663 2.86189 15.27 3.54314 15.9388 3.71439C17.5938 4.14064 18.75 5.63439 18.75 7.34689V21.2544H5C3.62125 21.2544 2.5 20.1331 2.5 18.7544V13.7544H5.625C6.31625 13.7544 6.875 13.1944 6.875 12.5044C6.875 11.8144 6.31625 11.2544 5.625 11.2544H2.5C1.12125 11.2544 0 12.3756 0 13.7544V18.7544C0 21.1044 1.63 23.0806 3.81875 23.6131C3.77375 23.8644 3.75 24.1206 3.75 24.3794C3.75 26.7919 5.7125 28.7544 8.125 28.7544C10.5375 28.7544 12.5 26.7919 12.5 24.3794C12.5 24.1681 12.4838 23.9606 12.4538 23.7544H17.5462C17.5162 23.9606 17.5 24.1681 17.5 24.3794C17.5 26.7919 19.4625 28.7544 21.875 28.7544C24.2875 28.7544 26.25 26.7919 26.25 24.3794C26.25 24.1206 26.2262 23.8644 26.1812 23.6131C28.37 23.0806 30 21.1044 30 18.7544V12.5044C30 9.05814 27.1963 6.25439 23.75 6.25439ZM27.5 12.5044V13.7544H21.25V8.75439H23.75C25.8175 8.75439 27.5 10.4369 27.5 12.5044ZM10 24.3794C10 25.4131 9.15875 26.2544 8.125 26.2544C7.09125 26.2544 6.25 25.4131 6.25 24.3794C6.25 24.1431 6.29625 23.9344 6.36375 23.7544H9.8875C9.955 23.9344 10.0013 24.1431 10.0013 24.3794H10ZM21.875 26.2544C20.8412 26.2544 20 25.4131 20 24.3794C20 24.1431 20.0462 23.9344 20.1138 23.7544H23.6375C23.705 23.9344 23.7512 24.1431 23.7512 24.3794C23.7512 25.4131 22.9088 26.2544 21.875 26.2544ZM25 21.2544H21.25V16.2544H27.5V18.7544C27.5 20.1331 26.3787 21.2544 25 21.2544ZM0 2.50439C0 1.81439 0.55875 1.25439 1.25 1.25439H11.4425C12.1337 1.25439 12.6925 1.81439 12.6925 2.50439C12.6925 3.19439 12.1337 3.75439 11.4425 3.75439H1.25C0.55875 3.75439 0 3.19439 0 2.50439ZM0 7.50439C0 6.81439 0.55875 6.25439 1.25 6.25439H8.9425C9.63375 6.25439 10.1925 6.81439 10.1925 7.50439C10.1925 8.19439 9.63375 8.75439 8.9425 8.75439H1.25C0.55875 8.75439 0 8.19439 0 7.50439Z" fill="#FF6A3C"/>
            </svg>
          </div>
          <p class="text-xl font-medium mb-2">{{t('index_delivery_term_opt1_title')}}</p>
          <p class="opacity-60">{{t('index_delivery_term_opt1_text')}}</p>
        </div>
        <div class="bg-white rounded-xl p-7">
          <div class="mb-9">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_0_351)">
                <path d="M24.9362 6.92442L20.5812 2.56692C19.7704 1.7521 18.8061 1.10609 17.744 0.666247C16.682 0.226408 15.5433 0.00146469 14.3938 0.00442334H8.75C7.09301 0.00640816 5.50445 0.665526 4.33277 1.8372C3.1611 3.00887 2.50198 4.59743 2.5 6.25442V23.7544C2.50198 25.4114 3.1611 27 4.33277 28.1716C5.50445 29.3433 7.09301 30.0024 8.75 30.0044H21.25C22.907 30.0024 24.4956 29.3433 25.6672 28.1716C26.8389 27 27.498 25.4114 27.5 23.7544V13.1107C27.5031 11.9612 27.2781 10.8225 26.838 9.76064C26.398 8.69874 25.7515 7.73472 24.9362 6.92442ZM23.1688 8.69192C23.5504 9.08461 23.8787 9.52591 24.145 10.0044H18.75C18.4185 10.0044 18.1005 9.87273 17.8661 9.63831C17.6317 9.40389 17.5 9.08594 17.5 8.75442V3.35942C17.9787 3.62558 18.4204 3.95337 18.8137 4.33442L23.1688 8.69192ZM25 23.7544C25 24.749 24.6049 25.7028 23.9017 26.4061C23.1984 27.1093 22.2446 27.5044 21.25 27.5044H8.75C7.75544 27.5044 6.80161 27.1093 6.09835 26.4061C5.39509 25.7028 5 24.749 5 23.7544V6.25442C5 5.25986 5.39509 4.30603 6.09835 3.60277C6.80161 2.89951 7.75544 2.50442 8.75 2.50442H14.3938C14.5988 2.50442 14.7975 2.54442 15 2.56317V8.75442C15 9.74899 15.3951 10.7028 16.0983 11.4061C16.8016 12.1093 17.7554 12.5044 18.75 12.5044H24.9412C24.96 12.7069 25 12.9044 25 13.1107V23.7544Z" fill="#FF6A3C"/>
              </g>

            </svg>

          </div>
          <p class="text-xl font-medium mb-2">{{t('index_delivery_term_opt2_title')}}</p>
          <p class="opacity-60">{{t('index_delivery_term_opt2_text')}}</p>
        </div>
      </div>
    </div>
  </section>  
  <section>
    <div class="container bg-[url('/map.png')] bg-no-repeat bg-right  w-full">
      <div class="grid grid-cols-1 mb-14 md:mb-28 pt-11 gap-5 md:gap-0 ">
        <div class="w-full md:w-1/3 ">
          <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5 w-full md:w-[80%]">{{t('index_delivery_map_opt1_title')}}</h3>
          <p class="">{{t('index_delivery_map_opt1_text')}}</p>
        </div>

        <div class="w-full md:w-[40%] md:ml-auto ">
          <h3 class="text-2xl md:text-4xl  font-bold mb-5 w-[80%]">{{t('index_delivery_map_opt2_title')}}</h3>
          <p class="">{{t('index_delivery_map_opt2_text')}}</p>
        </div>

        <div class="w-full md:w-1/2 ">
          <h3 class="text-2xl md:text-4xl uppercase font-bold mb-5 w-[80%]">{{t('index_delivery_map_opt3_title')}}</h3>
          <p class="">{{t('index_delivery_map_opt3_text')}}</p>
        </div>
      </div>
      <Button size="large" fluid severity="contrast" :label="t('button_index_consult')"/>

    </div>
  </section>


</template>

<style scoped>

</style>