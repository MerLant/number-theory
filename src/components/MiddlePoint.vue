<template>
	<div class="componentFunction">
		<h3 class="green">Функция средней точки</h3>
		Значение: {{ middlePointResult }}
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
	eps: number
}>();

const count = ref(0);
const middlePointResult = ref(0);

watchEffect(() => {
	if (isNaN(props.numberA) && isNaN(props.numberB) && isNaN(props.eps)) {
		return;
	}
	if (props.eps <= 0) {
		return;
	}
	middlePointResult.value = middlePoint(fun, props.numberA, props.numberB, props.eps);
});

function derivative(x: number) {
	return Math.pow(x, (x - 1));
}

function middlePoint(fun: (num: number) => number, a: number, b: number, esp: number) {
	count.value = 0;
	let c = (a + b) / 2;

	do {
		if (derivative(c) <= 0) {
			a = c;
		} else {
			b = c;
		}
		c = (a + b) / 2;
		count.value++;
	} while (Math.abs(b - a) > esp);

	return c;
}
</script>
