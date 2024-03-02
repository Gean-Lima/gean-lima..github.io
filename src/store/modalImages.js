import { defineStore } from "pinia";

export const useModalImagesStore = defineStore('modalImagesStore', {
    state: () => ({
        images: [],
        active: false,
    }),

    actions: {
        openModalWithImages(images) {
            this.images = images;
            this.active = true;
            document.body.style.overflow = 'hidden';
        },

        closeModalAndDeleteImages() {
            this.images = [];
            this.active = false;
            document.body.style.overflow = 'auto';
        }
    }
});