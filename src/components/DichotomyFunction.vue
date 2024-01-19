<template>
  <div class="componentFunction">
    <h3 class="green">Функция дихотимии</h3>
    {{ numberA * numberB }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  numberA: number
  numberB: number
}>()
</script>
