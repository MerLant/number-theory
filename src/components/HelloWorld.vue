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
}>();

const phi = (1 + Math.sqrt(5)) / 2;
const count = ref(0);

const goldenResult = ref(0);

watchEffect(() => {
	if (props.numberA !== undefined && props.numberB !== undefined) {
		goldenResult.value = middlePoint(props.numberA, props.numberB);
	}
});

function middlePoint(a: number, b: number) {
	count.value = 0;
	while (Math.abs(b - a) > 0.00001) {
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
