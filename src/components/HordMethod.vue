<template>
	<div class="componentFunction">
		<h3 class="green">Метод Хорд</h3>
		Значение: {{ hordResult }}
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
const hordResult = ref(0);

watchEffect(() => {
	if (isNaN(props.numberA) && isNaN(props.numberB) && isNaN(props.eps)) {
		return;
	}
	if (props.eps <= 0) {
		return;
	}
	hordResult.value = hordMethod(props.numberA, props.numberB, props.eps);
});

function hordMethod (a: number, b: number, eps: number) {
	count.value = 1;
	while (Math.abs(fun(b)) > eps) {
		a = b - (((b - a) * fun(b)) / (fun(b) - fun(a)));
		b = a - (((a - b) * fun(a)) / (fun(a) - fun(b)));
		console.log(a, b);
		count.value++;
	}
	return b;
}
</script>
