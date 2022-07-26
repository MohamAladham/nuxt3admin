<script lang="ts" setup>
const route = useRoute();
const logo = ref('https://via.placeholder.com/100/b3b3b3?Text=LOGO');
const siteName = ref('Site Name');
const userAvatar = ref('/assets/admin/img/avatar.png');
const userName = ref('User Name');

const links = [
  {
    title: 'Dashboard',
    icon: 'bi bi-house',
    url: '/admin',
    activeCheck: ['admin']
  },
  {
    title: 'Users',
    icon: 'bi bi-people',
    url: '/admin/users',
    activeCheck: ['admin-users', 'admin-users-id'],
    permissions: [''],
  },
];

const isActive = (index, subIndex = false) => {
  let activeCheck = [];

  if (subIndex === false) {
    activeCheck = links[index].activeCheck;
  } else {
    activeCheck = links[index].subLinks[subIndex].activeCheck;
  }

  if (!activeCheck.length) {
    return false
  }

  for (let i = 0; i < activeCheck.length; i++) {
    if (route.name === activeCheck[i]) {
      return true;
    }
  }
}

const checkPermission = (link) => {
  let permissions = link.permissions;

  if (!permissions) {
    return true;
  }

  for (let i = 0; i < permissions.length; i++) {
    //todo
    if (true) {
      return true;
    }
  }

  return false;
}


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
      <NuxtLink class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 text-center">
        <img :src="logo" :alt="siteName">
      </NuxtLink>
      <!-- User menu (mobile) -->

      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidebarCollapse">
        <!-- Navigation -->
        <ul class="navbar-nav">

          <template v-for="(link, index) in links" :key="link.title">
            <template v-if="!link.subLinks">
              <li :class="[
                  isActive(index) && !link.subLinks?'active':'',
                  link.subLinks&&isActive(index)?'sidebar-group-active open':'',
                  link.subLinks?'has-sub':'','nav-item'
                ]">

                <NuxtLink :class="[isActive(index)?'active':'', 'nav-link']"
                          :to="link.url" v-if="checkPermission(link)">
                  <i :class="link.icon"></i>
                  {{ link.title }}
                  <span v-if="link.badge" class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">{{ link.badge }}</span>
                </NuxtLink>
              </li>
            </template>

            <template v-else>
              <li :class="[
                  isActive(index) && !link.subLinks?'active':'',
                  link.subLinks&&isActive(index)?'sidebar-group-active open':'',
                  link.subLinks?'has-sub':'','nav-item'
                ]">
                <a class="d-flex align-items-center nav-link" :href="link.url" v-if="checkPermission(link)">
                  <i :class="link.icon"></i>
                  {{ link.title }}
                  <span v-if="link.badge" class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">{{ link.badge }}</span>
                </a>
                <ul v-if="link.subLinks" class="menu-content">
                  <li v-for="(subLink, subIndex) in link.subLinks" :key="link.title + subLink.title" :class="isActive(index,subIndex)?'active':''">
                    <NuxtLink class="nav-link" :href="subLink.url" v-if="checkPermission(subLink)">
                      <i class="circle"></i>
                      <span class="menu-item">{{ subLink.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </template>
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
