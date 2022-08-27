<script setup>
useHead({
  title: 'Soul Ship',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
const supabase = useSupabaseClient()
console.log('🚀 ~ file: app.vue ~ line 11 ~ supabase', supabase)
</script>

<template>
  <NuxtLayout class="overflow-hidden">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
