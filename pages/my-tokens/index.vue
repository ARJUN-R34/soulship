<script setup lang="ts">
import { RiAddFill } from 'vue-remix-icons'
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
const colData: ICoulmnData[] = [
  {
    title: 'Name',
    flex: 1,
    accessor: 'name',
  },
  {
    title: 'Address',
    flex: 1,
    accessor: 'address',
  },
  {
    title: 'Utility',
    flex: 1,
    accessor: 'utility',
  },
  {
    title: 'Total Minted',
    flex: 1,
    accessor: 'total_minted',
  },
  {
    title: 'Total Burned',
    flex: 1,
    accessor: 'total_burned',
  },
  {
    title: 'Balance',
    flex: 1,
    accessor: 'balance',
  },
]
const showModal = $ref<boolean>(false)
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="font-poppins text-center w-full h-full px-8">
      <Suspense>
        <div class="py-8 px-8">
          <div class="collection-title">
            <div class="text-gray-400 font-semibold">
              My Collections
            </div>
            <Button @click="showModal = true">
              <template #content>
                <label class="flex justify-start items-center gap-2 text-xs">
                  <RiAddFill class="w-4 h-4 fill-white" />
                  Create Collection
                </label>
              </template>
            </Button>
          </div>
          <Table
            :is-hover="true" :items="content" :col-data="colData"
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
    <Modal v-if="showModal" type="SUCCESS" @click:close="showModal = $event" />
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
 .collection-title {
  @apply flex justify-between items-center mb-4;
 }
</style>
