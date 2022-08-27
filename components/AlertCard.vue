<script lang="ts" setup>
import _ from 'lodash'
interface IAlertCard {
  status: 'RECENT' | 'WAITING' | 'PENDING' | 'APPROVE' | 'REJECT'
}
defineProps<IAlertCard>()
const bgColors = {
  RECENT: 'bg-[#945cf4]',
  WAITING: 'bg-[#3abff8]',
  PENDING: 'bg-[#fcbc23]',
  APPROVE: 'bg-[#37d399]',
  REJECT: 'bg-[#f87272]',
}
</script>

<template>
  <div class="alert text-gray-900 shadow-lg" :class="_.get(bgColors, status)">
    <div>
      <IconsRecent v-if="status === 'RECENT'" class="icon" />
      <IconsWaiting v-if="status === 'WAITING'" class="icon" />
      <IconsPending v-if="status === 'PENDING'" class="icon" />
      <IconsApprove v-if="status === 'APPROVE'" class="icon" />
      <IconsReject v-if="status === 'REJECT'" class="icon" />
      <slot name="content" />
    </div>
    <div v-if="status === 'WAITING'" class="flex-none">
      <button class="btn btn-sm btn-ghost">
        Deny
      </button>
      <button class="btn btn-sm btn-primary">
        Accept
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.icon {
  @apply w-5 h-5 fill-white;
}
</style>
