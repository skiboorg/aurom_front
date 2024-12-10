<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = ref([
  { label: t('breadcrumb_home'), route: '/' },
  { label: t('breadcrumb_checkout')},
]);
const {$api} = useNuxtApp()
const sessionUUID = useCookie('session_uuid')
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const cart = ref({})

const deliveries = ref([])
const payments = ref([])
useSeoMeta({
  title: t('breadcrumb_checkout'),
})
onBeforeMount(async ()=>{
  cart.value = await $api(`/api/cart?session_id=${sessionUUID.value}`)
  deliveries.value = await $api(`/api/order/delivery`)
  payments.value = await $api(`/api/order/payment`)
})

const orderData = ref({
  fio:null,
  email:null,
  phone:null,
  delivery_address:null,
  comment:null,
  delivery:null,
  payment:null,
})

const can_create = computed(()=>{
  return !!(orderData.value.phone && orderData.value.delivery&& orderData.value.payment)
})

const createOrder = async ()=>{
  const response = await $api(`/api/order/?session_id=${sessionUUID.value}`, {
    method: 'POST',
    body:orderData.value,
  })
  toast.add({ severity: 'success',summary:'Заказ', detail: response.message, life: 3000 });
  navigateTo('/')
}
</script>

<template>
  <section>
    <div class="container">
      <PageBreadcrumbs :items="items" />
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">


        <div class="col-span-1 md:col-span-8">
          <p class="font-bold text-3xl mb-7">{{t('checkout_page_personal')}}</p>
          <div class="grid grid-cols-1 gap-3 w-full  mb-7">
            <FloatLabel variant="in" >
              <InputText fluid id="fio" v-model="orderData.fio"   />
              <label for="fio">{{t('checkout_page_fio')}}</label>
            </FloatLabel>
            <FloatLabel variant="in">
              <InputText fluid id="email" v-model="orderData.email"   />
              <label for="email">{{t('checkout_page_email')}}</label>
            </FloatLabel>
            <FloatLabel variant="in">
              <InputText required fluid id="phone" v-model="orderData.phone"   />
              <label for="phone">{{t('checkout_page_phone')}}</label>
            </FloatLabel>
            <FloatLabel variant="in">
              <Textarea fluid id="delivery_address" v-model="orderData.delivery_address" rows="5" cols="30" style="resize: none" />
              <label for="delivery_address">{{t('checkout_page_address')}}</label>
            </FloatLabel>
            <FloatLabel variant="in">
              <Textarea fluid id="comment" v-model="orderData.comment" rows="5" cols="30" style="resize: none" />
              <label for="comment">{{t('checkout_page_comment')}}</label>
            </FloatLabel>
          </div>

          <p class="font-bold text-3xl mb-7">{{t('checkout_page_delivery')}}</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <div
                v-for="(item, index) in deliveries"
                :key="index"
                @click="orderData.delivery = item.id"
                :class="{'item-selected':orderData.delivery === item.id}"
                class="bg-gray-50 rounded-xl p-7 border-4 border-transparent cursor-pointer hover:bg-[#F2B6B6] hover:border-4 hover:border-[#F2B6B6]"
            >
              <img :src="item.image" class="mb-10">
              <p class="text-xl mb-5">{{item.name}}</p>
              <p class="opacity-60">{{item.description}}</p>
            </div>
          </div>
          <p class="font-bold text-3xl mb-7">{{t('checkout_page_payment')}}</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
            <div
                v-for="(item, index) in payments"
                :key="index"
                @click="orderData.payment = item.id"
                :class="{'item-selected':orderData.payment === item.id}"
                class="bg-gray-50 rounded-xl p-7 border-4  border-transparent cursor-pointer hover:bg-[#F2B6B6] hover:border-4 hover:border-[#F2B6B6]"
            >

              <img :src="item.image" class="mb-10">
              <p class="text-xl mb-5">{{item.name}}</p>
              <p class="opacity-60">{{item.description}}</p>
            </div>
          </div>

     </div>
        <div class="col-span-1 md:col-span-4">
          <p class="font-bold text-2xl mb-4">{{t('cart_page_total')}}</p>
          <div class="sticky top-6 border rounded-lg p-6 ">
            <div class="bg-gray-50 rounded-lg p-8 mb-6">
              <div class="grid grid-cols-2 gap-2 mb-3">
                <p class="opacity-60">{{t('cart_page_summ')}}</p><p class="text-right">{{cart.total_price}} €</p>
                <!--                <p class="opacity-60">{{t('cart_page_delivery')}}</p><p class="text-right">10000 €</p>-->
                <!--                <p class="opacity-60 border-b pb-5 mb-5">{{t('cart_page_discount')}}</p><p class="text-right">10000 €</p>-->

                <p class="">{{t('cart_page_total')}}</p><p class="text-right">{{cart.total_price}} €</p>
              </div>
              <p class="opacity-60 text-sm">{{t('cart_page_delivery_text')}}</p>
            </div>
            <Button @click="createOrder" :disabled="!can_create" :label="t('checkout_page_button')" severity="contrast" outlined fluid/>

            <!--            <NuxtLinkLocale v-if="cart.total_price > 0" to="/checkout">-->
<!--              <Button :label="t('cart_page_checkout') + cart.total_price +' €'" severity="contrast" fluid/>-->
<!--            </NuxtLinkLocale>-->

          </div>
        </div>
      </div>


    </div>


  </section>
</template>

<style scoped>

</style>