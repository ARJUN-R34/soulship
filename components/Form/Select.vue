<script lang="ts" setup>
interface IFormSelect {
  items: any[]
  disabled?: boolean
  placeholder?: string
}
interface ISelectEmit<V = any> {
  (e: 'inputModalValue', value: V): void
}
const props = defineProps<IFormSelect>()
const emit = defineEmits<ISelectEmit>()
const selected = 'Select'
const selectItem = (value: any) => {
  emit('inputModalValue', value)
}
</script>

<template>
  <div class="dropdown dropdown-end w-full text-sm">
    <button :disabled="props.disabled" class="input input-bg box-shadow">
      <slot name="text">
        {{ selected }}
      </slot>
      <IconsArrowDown class="icon" />
    </button>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-secondary rounded-box w-full mt-2 box-shadow">
      <li v-for="(item, id) in items" :key="id">
        <a @click="selectItem(item)">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.input-bg {
    @apply flex justify-between items-center;
  @apply text-left w-full h-12 bg-secondary border-0;
}
.box-shadow {
    @apply  text-gray-400;
    box-shadow: 0px 0px 10px rgba(117, 117, 117, 0.25), inset 0px 0px 5px rgba(206, 206, 206, 0.25);
}
.icon {
    @apply w-4 h-4 p-0 fill-white;
}
</style>
