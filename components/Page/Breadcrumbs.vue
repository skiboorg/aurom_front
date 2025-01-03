<script setup lang="ts">
const props = defineProps(['items'])
</script>

<template>
  <Breadcrumb class="mb-4"  :model="items">
    <template #item="{ item, props }">
      <NuxtLinkLocale v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary font-semibold">{{ item.label }}</span>
        </a>
      </NuxtLinkLocale>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
      </a>
    </template>
  </Breadcrumb>
</template>

<style scoped>

</style>