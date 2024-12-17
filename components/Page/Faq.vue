<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const faq_items = [
  {q:t('about_faq_q1'),a:t('about_faq_a1')},
  {q:t('about_faq_q2'),a:t('about_faq_a2')},
  {q:t('about_faq_q3'),a:t('about_faq_a3')},
  {q:t('about_faq_q4'),a:t('about_faq_a4')},
]
</script>

<template>
  <section >
    <div class="container">
      <p class="text-sm md:text-md opacity-60 mb-4 md:mb-9">{{t('index_tag_add_faq')}}</p>
      <h3 class="font-medium text-2xl md:text-4xl mb-5">{{t('about_faq_title')}}</h3>
      <p class="opacity-60 text-md  whitespace-pre-line mb-9">{{t('about_faq_text')}}</p>
      <Accordion >
        <AccordionPanel :value="index" v-for="(item,index) in faq_items" :key="index">
          <AccordionHeader>{{item.q}}</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              {{item.a}}
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </section>
</template>

<style scoped>

</style>