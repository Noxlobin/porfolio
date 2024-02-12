<script setup lang="ts">
let data: any
let newData: object
const request = async () => {
  const response = await fetch('https://api.ipify.org/?format=json')
  const json = await response.json()
  return json
}

data = request()
data.then((val) => {
  newData = val
})
</script>

<template>
  <main>
    <h1 class="text-2xl text-red-900 font-bold">Congratulations!</h1>
    <p>
      You just got your IP leaked. Its <span class="underline">{{ newData.ip }}</span
      >.
    </p>
  </main>
</template>
