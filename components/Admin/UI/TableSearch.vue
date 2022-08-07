<script lang="ts" setup>
import debounce from "lodash/debounce";

interface PropsInterface {
  filter?: {},
}

const props = withDefaults(defineProps<PropsInterface>(), {});

const search = ref('');


const emit = defineEmits<{
  (e: 'update:filter', value: any): void,
  (e: 'fetchItems'): void,
}>()


const onKeyUp = debounce(() => {
  let v = {
    page: 1, // to reset pagination
    search: search.value
  };

  emit('update:filter', {...props.filter, ...v});
  emit('fetchItems');
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