<script setup lang="ts">
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
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="font-poppins text-center w-full h-full">
      <Suspense>
        <main class="py-8 px-16">
          <div>
            <div>My Collections</div>
            <Button>Create Collection</Button>
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
        </main>
      </Suspense>
    </div>
  </NuxtLayout>
</template>
