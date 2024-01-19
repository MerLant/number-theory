<template>
  <div class="componentFunction">
    <h3 class="green">Функция золотого сечения</h3>
    {{ numberA + numberB }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  numberA: number
  numberB: number
}>()
</script>
