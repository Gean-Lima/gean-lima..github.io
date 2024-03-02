<script setup>
import { useModalImagesStore } from '@/store/modalImages';
import { ref } from 'vue';

const modalStore = useModalImagesStore();

const props = defineProps({
    images: {
        type: Array,
        required: true
    }
});

const containerImages = ref();

function prevImage() {
    let offsetWidthContainer = containerImages.value.offsetWidth;

    if (containerImages.value.scrollLeft == 0) {
        containerImages.value.scrollLeft = containerImages.value.scrollWidth;
        return;
    }

    containerImages.value.scrollLeft -= offsetWidthContainer;
}

function nextImage() {
    let offsetWidthContainer = containerImages.value.offsetWidth;

    if (containerImages.value.scrollLeft == containerImages.value.clientWidth) {
        containerImages.value.scrollLeft = 0;
        return;
    }

    containerImages.value.scrollLeft += offsetWidthContainer;
}

function openModalImages() {
    modalStore.openModalWithImages(props.images);
}
</script>

<template>
    <div class="slide-images">
        <button class="slide-images-left" @click="prevImage">
            <i class='bx bxs-chevron-left-circle'></i>
        </button>

        <div class="slide-images-container" ref="containerImages">
            <div v-for="image, index in images"
                :key="index"
                class="slide-images-item"
                @click="openModalImages">
                <img :src="image.src" :alt="image.alt" />
            </div>
        </div>

        <button class="slide-images-right" @click="nextImage">
            <i class='bx bxs-chevron-right-circle'></i>
        </button>
    </div>
</template>

<style lang="scss">
@import '@/assets/sass/colors';

.slide-images {
    position: relative;

    button {
        position: absolute;
        top: calc(50% - 0.9rem);
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
        color: $color1;
        background: transparent;
        opacity: 0.3;
        transition: all .2s linear;

        &:hover {
            opacity: 1;
        }
    }

    .slide-images-right {
        right: 0;
    }

    .slide-images-container {
        height: 100%;
        display: flex;
        text-align: center;
        overflow: hidden;
        scroll-behavior: smooth;
    }

    .slide-images-item {
        height: 100%;
        width: 100%;
        background: white;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            margin: 0;
        }
    }
}
</style>