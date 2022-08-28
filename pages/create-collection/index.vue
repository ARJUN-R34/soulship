<script setup lang="ts">
import type { CIDString } from 'web3.storage'
import type { ICoulmnData } from '~~/utils/interfaces'

const content = [{
  name: 'Soulship Org',
  address: '0x9d95e67f1B30610f58Fd6D4588A11f851F2818d9',
  utility: 'Gaming',
  total_minted: 50,
  total_burned: 8,
  balance: 2,
},
{
  name: 'Soulship Org 2',
  address: '0x5695e63f4B30610f58Fd6D4588A11f851F2818d9',
  utility: 'Entertainment',
  total_minted: 150,
  total_burned: 58,
  balance: 10,
}]
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
const deploy = async () => {
  let imgCid
  if (params.logo)
    imgCid = await useStoreFile(params.logo)
// https://${imgCid}.ipfs.w3s.link/logo.png
}
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
              <Button class="mt-12 mr-36 2xl:mr-48" @click="deploy">
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
