<template>
	<div class="componentFunction">
		<h3 class="green">Функция золотого сечения</h3>
		Значение: {{ goldenResult }}
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

const phi = (1 + Math.sqrt(5)) / 2;
const count = ref(0);

const goldenResult = ref(0);

watchEffect(() => {
	if (isNaN(props.numberA) && isNaN(props.numberB) && isNaN(props.eps)) {
		return;
	}
	if (props.eps <= 0) {
		return;
	}
	goldenResult.value = goldenRatio(props.numberA, props.numberB, props.eps);
});

function goldenRatio(a: number, b: number, eps: number) {
	count.value = 0;
	while (Math.abs(b - a) > eps) {
		let x1 = b - (b - a) / phi;
		let x2 = a + (b - a) / phi;

		if (fun(x1) >= fun(x2)) {
			a = x1;
		} else {
			b = x2;
		}
		count.value++;
	}

	return (b + a) / 2;
}
</script>
