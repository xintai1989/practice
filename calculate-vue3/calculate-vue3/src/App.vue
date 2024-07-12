<script setup>
import { computed} from 'vue'
import { ref } from 'vue'
const add = computed(()=>{
  const num1=ref()
  const num2=ref()
  return num1.value+num2.value
})
</script>

<template>
  <header>
<input type="number" v-model="num1">
+
<input type="number" v-model="num2">
=
<span>{{ add }}</span>
  </header>

  <main>

  </main>
</template>

<style scoped>

</style>
