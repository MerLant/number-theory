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
}>();

const count = ref(0);
const middlePointResult = ref(0);

watchEffect(() => {
	if (props.numberA !== undefined && props.numberB !== undefined) {
		middlePointResult.value = middlePoint(fun, props.numberA, props.numberB, 0.00001);
	}
});

// function derivative(x: number) {
// 	return x * (x + 1); // Производная функции (x + 1)^2
// }

function derivative2(x: number, degree: number, addition?: boolean) {
	return addition
		? Math.pow(degree * x, degree - 1)
		: Math.pow(x, degree);
}


function middlePoint(fun: (num: number) => number, a: number, b: number, esp: number) {
	count.value = 0;
	let c = (a + b) / 2;

	do {
		if (derivative2(c, 3, true)) {
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
