<script lang="ts" setup>
const logo = ref('');
const siteName = ref('Site Name');
</script>

<template>
  <NuxtLink class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 text-center">
    <img :src="logo" :alt="siteName">
  </NuxtLink>
</template>
