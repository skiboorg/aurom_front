<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute()
const {$api} = useNuxtApp()
const sessionUUID = useCookie('session_uuid')
const product = ref({})
const modelVisible = ref(false)
const cartCount = useState('cartCount')
import { useToast } from 'primevue/usetoast';
const eurUsd = useCookie('eurUsd')
const eurRub = useCookie('eurRub')

const toast = useToast();
let items
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
const amount = ref(1)


onBeforeMount(async ()=>{
  product.value = await $api(`/api/shop/product/${route.params.product_slug}`)
  items = [
    { label: t('breadcrumb_home'), route: '/' },
    { label: t('breadcrumb_catalog'), route: '/catalog' },
    { label: product.value.cat_name, route: `/catalog/${product.value.cat_slug}` },
    { label: product.value?.name },
  ]
  useSeoMeta({
    title: `${product.value.name} от поставщика концентратов L’aurom`,
    ogTitle: `${product.value.name} от поставщика концентратов L’aurom`,
  })
})

const addToCart = async ()=>{
  const payload = {
    amount:amount.value,
    product_id:product.value.id,
  }
  const response = await $api(`/api/cart/?session_id=${sessionUUID.value}`, {
    method:'post',
    body:payload
  }
  )
  console.log(response)
  toast.add({ severity: 'success',summary:'Корзина', detail: response.message, life: 3000 });
  const cart = await $api(`/api/cart?session_id=${sessionUUID.value}`)
  cartCount.value = cart.items_count

}

</script>

<template>
  <section>
    <div class="container">

      <PageBreadcrumbs :items="items" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          <Galleria :value="product.images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
              <img class="w-full h-auto object-contain" :src="slotProps.item.image"   />
            </template>
            <template #thumbnail="slotProps">
              <div class="bg-gray-50 p-2 rounded-md w-full h-[100px] flex items-center justify-center">
                <img class=" w-full h-[100px] object-contain" :src="slotProps.item.image"  />
              </div>

            </template>
          </Galleria>
        </div>
        <div class="">
          <p class="opacity-60 mb-5">[ {{t('article')}}: {{product.article}} ]</p>
          <h1 class="text-4xl font-medium mb-5">{{product.name}}</h1>
          <p class="opacity-60 leading-6 mb-6">{{product.short_description}}</p>
          <div v-if="product?.tags?.length > 0" class="flex gap-3 flex-wrap mb-6">
            <p class="border border-primary py-1.5 px-3.5 rounded-lg font-medium uppercase text-primary" v-for="tag in product?.tags" :key="tag.id">{{tag.name}}</p>
          </div>

          <div class="flex flex-col gap-1 mb-5">
            <p><span class="opacity-60">{{t('item_page_in_stock')}}</span> {{product.in_stock}}</p>
            <p><span class="opacity-60">{{t('item_page_in_fas')}}</span> {{product.unit}}</p>
            <p><span class="opacity-60">{{t('item_page_in_price_description')}}</span> {{product.price_description}}</p>
            <p><span class="opacity-60">{{t('item_page_in_country')}}</span> {{product.country}}</p>
            <p><span class="opacity-60">{{t('item_page_in_delivery')}}</span> {{product.delivery}}</p>

          </div>
          <p class="text-4xl font-medium">{{product.price}} ₽</p>
          <p class="text-1xl font-medium opacity-60 mb-5">{{parseFloat(product.price / eurUsd || 0).toFixed(2)}} $ / {{parseFloat(product.price / eurRub || 0).toFixed(2)}} €</p>


          <div class="flex items-center justify-between gap-3 flex-wrap md:flex-nowrap mb-3">
            <InputNumber input-class="text-center" v-model="amount" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :min="1" :step="1"  fluid>
              <template #incrementbuttonicon>
                <span class="pi pi-plus" />
              </template>
              <template #decrementbuttonicon>
                <span class="pi pi-minus" />
              </template>
            </InputNumber>
            <Button :disabled="!amount" @click="addToCart" fluid severity="contrast" :label="t('item_page_btn_add')"/>
            <Button severity="danger" @click="modelVisible = true" fluid :label="t('item_page_btn_opt')"/>

          </div>
          <nuxt-link class="inline-block border-b text-sm opacity-60" to="/probe">{{t('item_page_test')}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
<section>
  <div class="container">
    <Tabs value="0" scrollable >
      <TabList>
        <Tab value="0">{{t('item_page_tab2')}}</Tab>
        <Tab value="1">{{t('item_page_tab1')}}</Tab>


        <Tab value="2">{{t('item_page_tab3')}}</Tab>
        <Tab v-if="product.files?.length>0" value="3">{{t('item_page_tab4')}}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="m-0" v-html="product.description"></div>

        </TabPanel>
        <TabPanel value="1">
          <p class="m-0">
            {{t('item_tab_delivery_text')}}
     </p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0">
            {{t('item_tab_payment_text')}}
          </p>
        </TabPanel>
        <TabPanel value="3">

          <a class="block mb-3" :href="file.file" target="_blank" v-for="file in product.files" :key="file.id">
            <Button  severity="contrast" :label="file.file.split('/').pop()"/>
          </a>

        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</section>
<!--  <section >-->
<!--    <div class="container">-->
<!--      <h3 class="text-4xl uppercase font-bold mb-5">-->
<!--        Похожие товары-->
<!--      </h3>-->

<!--      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">-->
<!--        <CardProduct v-for="i in 4"/>-->
<!--      </div>-->

<!--    </div>-->
<!--  </section>-->
  <Dialog v-model:visible="modelVisible" modal :header="t('item_page_opt_modal_title')" :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">{{t('item_page_opt_modal_text')}}</span>

  </Dialog>

</template>

<style lang="sass" scoped>
.thumbnail
  width: 90%
  height: 100px
  object-fit: cover
  background: red
  padding: 10px
.p-galleria
  border: none !important

</style>