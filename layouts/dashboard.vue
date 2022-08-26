<script lang="ts" setup>
import { RiCopperCoinFill, RiFolderAddFill, RiListCheck, RiNotification3Fill } from 'vue-remix-icons'
</script>

<template>
  <main class="w-full h-full font-poppins">
    <div class="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" class="drawer-toggle">
      <div class="drawer-content flex flex-col items-center justify-center bg-secondary-100">
        <Header />
        <slot />
      </div>
      <div class="drawer-side w-64 2xl:w-96  shadow-navigation bg-secondary">
        <label for="my-drawer" class="drawer-overlay" />
        <div class="menu relative w-64 2xl:w-96">
          <div class="z-20 mx-auto bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 py-2 flex pt-10">
            <div aria-current="page" aria-label="Homepage" class="w-full text-center flex-0 hover:cursor-pointer">
              <div class="font-title text-4xl text-gray-400 inline-flex transition-all duration-200">
                <!-- <img alt="logo" :src="logoText"> --> SoulShip
              </div>
            </div>
          </div>
          <ul class="mt-20 overflow-y-auto w-full text-gray-400">
            <!-- Sidebar content here -->
            <li class="drawer-item">
              <RiListCheck class="drawer-icon" /> <a>My Collections</a>
            </li>
            <li class="drawer-item">
              <RiFolderAddFill class="drawer-icon" /><a>Create Collection</a>
            </li>
            <li class="drawer-item">
              <RiCopperCoinFill class="drawer-icon" /><a>My Tokens</a>
            </li>
            <li class="drawer-item">
              <RiNotification3Fill class="drawer-icon" /><a>Notifications</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.drawer-item {
  @apply flex flex-row justify-start items-center px-8 py-2 bg-transparent hover:bg-secondary-100;
  @apply font-semibold text-sm;
}
  .drawer-icon {
    @apply w-4 h-4 p-0 fill-white;
  }
  .drawer-text {
    @apply p-0;
  }
</style>
