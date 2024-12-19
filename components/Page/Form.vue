<script setup lang="ts">
const {$api} = useNuxtApp()
const loading = ref(false)
const send = ref(false)
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const formData = ref({
  fio:null,
  phone:null,
  comment:null,
})

const sendForm = async ()=>{
  loading.value = true
 await $api(`/api/user/cb`,{
   method: 'POST',
   body:formData.value,
 })

  loading.value = false
  send.value = true
}
</script>

<template>
<section class="bg-gray-50 mb-9">
  <div class="container">
    <p class="text-sm md:text-md opacity-60 mb-4 md:mb-9">{{t('index_tag_add_form')}}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      <div v-if="!send" class="col-12 md:col-5">
        <h3 class="font-medium text-2xl md:text-4xl mb-5">Будьте в курсе событий</h3>
        <p class="opacity-70 line-height-2 mb-6">Подпишитесь на нашу рассылку и будьте в курсе всех акций и специальных предложений</p>
        <InputText  class="mb-3 w-full" v-model="formData.fio" placeholder="Ваше ФИО" />
        <InputText  class="mb-3 w-full" v-model="formData.phone" placeholder="+7 (___) ___ __ __" />
        <Textarea
            v-model="formData.comment"
            label="Комментарий"
            class="mb-4 w-full"
        />
        <p class="opacity-70 line-height-2 text-sm  mb-4">Нажимая кнопку “Отправить заявку”, вы соглашаетесь с условиями Политики конфиденциальности</p>
        <Button :loading="loading" @click="sendForm" :disabled="!formData.phone" severity="primary" class="w-full">Оставить заявку</Button>
      </div>
      <div v-else class="col-12 md:col-5">
        <p class="text-center text-2xl">Форма оправлена</p>
      </div>
      <div class="col-12 md:col-6 col-offset-0 md:col-offset-1">
        <img class="w-full h-full object-cover rounded-xl" src="@/assets/images/form.png" alt="">
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>