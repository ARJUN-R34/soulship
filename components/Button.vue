<script lang="ts" setup>
interface IButton {
  color?: string
}
defineProps<IButton>()
</script>

<template>
  <button class="btn text-white normal-case" :class="color ? `btn-${color}` : 'btn-primary'">
    <slot name="content">
      Click
    </slot>
  </button>
</template>

<style module lang="scss"></style>
