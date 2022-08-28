<script setup lang="ts">
const { connectWallet, getContract } = useWeb3Store()
const { account } = $(storeToRefs(useWeb3Store()))
const router = useRouter()
const login = async () => {
  await connectWallet()
  if (account !== '')
    router.push({ path: '/my-collections' })
}
</script>

<template>
  <div class="text-[65px] text-gray-50 py-2 font-light font-maiandra tracking-wider">
    <span class="text-[82px]">S</span>OUL<span class="text-[82px]">S</span>HIP
  </div>
  <div class="w-[70%] text-2xl text-gray-50 py-2 font-medium font-alegreya tracking-wide m-auto">
    A one stop destination for the web3 users to create, deploy and manage Soulbound Tokens
  </div>
  <Button class="my-4" @click="login">
    <template #content>
      Launch Dapp
    </template>
  </Button>
</template>
