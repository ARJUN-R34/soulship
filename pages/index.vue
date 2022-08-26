<template>
  <div>
    <Logos />
    <Suspense>
      <PageView />
      <template #fallback>
        <div italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
