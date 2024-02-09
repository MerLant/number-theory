<script setup lang="ts">
import DichotomyFunction from '@/components/DichotomyFunction.vue';
import GoldenRatioFunction from '@/components/GoldenRatioFunction.vue';
import { ref } from 'vue';
import MiddlePoint from '@/components/MiddlePoint.vue';

const numberA = ref(0);
const numberB = ref(1);
const eps = ref(0.00001)
</script>

<template>
	<div class="functionView">
		Путник, короче тебе сюды надо свои значения засунуть. Я не знаю зачем, но там будут какие
		формулы или функции, произойдёт какая-то магия и там должно (но не факт), что рассчитаться

		<div class="form">
			<label for="a">А</label>
			<input id="a" type="number" v-model="numberA" />

			<label for="b">B</label>
			<input id="b" type="number" v-model="numberB" />

			<label for="eps">Погрешность</label>
			<input id="eps" type="number" v-model="eps" />
		</div>

		<div class="function">
			<DichotomyFunction :number-a="numberA" :number-b="numberB" :eps="eps"/>
			<GoldenRatioFunction :number-a="numberA" :number-b="numberB" :eps="eps"/>
			<MiddlePoint :number-a="numberA" :number-b="numberB" :eps="eps"/>
		</div>
	</div>
</template>

<style scoped>
input {
	width: 120px;
	text-align: center;
}

.functionView {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.function {
	display: flex;
	flex-direction: row;
	gap: 30px;
}

.form {
	border: solid var(--color-border);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	padding: 1rem;
}
</style>
