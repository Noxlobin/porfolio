<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue'
</script>

<template>
  <main class="">
    <h1 class="text-black text-2xl font-bold mb-4">My Biography</h1>

    <div class="flex mb-2 border-b-2 border-blue-800 p-1">
      <p class="mr-80 w-[1000px] mt-4">
        Hello! This is my portfolio's page where I dive into crucial details about my life. If you
        want a short and simple version, find it here. Hi, I'm Noah, a developer and a retired
        McDonalds worker. I develop apps of all shapes and sizes, but have zero knowledge in maths
        (excel at english though!). I live in Wales in Europe. My socials are
        <a href="https://twitter.com/Hash1616929">Twitter</a>,
        <a href="https://github.com/Noxlobin">Github</a> and
        <a href="https://discord.gg/PwkGXb5R">Discord</a>. Through my life, I strive to be social
        but unapoligetic. Hope you liked my intro! Time for the meat!
      </p>
      <ImageItem class="w-full h-full" />
    </div>
  </main>
</template>

<style scoped>
a {
  @apply text-blue-700 underline;
}
a:visited {
  @apply text-blue-800;
}
</style>
