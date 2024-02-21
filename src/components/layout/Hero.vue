<script setup>
import Matrix from '@/components/matrix/Matrix.vue';
</script>

<template>
    <section id="heroApp">
        <Matrix />
        <div id="heroAppLB"></div>

        <div id="heroAppContent">
            <div>
                <h2>Full Stack<br />Developer</h2>
                <p>
                    <span>"</span>Cedo ou tarde você vai aprender, assim como eu aprendi, que existe uma diferença entre conhecer o
                    caminho e trilhar o caminho.<span>"</span>
                </p>
            </div>
            <div id="heroAppOldPC">
                <img src="/images/old-pc.png" draggable="false" />
                <video muted autoplay loop src="/videos/tv.mp4"></video>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "@/assets/sass/medias";
@import '@/assets/sass/animations';
@import '@/assets/sass/colors';

section#heroApp {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;

    #heroAppContent {
        width: 100%;
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;

        @media screen and (min-width: $media-lg) {
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }
    }

    #heroAppLB {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(32, 72, 41, 0.1);
        z-index: 1;
    }

    #heroAppOldPC {
        position: relative;
        height: 300px;
        width: 300px;

        &::before {
            content: "";
            position: absolute;
            top: -25%;
            left: -25%;
            width: 150%;
            height: 150%;
            background: radial-gradient($color1 0, transparent 65%);
        }
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        z-index: 20;
    }

    video {
        position: absolute;
        top: 24px;
        left: 60px;
        width: 60%;
        z-index: 10;
    }

    h2 {
        margin: 0;
        font-family: 'matrix';
        color: white;
        transition: none;
        animation: 2s rightBottomFontMatrix infinite steps(3, end);
        z-index: 30;
        text-align: center;
        font-size: 2.5rem;
    }

    p {
        color: white;
        max-width: 300px;
        text-align: center;
        font-size: .8rem;
    }

    @media screen and (min-width: $media-lg) {
        h2 {
            font-size: 3rem;
        }

        p {
            font-size: normal;
        }

        h2, p {
            text-align: left;
        }
    }
}
</style>