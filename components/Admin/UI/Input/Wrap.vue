<script lang="ts" setup>
interface PropsInterface {
  colWidth?: number,
}

const props = defineProps<PropsInterface>();

const colWidthClass = props.colWidth ? 'col-sm-' + props.colWidth : 'col';

</script>

<template>
  <div :class="colWidthClass">
    <div class="form-group mb-5">

      <slot/>

    </div>
  </div>
</template>
