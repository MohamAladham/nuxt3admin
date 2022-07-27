<script lang="ts" setup>
import {useSidebarLinks} from "@/stores/layout";

const userAvatar = ref('/assets/admin/img/avatar.png');
const userName = ref('User Name');

const sidebarLinksStore = useSidebarLinks();
const links = sidebarLinksStore.SidebarLinks;
</script>
<template>
  <!-- Vertical Navbar -->
  <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
    <div class="container-fluid">
      <!-- Toggler -->
      <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Brand -->
      <AdminLayoutSidebarLogo/>
      <!-- User menu (mobile) -->

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidebarCollapse">
        <!-- Navigation -->
        <ul class="navbar-nav">

          <template v-for="(link, index) in links" :key="link.title">
            <AdminLayoutSidebarLink v-if="!link.subLinks" :index="index" :link="link"/>
            <AdminLayoutSidebarLinkWithSub v-else :link="link"/>
          </template>

          <li :class="['nav-item']">
            <NuxtLink class="nav-link">
              <i class="bi bi-box-arrow-left"></i>
              Logout
            </NuxtLink>
          </li>

        </ul>

        <!-- Divider -->
        <hr class="navbar-divider my-5 opacity-20">
        <!-- Navigation -->
        <ul class="navbar-nav mb-md-4">
          <li>
            <a href="#" class="nav-link d-flex align-items-center">
              <div class="ms-3">
                <div class="position-relative d-inline-block text-white">
                  <img alt="Image Placeholder" :src="userAvatar" class="avatar rounded-circle">
                  <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                </div>
              </div>
              <div>
                <span class="d-block text-sm font-semibold">
                    {{ userName }}
                </span>
              </div>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

</template>
