<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { supabase } from '../lib/supabase'

const blogs: Ref<any[] | null> = ref([])

async function getCountries() {
  const { data } = await supabase.from('blogs').select()
  blogs.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <main>
    <div v-for="blog in blogs" :key="blog.id">
      <article class="bg-gray-200 p-3 rounded m-3">
        <h2 class="text-lg font-semibold">{{ blog.name }}</h2>
        <p>{{ blog.body }}</p>
      </article>
    </div>
  </main>
</template>
