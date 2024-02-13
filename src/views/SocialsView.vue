<script setup lang="ts">
import BadgeItem from '@/components/BadgeItem.vue'

const headingClasses = 'text-2xl font-semibold my-1'
</script>

<template>
  <main class="flex justify-center flex-col h-[30vh] items-center">
    <div class="text-center">
      <h2 :class="headingClasses">My Dev Socials</h2>
      <div class="flex space-x-3 my-5">
        <a href="https://github.com/Noxlobin">
          <BadgeItem
            source="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=ffffff"
            alt="Github"
          ></BadgeItem>
        </a>

        <a href="https://dev.to/noxlobin">
          <BadgeItem
            source="https://img.shields.io/badge/Dev.to-333333?style=for-the-badge&logo=dev.to&logoColor=ffffff"
            alt="Dev"
          />
        </a>
        <a href="https://noahere.itch.io/">
          <BadgeItem
            source="https://img.shields.io/badge/itch.io-red?style=for-the-badge&logo=itch.io&logoColor=ffffff"
            alt="Itch.io"
          />
        </a>
      </div>
    </div>
    <div class="text-center">
      <h2 :class="headingClasses">My Cool Socials</h2>
      <div class="flex space-x-3 my-5">
        <a href="https://twitter.com/Hash1616929">
          <BadgeItem
            source="https://img.shields.io/badge/twitter-black?style=for-the-badge&logo=x&logoColor=ffffff"
            alt="Twitter"
          ></BadgeItem>
        </a>

        <a href="https://open.spotify.com/user/315kuj4rj4qyi7n5ugpvrfdsjoia">
          <BadgeItem
            source="https://img.shields.io/badge/spitify-47d147?style=for-the-badge&logo=spotify&logoColor=ffffff"
            alt="spotify"
          />
        </a>
        <a href="https://discord.gg/pXF8tbha">
          <BadgeItem
            source="https://img.shields.io/badge/discord-blue?style=for-the-badge&logo=discord&logoColor=ffffff"
            alt="discord"
          />
        </a>
        <a href="https://mstdn.plus/@noahlol">
          <BadgeItem
            source="https://img.shields.io/badge/fediverse-purple?style=for-the-badge&logo=mastodon&logoColor=ffffff"
            alt="fediverse"
          />
        </a>
      </div>
    </div>
  </main>
</template>
