<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
    <button class="btn btn-active">
      Button
    </button>
    <button class="btn btn-active btn-primary">
      Button
    </button>
    <button class="btn btn-active btn-secondary">
      Button
    </button>
    <button class="btn btn-active btn-accent">
      Button
    </button>
    <button class="btn btn-active btn-ghost">
      Button
    </button>
    <button class="btn btn-active btn-link">
      Button
    </button>
  </div>
</template>
