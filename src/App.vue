<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h3 class="green">Эти ваши функции фигункции</h3>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
h3 {
  text-align: center;
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
