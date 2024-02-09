<script setup lang="ts">
import DichotomyFunction from '@/components/DichotomyFunction.vue';
import GoldenRatioFunction from '@/components/GoldenRatioFunction.vue';
import { ref } from 'vue';
import MiddlePoint from '@/components/MiddlePoint.vue';

const numberA = ref(0);
const numberB = ref(0);
</script>

<template>
	<div class="functionView">
		Путник, короче тебе сюды надо свои значения засунуть. Я не знаю зачем, но там будут какие
		формулы или функции, произайдёт какая-то магия и там должно (но не факт), что расчитаться

		<div class="form">
			<label for="a">А</label>
			<input id="a" type="number" v-model="numberA" />

			<label for="b">B</label>
			<input id="b" type="number" v-model="numberB" />
		</div>

		<div class="function">
			<DichotomyFunction :number-a="numberA" :number-b="numberB" />
			<GoldenRatioFunction :number-a="numberA" :number-b="numberB" />
			<MiddlePoint :number-a="numberA" :number-b="numberB" />
		</div>
	</div>
</template>

<style scoped>
input {
	width: 50px;
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
