<script lang="ts" setup>
import { RiCopperCoinFill, RiFolderAddFill, RiListCheck, RiNotification3Fill, RiWallet3Fill } from 'vue-remix-icons'
const wallet = '0x1Df817D5DFC41482Fe11feD319ad6056b80F9794'
const user = useUserStore()
const router = useRouter()
const routeLink = (index: number, param: string) => {
  user.selectedItem = index
  router.push({ path: param })
}
</script>

<template>
  <main class="w-full h-full font-poppins">
    <div class="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" class="drawer-toggle">
      <div class="drawer-content flex flex-col items-center justify-center bg-secondary-100">
        <Header />
        <slot />
      </div>
      <div class="drawer-side  shadow-navigation bg-secondary">
        <label for="my-drawer" class="drawer-overlay" />
        <div class="menu relative justify-between">
          <div>
            <div class="z-20 ml-8 w-[70%] bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 py-2 flex pt-10">
              <div aria-current="page" aria-label="Homepage" class="w-full flex text-center flex-0 hover:cursor-pointer">
                <div class="font-title text-4xl text-gray-400 inline-flex transition-all duration-200">
                  <img alt="logo" src="assets/images/logo.svg">
                </div>
              </div>
            </div>
            <ul class="mt-12 overflow-y-auto w-full text-gray-400">
              <!-- Sidebar content here -->
              <li class="drawer-item" :class="user.selectedItem === 0 ? 'drawer-item-selected' : ''" @click="routeLink(0, '/my-collections')">
                <RiListCheck class="drawer-icon" /> My Collections
              </li>
              <li class="drawer-item" :class="user.selectedItem === 1 ? 'drawer-item-selected' : ''" @click="routeLink(1, '/create-collection')">
                <RiFolderAddFill class="drawer-icon" />Create Collection
              </li>
              <li class="drawer-item" :class="user.selectedItem === 2 ? 'drawer-item-selected' : ''" @click="routeLink(2, '/my-tokens')">
                <RiCopperCoinFill class="drawer-icon" />My Tokens
              </li>
              <li class="drawer-item" :class="user.selectedItem === 3 ? 'drawer-item-selected' : ''" @click="routeLink(3, '/notifications')">
                <RiNotification3Fill class="drawer-icon" />Notifications
              </li>
            </ul>
          </div>
          <div class="z-20 px-8 bg-opacity-90 backdrop-blur sticky bottom-4 items-center gap-2 py-4 flex pt-10">
            <div aria-current="page" aria-label="Homepage" class="w-full flex text-center flex-0 hover:cursor-pointer">
              <Button class="w-full">
                <template #content>
                  <label class="flex justify-start items-center gap-2 text-xs">
                    <RiWallet3Fill class="w-4 h-4 fill-white" />
                    {{ wallet.substring(0, 4) }}...{{ wallet.substring(wallet.length - 4, wallet.length - 1) }}
                  </label>
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.drawer-item {
  @apply flex flex-row justify-start items-center px-8 bg-transparent hover:bg-secondary-100 gap-4 py-4;
  @apply font-semibold text-sm;
}
.drawer-item-selected {
  @apply bg-secondary-100 shadow-3xl;
}
  .drawer-icon {
    @apply w-4 h-4 p-0 fill-white;
  }
  .drawer-text {
    @apply p-0;
  }
</style>
