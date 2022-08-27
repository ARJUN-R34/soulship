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
    <Button>
      <template #content>
        Register / Login
      </template>
    </Button>
    <!-- <a class="btn btn-ghost normal-case text-xl">Soulship</a> -->
  </div>
  <Modal>
    <template #title>
      Register your organisation
    </template>
    <template #content>
      <div class="flex justify-between items-center py-6">
        <div class="text-sm font-cold text-gray-400">
          Organisation Name
        </div>
      </div>
    </template>
  </Modal>
</template>

<style module lang="postcss">
</style>
