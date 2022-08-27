import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'
import cloneDeep from 'lodash.clonedeep'

function resetStore({ store }) {
  const initialState = cloneDeep(store.$state)
  store.$reset = () => store.$patch(cloneDeep(initialState))
}
export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(createNuxtPersistedState(useCookie))
  $pinia.use(resetStore)
})
