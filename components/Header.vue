<script lang="ts" setup>
import { relative } from 'path'

interface IHeader {
  main?: boolean
  position?: 'sticky' | 'fixed'
}
defineProps<IHeader>()
</script>

<template>
  <div class="z-20 navbar px-8 bg-secondary justify-between shadow-navigation top-0 left-0 h-20 2xl:h-24" :class="position ?? 'sticky'">
    <div v-if="main" class="text-base font-bold text-gray-400">
      <img alt="logo" src="assets/images/logo.svg">
    </div>
    <!-- <NuxtLink href="/my-collections">
      <Button v-if="main" class="w-36 gap-2" type="button">
        <template #content>
          Launch
          <IconsLogin class="w-6 h-6 p-0 fill-white" />
        </template>
      </Button>
    </NuxtLink> -->
    <!-- <a class="btn btn-ghost normal-case text-xl">Soulship</a> -->
  </div>
</template>

<style module lang="postcss">
</style>
