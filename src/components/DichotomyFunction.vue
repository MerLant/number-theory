<template>
	<div class="componentFunction">
		<h3 class="green">Функция дихотомии</h3>
		Значение: {{ result }}
		<br />
		Циклов: {{ count }}
	</div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { fun } from '@/func';

const props = defineProps<{
	numberA: number;
	numberB: number;
}>();

const count = ref(0);

const result = ref(0);

watchEffect(() => {
	if (props.numberA !== undefined && props.numberB !== undefined) {
		result.value = dichotomy(props.numberA, props.numberB);
	}
});

function dichotomy(a: number, b: number) {
	count.value = 0;

	while (Math.abs(b - a) > 0.000001) {
		let c = (a + b) / 2;
		if (fun(b) * fun(c) <= 0) {
			a = c;
		} else {
			b = c;
		}
		count.value++;
	}
	return (a + b) / 2;
}
</script>
