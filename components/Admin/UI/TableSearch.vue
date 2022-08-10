<script lang="ts" setup>
import debounce from "lodash/debounce";

interface PropsInterface {
  search: string;
}

const props = withDefaults(defineProps<PropsInterface>(), {});

const search = ref(props.search);


const emit = defineEmits<{
  (e: 'update:search', value: string): void,
}>()


const onKeyUp = debounce(() => {
  emit('update:search', search.value);
}, 500)
</script>

<template>
  <AdminUIInput id="user_name"
                v-model="search"
                placeholder="Search.."
                @keyup="onKeyUp"
                icon="bi bi-search"
  />
</template>