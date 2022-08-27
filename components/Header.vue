<script lang="ts" setup>
import { relative } from 'path'

interface IHeader {
  main?: boolean
  position?: 'sticky' | 'fixed'
}
defineProps<IHeader>()
</script>

<template>
  <div class="z-20 navbar bg-secondary shadow-navigation top-0 left-0 h-20 2xl:h-24" :class="position ?? 'sticky'">
    <div v-if="main" class="text-base font-bold text-gray-400 ml-8">
      <img alt="logo" src="assets/images/logo.svg">
    </div>
    <!-- <a class="btn btn-ghost normal-case text-xl">Soulship</a> -->
  </div>
</template>

<style module lang="postcss">
</style>
