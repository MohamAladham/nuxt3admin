<script lang="ts" setup>
interface PropsInterface {
  errors: string[],
}

const props = defineProps<PropsInterface>();


</script>

<template>
  <p class="font-small-3 text-danger" v-if="errors?.length">
    {{ errors[0] }}
  </p>
</template>
