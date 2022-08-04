<script lang="ts" setup>
interface PropsInterface {
  error: string,
}

const props = defineProps<PropsInterface>();


</script>

<template>
  <p class="font-small-3 text-danger" v-if="error">
    {{ error }}
  </p>
</template>
