<script setup>
import { onMounted, ref } from 'vue';
import MatrixLettersColumn from './MatrixLettersColumn.vue';

const props = defineProps({
    delay: {
        type: Number,
        default: 0
    }
});

const lettersColumns = ref([]);

async function generateColumns() {
    if (lettersColumns.value.length == 0) {
        for(let x = 0; x < 10; x++) {
            lettersColumns.value.push({
                top: Math.floor(Math.random() * ((document.body.offsetHeight / 2) - 1 + 1) + 1),
                left: Math.floor(Math.random() * (document.body.offsetWidth - 1 + 1) + 1),
                finished: false
            });
        }
    }

    if (lettersColumns.value.every((column) => column.finished)) lettersColumns.value = [];
    
    setTimeout(generateColumns, 500);
}

function finishedColumn(index) {
    lettersColumns.value[index].finished = true;
}

onMounted(() => {
    setTimeout(generateColumns, props.delay);
});
</script>

<template>
    <div>
        <MatrixLettersColumn v-for="column, index in lettersColumns" :key="index"
            :style="`top: ${column.top}px; left: ${column.left}px`"
            :index="index" @finished="finishedColumn" />
    </div>
</template>