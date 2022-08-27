<template>
  <div class="stats shadow-navigation p-4 w-60 bg-secondary">
    <div class="stat">
      <div class="stat-title text-sm">
        <slot name="title" />
      </div>
      <div class="stat-value text-xl">
        <slot name="value" />
      </div>
    </div>
  </div>
</template>
