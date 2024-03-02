<script setup>
import { useModalImagesStore } from '@/store/modalImages';
import { ref } from 'vue';

const modalStore = useModalImagesStore();

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
</script>

<template>
    <div id="modal-images" v-show="modalStore.active">
        <button id="modal-images-close"
            @click="modalStore.closeModalAndDeleteImages">
            <i class='bx bx-x-circle' ></i>
        </button>

        <button id="modal-images-prev" class="modal-images-controls"
            @click="prevImage"></button>
        <button id="modal-images-next" class="modal-images-controls"
            @click="nextImage"></button>

        <div id="modal-images-contaier" ref="containerImages">
            <div v-for="image, index in modalStore.images" :key="index"
                class="modal-images-item">
                <img :src="image.src" :alt="image.alt" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">

#modal-images {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 21, 12, 0.8);
    backdrop-filter: blur(2px);
    z-index: 1000;

    #modal-images-close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.6rem;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: transparent;
        z-index: 10;
    }

    .modal-images-controls {
        position: absolute;
        top: 0;
        z-index: 6;
        width: 12%;
        height: 100%;
        background: transparent;
    }

    #modal-images-next {
        right: 0;

        &:hover {
            background: linear-gradient(to left, rgba(0,0,0,.5), transparent);
        }
    }

    #modal-images-prev {
        left: 0;

        &:hover {
            background: linear-gradient(to right, rgba(0,0,0,.5), transparent);
        }
    }

    #modal-images-contaier {
        height: 100%;
        width: 100%;
        margin: 0 auto;
        padding: 12px;
        display: flex;
        align-items: center;
        overflow: hidden;

        .modal-images-item {
            height: 100%;
            width: 100%;
            max-height: 85vh;
            flex-shrink: 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>