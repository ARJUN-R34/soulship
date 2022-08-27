<script lang="ts" setup>
const wallet = '0x1Df817D5DFC41482Fe11feD319ad6056b80F9794'
const user = useUserStore()
let { selectedItem } = $(storeToRefs(useUserStore()))
const { currentAddress } = $(storeToRefs(useUserStore()))
const showRegister = $ref<boolean>(false)
const router = useRouter()
const routeLink = (index: number, param: string) => {
  // if (index === 1)
  //   showRegister = true
  selectedItem = index
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
                  <img alt="logo" src="~/assets/images/logo.svg">
                </div>
              </div>
            </div>
            <ul class="mt-12 overflow-y-auto w-full text-gray-400">
              <!-- Sidebar content here -->
              <li class="drawer-item" :class="selectedItem === 0 ? 'drawer-item-selected' : ''" @click="routeLink(0, '/my-collections')">
                <IconsCollection class="drawer-icon" /> My Collections
              </li>
              <li class="drawer-item" :class="selectedItem === 1 ? 'drawer-item-selected' : ''" @click="routeLink(1, '/create-collection')">
                <IconsList class="drawer-icon" />Create Collection
              </li>
              <li class="drawer-item" :class="selectedItem === 2 ? 'drawer-item-selected' : ''" @click="routeLink(2, '/my-tokens')">
                <IconsTokens class="drawer-icon" />My Tokens
              </li>
              <li class="drawer-item" :class="selectedItem === 3 ? 'drawer-item-selected' : ''" @click="routeLink(3, '/notifications')">
                <IconsNotification class="drawer-icon" />Notifications
              </li>
            </ul>
          </div>
          <div class="z-20 px-8 bg-opacity-90 backdrop-blur sticky bottom-4 items-center gap-2 py-4 flex pt-10">
            <div aria-current="page" aria-label="Homepage" class="w-full flex text-center flex-0 hover:cursor-pointer">
              <Button class="w-full">
                <template #content>
                  <label class="flex justify-start items-center gap-2 text-xs">
                    <IconsWallet class="w-4 h-4 fill-white" />
                    {{ currentAddress ? (`${wallet.substring(0, 4)}...${wallet.substring(wallet.length - 4, wallet.length - 1)}`) : 'Connect' }}
                  </label>
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="showRegister" @click:close="showRegister = false">
      <template #title>
        Register your organisation
      </template>
      <template #content>
        <div class="flex justify-between items-center py-6 gap-4">
          <div class="text-sm font-bold text-gray-400">
            Organisation Name
          </div>
          <FormTextInput placeholder="Enter Organisation Name" />
        </div>
        <div class="flex justify-between items-center py-6 gap-4">
          <div class="text-sm font-bold text-gray-400">
            Upload Logo
          </div>
          <FormFileUpload placeholder="Enter Organisation Name" />
        </div>
      </template>
      <template #buttons>
        <Button class="w-36 gap-2" type="button">
          <template #content>
            Register
            <IconsLogin class="w-6 h-6 p-0 fill-white" />
          </template>
        </Button>
      </template>
    </Modal>
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
