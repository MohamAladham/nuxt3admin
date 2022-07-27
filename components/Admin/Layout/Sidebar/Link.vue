<script lang="ts" setup>
import {defineProps} from "@vue/runtime-core";
import {useSidebarLinks, Link} from "@/stores/layout"

interface propsInterface {
  index: number,
  link: Link
}

const props = defineProps<propsInterface>();

</script>

<template>
  <li :class="[
                  useSidebarLinks().isActive(index)?'active':'',
                  'nav-item'
                ]">

    <NuxtLink :class="[useSidebarLinks().isActive(index)?'active':'', 'nav-link']"
              :to="props.link.url" v-if="useSidebarLinks().checkPermission(link)">

      <i :class="props.link.icon"></i>

      {{ props.link.title }}

      <span v-if="props.link.badge" class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
        {{ props.link.badge }}
      </span>

    </NuxtLink>

  </li>
</template>
