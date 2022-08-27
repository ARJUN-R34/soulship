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
    class="input input-bg"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as any).value)"
  >
</template>

<style lang="postcss" scoped>
.input-bg {
  @apply h-12 bg-secondary border-0;
  box-shadow: 0px 0px 10px rgba(117, 117, 117, 0.25), inset 0px 0px 5px rgba(206, 206, 206, 0.25);
}
</style>
