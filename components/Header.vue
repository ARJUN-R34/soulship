<script lang="ts" setup>
import { relative } from 'path'
defineProps<IHeader>()
const { account, network } = $(storeToRefs(useWeb3Store()))
const { $reset: web3Logout, connectWallet } = useWeb3Store()
const router = useRouter()
const logout = () => {
  web3Logout()
  router.push('/')
}

interface IHeader {
  main?: boolean
  position?: 'sticky' | 'fixed'
}
onMounted(() => {
  connectWallet()
})
</script>

<template>
  <div class="z-20 navbar px-16 py-4 bg-secondary shadow-navigation top-0 left-0 h-20 2xl:h-24" :class="[position ?? 'sticky', main ? 'justify-between' : 'justify-end']">
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
    <div v-if="!main" class="flex gap-4">
      <Button class="w-auto py-2">
        <template #content>
          <label class="flex justify-start items-center gap-2 text-xs">
            <IconsCircle class="w-4 h-4 fill-white" />
            {{ network }}
          </label>
        </template>
      </Button>
      <Button class="w-auto" @click="logout">
        <template #content>
          <label class="flex justify-start items-center gap-2 text-xs">
            <IconsWallet class="w-4 h-4 fill-white" />
            {{ `${account.substring(0, 4)}...${account.substring(account.length - 4, account.length - 1)}` }}
          </label>
        </template>
      </Button>
    </div>
  </div>
</template>

<style module lang="postcss">
</style>
