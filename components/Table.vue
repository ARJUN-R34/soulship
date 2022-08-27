<script lang="ts" setup>
import _ from 'lodash'
import type { ICoulmnData } from '~~/utils/interfaces'
interface ITable {
  colData: ICoulmnData[]
  items: any[]
  isHover: boolean
}
interface IMyCollectionEmit<V = any> {
  (e: 'click:modelvalue', value: V): void
}
defineProps<ITable>()
const emit = defineEmits<IMyCollectionEmit>()
</script>

<template>
  <div class="overflow-x-auto shadow-3xl">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th v-for="(col, id) in colData" :key="id" class="bg-secondary text-gray-400" :style="{ flex: col.flex }">
            <span v-if="id === 0">Index</span>
            <span v-else>{{ col.title }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in items" :key="idx" :class="isHover ? 'hover' : ''" @click="emit('click:modelvalue', item)">
          <th v-for="(col, id) in colData" :key="id" :class="isHover ? 'table-tr-item' : ''" class="bg-secondary-100 text-gray-400 font-light text-sm" :style="{ flex: col.flex }">
            <div v-if="id === 0" class="table-tr-item">
              {{ idx + 1 }}
            </div>
            <slot v-else :name="col" :value="_.get(item, col.accessor)" :record="item" v-bind="{ item, id }">
              <div class="truncate">
                {{ _.get(item, col.accessor) }}
              </div>
            </slot>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="postcss" scoped>
  .table-tr-hover {
    @apply bg-secondary-100 cursor-pointer;
  }
  .table-tr-item {
    @apply hover:bg-secondary-100 hover:cursor-pointer;
  }
</style>
