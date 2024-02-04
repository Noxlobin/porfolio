<script lang="ts">
export default {
  props: {
    source: String,
    alt: String
  }
}
</script>

<template>
  <main>
    <img :src="source" :alt="alt" class="rounded" />
  </main>
</template>
