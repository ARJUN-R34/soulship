<script lang="ts" setup>
import { useFileDialog } from '@vueuse/core'
const emit = defineEmits<IFileUploadEmits>()
const { files, open, reset } = useFileDialog()
const input = ref<HTMLInputElement>()
defineExpose({ input })
interface IFileUploadEmits {
  (e: 'update:modelValue', value: any): void
}
watchEffect(() => {
  if (files.value?.length)
    emit('update:modelValue', files.value[0])
})
</script>

<template>
  <div class="flex justify-start items-center">
    <Button class="w-24 rounded-r-none" type="button" @click="open">
      <template #content>
        Choose
      </template>
    </Button>
    <div
      class="input input-bg"
    >
      <label>{{ files ? files[0].name : '' }}</label>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.input-bg {
  @apply w-full h-12 bg-secondary border-0 rounded-l-none flex justify-start items-center;
  box-shadow: 0px 0px 10px rgba(117, 117, 117, 0.25), inset 0px 0px 5px rgba(206, 206, 206, 0.25);
}
</style>
