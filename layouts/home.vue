<template>
  <main class="w-full h-full">
    <div class="hero relative min-h-screen  overflow-hidden overflow-y-scroll bg-secondary-100 bg-home-bg">
      <Header :main="true" position="fixed" />
      <div class="hero-content text-center">
        <slot />
      </div>
    </div>
  </main>
</template>
