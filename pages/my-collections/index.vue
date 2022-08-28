<script setup lang="ts">
import { flat, map } from 'radash'
import type { ICoulmnData } from '~~/utils/interfaces'
const { getOrgCollection } = useWeb3Store()
const { account } = $(storeToRefs(useWeb3Store()))

const route = useRoute()
const router = useRouter()
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
    title: 'Symbol',
    flex: 1,
    accessor: 'symbol',
  },
  {
    title: 'Address',
    flex: 1,
    accessor: 'contractAddress',
  },
  {
    title: 'Utility',
    flex: 1,
    accessor: 'utility',
  },
  // {
  //   title: 'Total Minted',
  //   flex: 1,
  //   accessor: 'total_minted',
  // },
  // {
  //   title: 'Total Burned',
  //   flex: 1,
  //   accessor: 'total_burned',
  // },
]
let currentAddress = $ref('')
let currentCollectionList: any[] | undefined = []
const routeLink = (address: string) => {
  currentAddress = address
  router.push(`/my-collections/${address}`)
}
onMounted(async () => {
  console.log('🚀 ~ file: index.vue ~ line 65 ~ onMounted ~ account', account)
  currentCollectionList = await getOrgCollection(account)
  console.log('🚀 ~ file: index.vue ~ line 64 ~ onMounted ~ currentCollectionList', currentCollectionList)
})
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
            <NuxtLink to="/create-collection">
              <Button>
                <template #content>
                  <label class="flex justify-start items-center gap-2 text-xs">
                    <IconsAdd class="w-5 h-5 fill-white" />
                    Create Collection
                  </label>
                </template>
              </Button>
            </NuxtLink>
          </div>
          <Table
            :is-hover="true" :items="content" :col-data="colData"
            @click:modelvalue="routeLink($event.address)"
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
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
 .collection-title {
  @apply flex justify-between items-center mb-4;
 }
</style>
