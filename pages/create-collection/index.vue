<script setup lang="ts">
const params = reactive({
  name: '',
  utility: '',
  logo: null,
})
const UTILITIES = [
  'Gaming',
  'Education',
  'Finance',
  'Entertainment',
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="font-poppins text-center w-full h-full">
      <Suspense>
        <main class="py-12 px-16">
          <div class="collection-title">
            <div class="text-gray-400 font-bold text-left">
              Create Collection
            </div>
          </div>
          <div>
            <div class="w-full flex justify-center items-center text-left pt-24 pb-6 px-16 gap-12">
              <div class="text-sm w-36 font-bold text-gray-400">
                Collection Name
              </div>
              <FormTextInput v-model="params.name" class="w-[50%]" placeholder="Enter Name" />
            </div>
            <div class="flex justify-center items-center text-left py-6 px-16 gap-12">
              <div class="text-sm w-36 font-bold text-gray-400">
                Utility
              </div>
              <!-- <FormTextInput v-model="params.utility" class="w-[50%]" placeholder="Enter URI" /> -->
              <FormSelect class="w-[50%]" placeholder="Select utility" :items="UTILITIES" @input-modal-value="params.utility = $event" />
            </div>
            <div class="flex justify-center items-center text-left py-6 px-16 gap-12">
              <div class="text-sm w-36 font-bold text-gray-400">
                Upload Logo
              </div>
              <FormFileUpload v-model="params.logo" class="w-[50%]" @update:model-value="params.logo = $event" />
            </div>
            <div class="flex justify-end px-16">
              <Button class="mt-12 mr-36 2xl:mr-48">
                <template #content>
                  <label class="w-36 text-center gap-2 text-xs">
                    Deploy
                  </label>
                </template>
              </Button>
            </div>
          </div>
        </main>
      </Suspense>
    </div>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
 .collection-title {
  @apply flex justify-start items-center mb-4;
 }
</style>
