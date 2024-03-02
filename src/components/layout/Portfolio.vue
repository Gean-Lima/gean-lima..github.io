<script setup>
import SlideImages from '@/components/slideImages/SlideImages.vue';

</script>

<template>
    <section id="portfolio">
        <h2>Portfolio</h2>
        <p>Apenas alguns exemplos simples<br />para mostrar meu trabalho</p>

        <div id="portfolioContainer">
            <div class="portfolio-item">
                <SlideImages :images="[
                    { src: '/images/projetos/meusprodutos/meusprodutos_mokups.png', alt: 'Site meusprodutos dispositivos' },
                    { src: '/images/projetos/meusprodutos/meusprodutos.png', alt: 'Site meusprodutos design' }
                ]" style="height: 160px;" />

                <div class="portfolio-item-content">
                    <h3>Meus Produtos</h3>
                    <a href="https://develop.sellsmart.site/" target="_blank">develop.sellsmart.site</a>
                    <p>Um saas, cada cliente tem seu catálogo online.</p>

                    <div class="badges">
                        <span>PHP</span>
                        <span>Laravel</span>
                        <span>Livewire</span>
                        <span>Alpine.js</span>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <SlideImages :images="[
                    { src: '/images/projetos/advocate/advocate_mokups.png', alt: 'Site advocate dispositivos' },
                    { src: '/images/projetos/advocate/advocate.png', alt: 'Site advocate design' }
                ]" style="height: 160px;" />

                <div class="portfolio-item-content">
                    <h3>Advocate</h3>
                    <a href="https://advocate.sellsmart.site/" target="_blank">advocate.sellsmart.site</a>
                    <p>Um site institucional feito para advogados.</p>

                    <div class="badges">
                        <span>Wordpress</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "@/assets/sass/colors";
@import "@/assets/sass/medias";

#portfolio {
    padding: 82px 0;
    background: $bg;

    h2, & > p {
        text-align: center;
    }

    h2 {
        font-family: 'matrix';
        font-size: 3rem;
        color: white;
        margin: 0 0 10px 0;
        animation: 2s rightBottomFontMatrix infinite steps(3, end);
    }

    & > p {
        font-size: .8rem;
        color: white;
        margin: 0 0 42px 0;
    }

    #portfolioContainer {
        margin: 0 auto;
        max-width: $media-lg;
        padding: 0 16px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .portfolio-item {
        max-width: 300px;
        box-shadow: 3px 3px 0 $color1;

        .portfolio-item-content {
            padding: 10px;
            background-color: $bg-secondary;
            color: white;

            h3, p {
                margin: 0 0 0 0;
            }

            p {
                font-size: .8rem;
                margin-top: 8px;
                margin-bottom: 16px;
            }

            a {
                font-size: .6rem;
                color: white;
            }

            .badges {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;

                span {
                    font-size: .7rem;
                    font-weight: bold;
                    background: $color1;
                    padding: 2px 6px;
                }
            }
        }
    }
}
</style>