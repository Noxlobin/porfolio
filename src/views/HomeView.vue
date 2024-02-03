<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue'
import '@/assets/main.css'
</script>

<template>
  <main class="text-gray-900">
    <h1 class="text-2xl font-semibold">Hello Cats!</h1>
    <ImageItem></ImageItem>
    <p>
      This is my website! My name is Noah and I am a <b>developer</b>! I specialize in frontend and
      backend development. My website has a blog and a page to know more about me. Check both of
      them out! My tech stack is: Frontend tools, TypeScript, sqlite, c/c++, python, go, swift,
      surrealdb and linux. This website is made in vue and typescript. It uses the vue router,
      eslint, tailwind and prettier.
    </p>
    <p>
      Apart from that, these are my socials: <a href="https://twitter.com/Hash1616929">Twitter</a>,
      <a href="https://github.com/Noxlobin">Github</a> and
      <a href="https://discord.gg/PwkGXb5R">Discord</a>.
    </p>
    <p>Thanks for visiting my little cove :)</p>
  </main>
</template>

<style scoped>
b {
  @apply font-bold;
}
p {
  @apply my-2;
}
a {
  @apply text-blue-700 underline;
}
a:visited {
  @apply text-blue-800;
}
</style>
