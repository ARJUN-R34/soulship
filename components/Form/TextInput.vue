<script lang="ts" setup>
interface ITextInputProps {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
}
defineProps<ITextInputProps>()

const emit = defineEmits<ITextInputEmits>()

const input = ref<HTMLInputElement>()
defineExpose({ input })
interface ITextInputEmits {
  (e: 'update:modelValue', value: string): void
}
</script>

<template>
  <input
    ref="input"
    type="text"
    :disabled="disabled"
    class="input drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-56 max-w-xs h-10 bg-secondary"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as any).value)"
  >
</template>
