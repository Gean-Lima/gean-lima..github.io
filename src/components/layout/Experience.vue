<template>
    <section id="experience">
        <h2>Experiencia</h2>
        <p>Empresas que já trabalhei</p>

        <div id="experienceItems">
            <section class="experience-item">
                <h3>ITSApp</h3>
                <a href="https://itsapp.com.br/" target="_blank">itsapp.com.br/</a>

                <div>
                    <p>De 2022 à 2023</p>
                    <p>Freelancer - Desenvolvedor web</p>
                    <p>PHP, Laravel, Vue.js, Bootstrap</p>
                </div>
            </section>
        </div>
    </section>
</template>

<style lang="scss">
@import "@/assets/sass/medias";
@import "@/assets/sass/colors";
@import "@/assets/sass/animations";

#experience {
    padding: 82px 10px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(/images/matrix.jpg);
    // background-attachment: fixed;
    background-position: center;
    background-size: cover;

    h2 {
        font-family: 'matrix';
        font-size: 3rem;
        color: white;
        text-align: center;
        margin: 0 0 10px 0;
        animation: 2s rightBottomFontMatrix infinite steps(3, end);
    }

    & > p {
        font-size: .8rem;
        text-align: center;
        color: white;
        margin: 0 0 42px 0;
    }

    #experienceItems {
        max-width: $media-lg;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .experience-item {
            padding: 16px;
            background: #141414;
            box-shadow: 3px 3px 0 $color1;
            color: white;

            h3 {
                margin: 0 0 2px 0;
            }

            a {
                font-size: .6rem;
                color: white;
            }

            p {
                margin: 0 0 0 0;
                font-size: .8rem;
            }

            & > div {
                padding-top: 16px;
            }
        }
    }
}
</style>