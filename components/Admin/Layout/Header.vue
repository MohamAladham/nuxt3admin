<script lang="ts" setup>
const tabs = [];
const title = 'Page Title Here';

</script>

<template>

  <header class="bg-surface-primary border-bottom pt-6">
    <div class="container-fluid">
      <div class="mb-npx">

        <div class="row align-items-center" :class="{'mb-5':!tabs.length}">
          <div class="col-sm-4 col-12 mb-4 mb-sm-0">
            <!-- Title -->
            <h1 :class="[tabs.length?'mb-0':'mb-5']" class="h2 ls-tight">{{ title }}</h1>
          </div>
          <!-- Actions -->
          <div class="col-sm-8 col-12 text-sm-end">
            <div id="header_buttons" class="mx-n1">
              <!--to be teleported-->
            </div>
          </div>
        </div>
        <!-- Nav -->

        <ul v-if="tabs.length" class="nav nav-tabs overflow-x border-0 mt-5">
          <li class="nav-item" v-for="tab in tabs">
            <NuxtLink v-if="tab.show===undefined||tab.show" :href="tab.link" class="nav-link" :class="[tab.isActive?'active':'font-regular']">
              <i v-if="tab.icon" :class="tab.icon"></i>
              {{ tab.title }}
            </NuxtLink>
          </li>
        </ul>


      </div>
    </div>
  </header>

</template>
