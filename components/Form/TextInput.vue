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
    class="input w-full max-w-xs"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as any).value)"
  >
</template>
