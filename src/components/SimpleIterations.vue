<template>
	<div class="componentFunction">
		<h3 class="green">Метод простых итераций</h3>
		Значение: {{ iterationsResult }}
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
const iterationsResult = ref(0);

watchEffect(() => {
	if (isNaN(props.numberA) && isNaN(props.numberB) && isNaN(props.eps)) {
		return;
	}
	if (props.eps <= 0) {
		return;
	}
	iterationsResult.value = simpleIterations(props.numberA, props.numberB, props.eps);
});

function simpleIterations(a: number, b: number, eps: number) {
	let x0 = (a + b) / 2;
	let L = -x0;
	let xNxt = iterFun(x0, L);
	count.value = 1;

	function iterFun(x: number, L: number) {
		return x + L * fun(x);
	}

	while (Math.abs(xNxt - x0) > eps) {
		x0 = xNxt;
		xNxt = iterFun(x0, L);
		count.value++;
	}
	return xNxt;
}
</script>
