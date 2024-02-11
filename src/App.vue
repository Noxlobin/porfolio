<script setup lang="ts">
import { RouterView } from 'vue-router'

const links = ['home', 'about', 'socials', 'blogs']
</script>

<template>
  <main class="text-slate-700 font-semibold bg-slate-100 w-screen h-screen">
    <nav class="border-b-2 border-gray-600 py-3 px-2 flex justify-evenly">
      <a
        :href="link == 'home' ? '/' : '/' + link"
        v-for="link in links"
        :key="link"
        class="hover:text-slate-900 underline"
        >{{ link }}</a
      >
    </nav>

    <div class="font-normal py-2 px-4 bg-white m-2 rounded-md">
      <RouterView />
    </div>

    <div class="absolute bottom-2 left-[30%] font-light text-sm">
      Copyright Noah &copy; <span v-current-year></span>. This is here to make you feel intimidated
      and to look cool in front of my friends. Hi Zemi!
    </div>
  </main>
</template>
