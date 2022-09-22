<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">

interface PropsInterface {
  id: string,
  preview?: string,
  isImg?: boolean,
  accept?: string,
  modelValue?: any,
  colWidth?: number,
  label?: string,
  error?: string,
}

const props = withDefaults(defineProps<PropsInterface>(), {
  isImg: false,
  colWidth: 0,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
  (e: 'update:preview', value: any): void,
  (e: 'changed', value: any): void,
}>()

const inputClass = {
  'border-danger': props.error,
  'form-control': true
};


const fileInput = ref(null);
const preview = ref<any>(props.preview);

const filesize = (size) => {
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

const browse = () => {
  fileInput.value.click()
}

const onInput = (e) => {
  emit('update:modelValue', e.target.files[0])
}

const remove = () => {
  emit('update:preview', '')
  emit('update:modelValue', '')
}


watch(() => props.modelValue, (newVariant, oldVariant) => {
  if (!newVariant || typeof newVariant !== 'object') {
    fileInput.value = ''
    return;
  }

  let reader = new FileReader();

  if (props.isImg) {
    reader.onload = function (e) {
      emit('update:preview', e.target.result);
      preview.value = e.target.result;
      // console.log(e.target.result);
    }
    reader.readAsDataURL(newVariant);
  }

})

</script>


<template>
  <AdminUIInputWrap :colWidth="colWidth">

    <AdminUIInputLabel v-if="label" :inputID="id">
      {{ label }}
    </AdminUIInputLabel>

    <input ref="fileInput"
           type="file"
           :accept="accept"
           :class="inputClass"
           style="display: none"
           @input="onInput"
    />

    <div class="d-flex">
      <div v-if="preview" class="d-flex">
        <div v-if="isImg">
          <img :src="preview" width="60">
        </div>
        <div v-else>
          <AdminUIButton color="secondary" target="_blank" :to="preview" icon="bi bi-file">
            View File
          </AdminUIButton>
        </div>
      </div>
      <!--show picked file name-->
      <div v-if="(modelValue&& typeof modelValue === 'object')" class="ms-3">
        <p>{{ modelValue.name }}</p>
        <span class="font-small-4 text-secondary">({{ filesize(modelValue.size) }})</span>
      </div>

      <div v-if="modelValue || preview">
        <AdminUIButton color="secondary" @click="remove">
          Remove
        </AdminUIButton>
      </div>
    </div>

    <div v-if="!modelValue && !preview" class="">
      <AdminUIButton color="secondary" @click="browse" class="m-0">
        Upload File
      </AdminUIButton>
    </div>

    <AdminUIInputError v-if="error"/>

  </AdminUIInputWrap>
</template>