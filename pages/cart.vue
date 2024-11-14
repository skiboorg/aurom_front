<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_cart')},
]);
const {$api} = useNuxtApp()
const sessionUUID = useCookie('session_uuid')
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const cart = ref({})

onBeforeMount( ()=>{
  get_cart()
})

const get_cart = async ()=>{
  cart.value = await $api(`/api/cart?session_id=${sessionUUID.value}`)
}
const itemChanged = async (product_id, amount)=>{
  await $api(`/api/cart/`,{
    method:'patch',
    body:{product_id,amount}
  })
  await get_cart()
  toast.add({ severity: 'success',summary:'Корзина', detail: 'Изменено', life: 3000 });
}

</script>

<template>
  <section>
    <div class="container">
     <PageBreadcrumbs :items="items" />
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        
        <div class="col-span-1 md:col-span-8">
          <div class="flex items-center justify-between mb-6">
            <p>{{cart.items_count}} {{t('cart_page_items')}}</p>
            <a class="flex items-center gap-2 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 4.5H3.75H15.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="opacity-60">{{t('cart_page_clear')}}</p>
            </a>

          </div>
          <div class=" p-12 border rounded-lg flex flex-col items-start gap-4">
            <div class="grid grid-cols-12  gap-3 pb-4 border-b last:pb-0 last:border-b-0 w-full" v-for="item in cart.items">
              <div class="col-span-12 md:col-span-2 bg-gray-50 rounded-md p-3">

                <img class=" h-[100px] object-cover object-center" :src="item.image" alt="">
              </div>
              <div class="col-span-6 md:col-span-8 flex flex-col justify-between items-start">

                  <div class="mb-3 md:mb-0">
                    <p class="font-medium">{{item.product.name}}</p>
                    <p class="opacity-60 text-sm">{{item.product.unit}}</p>
                  </div>
                  <InputNumber input-class="w-[100px]" @value-change="itemChanged(item.id, item.amount)" v-model="item.amount" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="1" >
                    <template #incrementbuttonicon>
                      <span class="pi pi-plus" />
                    </template>
                    <template #decrementbuttonicon>
                      <span class="pi pi-minus" />
                    </template>
                  </InputNumber>
            </div>
              <div class="col-span-6 md:col-span-2 flex flex-col justify-between items-end">
                <div class="text-right">
                  <p class="font-medium">{{item.total_price}} ₽</p>
                  <p class="opacity-60 text-sm">{{item.product.price}} ₽ {{t('cart_page_per1')}}</p>
                </div>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4.5V3C4 2.60218 4.15804 2.22064 4.43934 1.93934C4.72064 1.65804 5.10218 1.5 5.5 1.5H8.5C8.89782 1.5 9.27936 1.65804 9.56066 1.93934C9.84196 2.22064 10 2.60218 10 3V4.5M12.25 4.5V15C12.25 15.3978 12.092 15.7794 11.8107 16.0607C11.5294 16.342 11.1478 16.5 10.75 16.5H3.25C2.85218 16.5 2.47064 16.342 2.18934 16.0607C1.90804 15.7794 1.75 15.3978 1.75 15V4.5H12.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1 md:col-span-4 ">
          <p class="font-bold text-2xl mb-4">{{t('cart_page_total')}}</p>
          <div class="border rounded-lg p-6 ">
            <div class="bg-gray-50 rounded-lg p-8 mb-6">
              <div class="grid grid-cols-2 gap-2 ">
                <p class="opacity-60">{{t('cart_page_summ')}}</p><p class="text-right">{{cart.total_price}} ₽</p>
                <p class="opacity-60">{{t('cart_page_delivery')}}</p><p class="text-right">10000 ₽</p>
                <p class="opacity-60 border-b pb-5 mb-5">{{t('cart_page_discount')}}</p><p class="text-right">10000 ₽</p>
                <p class="">{{t('cart_page_total')}}</p><p class="text-right">{{cart.total_price}} ₽</p>
              </div>
            </div>
            <NuxtLinkLocale v-if="cart.total_price > 0" to="/checkout">
              <Button :label="t('cart_page_checkout') + cart.total_price +' ₽'" severity="contrast" fluid/>
            </NuxtLinkLocale>

          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<style scoped>

</style>