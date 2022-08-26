<template>
  <NuxtLayout name="home">
    <div class="font-poppins text-center w-full h-full">
      <Suspense>
        <LandingPage />
        <template #fallback>
          <div italic>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
    </div>
  </NuxtLayout>
</template>
