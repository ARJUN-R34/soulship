<script setup lang="ts">
import { map, select } from 'radash'

const { account } = $(storeToRefs(useWeb3Store()))
const data = [
  'Recent',
  'Waiting for Response',
  'Pending',
  'Approved',
  'Rejected',
]
const client = useSupabaseClient()
// Status : 1:pending,0:rejected,2:approved
const getRequestData = async (account: string) => {
  const { data: organizationRequests, error: organizationRequestError } = await useAsyncData('requests', async () => {
    const { data } = await client.from('requests').select('*').eq('organization_address', account)
    return data
  })
  const { data: waitingRes, error: waitingRequestError } = await useAsyncData('requests', async () => {
    const { data } = await client.from('requests').select('*').eq('receiver', account).eq('status', 1)
    return data
  })
  const pendingRequests = select<any, any>(organizationRequests.value, req => req, req => req.status === 1)
  const rejectedRequests = select<any, any>(organizationRequests.value, req => req, req => req.status === 0)
  const approvedRequests = select<any, any>(organizationRequests.value, req => req, req => req.status === 2)
  const waitingRequests = await map(waitingRes.value, (request) => {
    request.status = 3
    return request
  })
}
const processRequest = async (status: number, contract_address: string) => {
  const { data: res, error } = await useAsyncData('requests', async () => {
    const { data } = await client.from('requests')
      .update({ status }).eq('contract_address', contract_address).eq('receiver', account)
    return data
  })
}
onMounted(() => {
  getRequestData(account)
})
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
