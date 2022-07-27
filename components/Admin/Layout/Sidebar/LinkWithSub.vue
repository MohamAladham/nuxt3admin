<script lang="ts" setup>
import {defineProps} from "@vue/runtime-core";
import {Link, useSidebarLinks} from "@/stores/layout"


interface propsInterface {
  index: number,
  link: Link
}

const props = defineProps<propsInterface>();
</script>

<template>
  <li :class="[
                  useSidebarLinks().isActive(index)?'sidebar-group-active open':'',
                  'has-sub','nav-item'
                ]">

    <a class="d-flex align-items-center nav-link" :href="props.link.url" v-if="useSidebarLinks().checkPermission(link)">
      <i :class="props.link.icon"></i>
      {{ props.link.title }}
      <span v-if="props.link.badge" class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">{{ props.link.badge }}</span>
    </a>

    <ul v-if="props.link.subLinks" class="menu-content">

      <li v-for="(subLink, subIndex) in props.link.subLinks"
          :key="props.link.title + subLink.title"
          :class="useSidebarLinks().isActive(index,subIndex)?'active':''">

        <NuxtLink class="nav-link" :href="subLink.url" v-if="useSidebarLinks().checkPermission(subLink)">
          <i class="circle"></i>
          <span class="menu-item">{{ subLink.title }}</span>
        </NuxtLink>

      </li>

    </ul>

  </li>
</template>
