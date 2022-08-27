<script setup lang="ts">
import type { ICoulmnData } from '~~/utils/interfaces'
const content = [{
  name: 'Soulship Org',
  address: '0x9d95e67f1B30610f58Fd6D4588A11f851F2818d9',
  utility: 'Gaming',
  token_id: 50,
  description: 'A one stop destination for the web3 users to create, deploy and manage Soulbound Tokens',
  balance: 2,
  logo_url: 'https://avatars.githubusercontent.com/u/38809367?s=280&v=4s',
},
{
  name: 'Soulship Org 2',
  address: '0x5695e63f4B30610f58Fd6D4588A11f851F2818d9',
  utility: 'Entertainment',
  token_id: 58,
  description: 'A one stop destination for the web3 users to create, deploy and manage Soulbound Tokens',
  balance: 10,
  logo_url: 'https://avatars.githubusercontent.com/u/38809367?s=280&v=4s',
}]
const colData: ICoulmnData[] = [
  {
    title: 'Token ID',
    flex: 1,
    accessor: 'token_id',
  },
  {
    title: 'Name',
    flex: 1,
    accessor: 'name',
  },
  {
    title: 'Utility',
    flex: 1,
    accessor: 'utility',
  },
  {
    title: 'Address',
    flex: 1,
    accessor: 'address',
  },
]
let showModal = $ref<boolean>(false)
let selectedToken = ref(content[0])
const selectToken = (value: any) => {
  selectedToken = value
  showModal = true
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="font-poppins text-center w-full h-full px-8">
      <Suspense>
        <div class="py-8 px-8">
          <div class="collection-title">
            <div class="text-gray-400 font-bold">
              My Collections
            </div>
            <Button @click="showModal = true">
              <template #content>
                <label class="flex justify-start items-center gap-2 text-xs">
                  <IconsAdd class="w-4 h-4 fill-white" />
                  Create Collection
                </label>
              </template>
            </Button>
          </div>
          <Table
            :is-hover="true" :items="content" :col-data="colData"
            @click:modelvalue="selectToken($event)"
          >
            <template #fallback>
              <div italic>
                <span animate-pulse>Loading...</span>
              </div>
            </template>
          </table>
        </div>
      </Suspense>
    </div>
    <Modal v-if="showModal" @click:close="showModal = $event">
      <template #content>
        <div class="flex justify-start items-center py-8">
          <div class="w-[20%] flex justify-start items-center">
            <div class="flex justify-start items-center w-36 h-36 rounded-lg bg-secondary overflow-hidden">
              <img :src="selectedToken?.logo_url" alt="logo">
            </div>
          </div>
          <div class="w-[75%] text-left">
            <div class="w-full flex justify-between items-center py-3 gap-4 text-sm text-gray-400">
              <div class="w-[30%] font-bold">
                Name
              </div>
              <div class="w-[5%]">
                :
              </div>
              <div class="w-[65%] font-light">
                {{ selectedToken.name }}
              </div>
            </div>
            <div class="w-full flex justify-between items-center py-3 gap-4 text-sm font-bold text-gray-400">
              <div class="w-[30%] font-bold">
                Token ID
              </div>
              <div class="w-[5%]">
                :
              </div>
              <div class="w-[65%] font-light">
                {{ selectedToken.token_id }}
              </div>
            </div>
            <div class="w-full flex justify-between items-center py-3 gap-4 text-sm font-bold text-gray-400">
              <div class="w-[30%] font-bold">
                Utility
              </div>
              <div class="w-[5%]">
                :
              </div>
              <div class="w-[65%] font-light">
                {{ selectedToken.utility }}
              </div>
            </div>
            <div class="w-full flex justify-between items-center py-3 gap-4 text-sm font-bold text-gray-400">
              <div class="w-[30%] font-bold">
                Address
              </div>
              <div class="w-[5%]">
                :
              </div>
              <div class="w-[65%] font-light">
                {{ selectedToken.address }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
 .collection-title {
  @apply flex justify-between items-center mb-4;
 }
</style>
