<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue'
import BadgeItem from '@/components/BadgeItem.vue'
import '@/assets/main.css'
</script>

<template>
  <main class="text-gray-900">
    <h1 class="text-2xl font-semibold">Hello Cats!</h1>
    <ImageItem></ImageItem>
    <p>
      This is my website! My name is Noah and I am a <b>developer</b>! I specialize in frontend and
      backend development. My website has a blog and a page to know more about me. Check both of
      them out! My tech stack is: Frontend tools, TypeScript, sqlite, c/c++, python, go, supabase
      and linux. This website is made in vue and typescript. It uses the vue router, eslint,
      tailwind and prettier.
    </p>
    <p>
      Apart from that, these are my socials: <a href="https://twitter.com/Hash1616929">Twitter</a>,
      <a href="https://github.com/Noxlobin">Github</a> and
      <a href="https://discord.gg/PwkGXb5R">Discord</a>.
    </p>
    <p>Thanks for visiting my little cove :)</p>
    <h1 class="text-2xl font-semibold">Stack set</h1>
    <div class="flex space-x-3 my-2">
      <BadgeItem
        source="https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=ffffff"
        alt="JavaScript"
      />
      <BadgeItem
        source="https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&logoColor=ffffff"
        alt="TypeScript"
      />
      <BadgeItem
        source="https://img.shields.io/badge/golang-blue?style=for-the-badge&logo=go&logoColor=ffffff"
        alt="Golang"
      />
      <BadgeItem
        source="https://img.shields.io/badge/c++-green?style=for-the-badge&logo=c%2B%2B&logoColor=ffffff"
        alt="C++"
      />
      <BadgeItem
        source="https://img.shields.io/badge/clang-purple?style=for-the-badge&logo=c&logoColor=ffffff"
        alt="C"
      />
    </div>
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
