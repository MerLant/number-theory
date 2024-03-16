<template>
	<div class="componentFunction">
		<h3 class="green">Метод ньютона</h3>
		Значение: {{ newtonResult }}
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
const newtonResult = ref(0);

watchEffect(() => {
	if (isNaN(props.numberA) && isNaN(props.numberB) && isNaN(props.eps)) {
		return;
	}
	if (props.eps <= 0) {
		return;
	}
	newtonResult.value = newtonRatio(props.numberA, props.numberB, props.eps);
});

function newtonRatio(a: number, b: number, eps: number) {
	count.value = 1;
	let x = (a + b) / 2;
	let c = x - (fun(x) / fun.derivative(x));

	while (Math.abs(c - x) > eps) {
		x = c;
		c = x - (fun(x) / fun.derivative(x));
		count.value++;
	}
	return c;
}
</script>
