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
	eps: number;
}>();

const count = ref(0);

const result = ref(0);

watchEffect(() => {
	if (isNaN(props.numberA) && isNaN(props.numberB) && isNaN(props.eps)) {
		return;
	}
	if (props.eps <= 0) {
		return;
	}
	result.value = dichotomy(props.numberA, props.numberB, props.eps);
});

function dichotomy(a: number, b: number, eps: number) {
	count.value = 0;

	while (Math.abs(b - a) > eps) {
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
