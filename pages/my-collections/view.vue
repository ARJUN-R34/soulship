<script setup lang="ts">
import type { ICoulmnData } from '~~/utils/interfaces'
const tokenData = {
  name: 'Soulship Org',
  address: '0x9d95e67f1B30610f58Fd6D4588A11f851F2818d9',
  utility: 'Gaming',
  total_minted: 50,
  total_burned: 8,
  balance: 2,
  logo_url: 'https://avatars.githubusercontent.com/u/38809367?s=280&v=4s',
}
const showModal = $ref<boolean>(false)
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="font-poppins text-center w-full h-full px-8">
      <Suspense>
        <div class="py-8 px-8">
          <div class="collection-title">
            <div class="text-gray-400 font-semibold">
              Manage My SBT Collection
            </div>
          </div>
          <div class="flex justify-start items-center py-8">
            <div class="w-36 h-36 rounded-lg bg-secondary overflow-hidden">
              <img :src="tokenData.logo_url" alt="logo">
            </div>
          </div>
        </div>
      </Suspense>
    </div>
    <Modal v-if="showModal" type="SUCCESS" @click:close="showModal = $event" />
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
 .collection-title {
  @apply flex justify-between items-center mb-4;
 }
</style>
