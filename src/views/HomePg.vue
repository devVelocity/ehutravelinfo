<template>
  <div class="home">
    <homeImageBanner/>
    <article class="md:pl-24 md:pr-24 pr-4 pl-4 mt-16 min-h-[500px] w-full flex flex-col items-center">
      <div class="flex lg:gap-32 gap-24 max-w-7xl w-full flex-col sm:flex-row">
        <article class="w-full">
          <h1 class="text-neutral-800 dark:text-neutral-100 font-bold lg:text-3xl text-xl">About this Website</h1>
          <span class="bg-purple-800 w-full h-[1px] rounded-md inline-block"></span>
        </article>
        <article class="w-full">
          <h1 class="text-neutral-800 dark:text-neutral-100 font-bold lg:text-3xl text-xl">Live Feeds</h1>
          <span class="bg-purple-800 w-full h-[1px] rounded-md inline-block"></span>
        </article>
      </div>
    </article>
  </div>
</template>

<script>
import homeImageBanner from '@/components/homeImgBanner.vue'

export default {
  components: {
    homeImageBanner
  },
}
</script>
