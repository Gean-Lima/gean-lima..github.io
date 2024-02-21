<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    index: {
        type: Number,
        required: true
    }
});

const emits = defineEmits(['finished']);

const letters = ref([]);
const packOfLetters = `abcdefghijklmnopqrstuxwyzABCDEFGHIJKLMNOPQRSTUXWYZ0123456789,.;/|{}[]~´'"°?ºª§=+-*&¨%$#@!()'`;
const matrixColumn = ref();

async function addCharacter(max) {
    if (letters.value.length >= max) {
        await Promise.all(matrixColumn.value.getAnimations({ subtree: true }).map((animation) => animation.finished))
            .then(() => emits('finished', props.index));
        return;
    }
    let character = packOfLetters.split('')[Math.round(Math.random() * packOfLetters.length - 1)];
    letters.value.push(character);

    setTimeout(() => addCharacter(max), 50);
}

onMounted(() => {
    let max = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    addCharacter(max);
});
</script>

<template>
    <div class="matrixLettersColumn" ref="matrixColumn">
        <span v-for="letter, index in letters" :key="index">{{ letter }}</span>
    </div>
</template>