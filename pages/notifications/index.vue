<script setup lang="ts">
const data = [
  'Recent',
  'Waiting for Response',
  'Pending',
  'Approved',
  'Rejected',
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="font-poppins text-center w-full h-full">
      <main class="py-8 px-16">
        <div class="title">
          <IconsUser class="icon" /> {{ data[0] }}
        </div>
        <div class="card-bg">
          <AlertCard status="RECENT">
            <template #content>
              <div class="text-sm font-bold">
                You received a token from Devfolio.
              </div>
            </template>
          </AlertCard>
        </div>
        <div class="title">
          <IconsUser class="icon" /> {{ data[1] }}
        </div>
        <div class="card-bg">
          <AlertCard status="WAITING">
            <template #content>
              <div class="text-sm font-bold">
                You received a token from Devfolio.
              </div>
            </template>
          </AlertCard>
        </div>
        <div class="title">
          <IconsOrganisation class="icon" /> {{ data[2] }}
        </div>
        <div class="card-bg">
          <AlertCard status="PENDING">
            <template #content>
              <div class="text-sm font-bold">
                You received a token from Devfolio.
              </div>
            </template>
          </AlertCard>
        </div>
        <div class="title">
          <IconsOrganisation class="icon" /> {{ data[3] }}
        </div>
        <div class="card-bg">
          <AlertCard status="APPROVE">
            <template #content>
              <div class="text-sm font-bold">
                You received a token from Devfolio.
              </div>
            </template>
          </AlertCard>
        </div>
        <div class="title">
          <IconsOrganisation class="icon" /> {{ data[4] }}
        </div>
        <div class="card-bg">
          <AlertCard status="REJECT">
            <template #content>
              <div class="text-sm font-bold">
                You received a token from Devfolio.
              </div>
            </template>
          </AlertCard>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
.title {
  @apply w-full flex justify-start gap-4 items-center fill-gray-400 text-gray-400;
}
.icon {
  @apply w-5 h-5;
}
.card-bg {
  @apply w-full p-3 bg-secondary mt-4 mb-8 rounded-md shadow-lg;
}
</style>
