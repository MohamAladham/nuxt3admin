<script lang="ts" setup>

interface PropsInterface {
  items: {},
}

const props = withDefaults(defineProps<PropsInterface>(), {});


const emit = defineEmits<{
  (e: 'update:page', value: number): void,
}>()


function getParameterByName(name, url = location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const linkClick = (paginationLink) => {
  let paginationPage = parseInt(getParameterByName('page', paginationLink));
  emit('update:page', paginationPage);
};

</script>


<template>

  <div class="row mt-4">
    <div class="col-sm-6">
      <p>
        Showing
        <span class="font-medium">{{ items.meta.from }}</span>
        to
        <span class="font-medium">{{ items.meta.to }}</span>
        of
        <span class="font-medium">{{ items.meta.total }}</span>
        entries
      </p>
    </div>
    <div class="col-sm-6">
      <nav>
        <ul class="pagination justify-content-end">
          <li v-if="items.links.prev" class="page-item prev-item">
            <NuxtLink class="page-link" @click.prevent="linkClick(items.links.prev)"><i class="bi bi-chevron-left"></i>
            </NuxtLink>
          </li>

          <template v-for="(link, index) in items.meta.links">
            <li
                v-if="index !==0 && index!==items.meta.links.length-1"
                class="page-item"
                :class="{'active':link.active}">

              <NuxtLink v-if="link.url" @click.prevent="linkClick(link.url)" class="page-link">{{ link.label }}</NuxtLink>
              <NuxtLink v-else href="javascript:;" class="page-link">{{ link.label }}</NuxtLink>
            </li>
          </template>

          <li v-if="items.links.next" class="page-item next-item">
            <NuxtLink class="page-link" @click.prevent="linkClick(items.links.next)"><i class="bi bi-chevron-right"></i>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>