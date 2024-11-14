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

const deliveries = ref([])
const payments = ref([])

onBeforeMount(async ()=>{
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
      <p class="font-bold text-3xl mb-7">{{t('checkout_page_personal')}}</p>
      <div class="grid grid-cols-1 gap-3 w-full md:w-1/2 mb-7">
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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div
            v-for="(item, index) in deliveries"
            :key="index"
            @click="orderData.delivery = item.id"
            :class="{'bg-orange-100 border border-orange-200':orderData.delivery === item.id}"
            class="bg-gray-50 rounded-xl p-7 border border-transparent cursor-pointer hover:bg-orange-100 hover:border hover:border-orange-200"
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
            :class="{'bg-orange-100 border border-orange-200':orderData.payment === item.id}"
            class="bg-gray-50 rounded-xl p-7 border border-transparent cursor-pointer hover:bg-orange-100 hover:border hover:border-orange-200"
        >
          <img :src="item.image" class="mb-10">
          <p class="text-xl mb-5">{{item.name}}</p>
          <p class="opacity-60">{{item.description}}</p>
        </div>
      </div>

      <Button @click="createOrder" :disabled="!can_create" :label="t('checkout_page_button')" severity="contrast" outlined fluid/>
    </div>


  </section>
</template>

<style scoped>

</style>