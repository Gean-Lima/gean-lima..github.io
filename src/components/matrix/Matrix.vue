<script setup>
import { ref } from 'vue';
import MatrixGenerate from './MatrixGenerate.vue';

const elementMatrix = ref();
</script>

<template>
    <div class="matrix" ref="elementMatrix">
        <MatrixGenerate />
        <MatrixGenerate :delay="1000" />
        <MatrixGenerate :delay="2000" />
        <MatrixGenerate :delay="3000" />
        <MatrixGenerate :delay="4000" />
    </div>
</template>

<style lang="scss">
@import '@/assets/sass/colors';

.matrix {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .matrixLettersColumn {
        position: absolute;
        display: flex;
        gap: 10px;
        flex-direction: column;

        span {
            color: $color2;
            font-size: .6rem;

            // animation
            opacity: 0;
            animation: lettersMatrix 1s linear;
        }
    }
}

@keyframes lettersMatrix {
    from {
        opacity: 1;
        text-shadow: 0 0 3px $color4;
        transform: scale(1.8);
    }
    to {
        opacity: 0;
        text-shadow: 0 0 0 $color4;
        transform: scale(1);
    }
}
</style>