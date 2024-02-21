<template>
    <section id="stacks">
        <h2>Stacks</h2>

        <div class="stacks-items">
            <section class="stacks-item">
                <div>
                    <img src="/images/php.png" alt="PHP Logo" title="PHP Logo" width="500" height="500" loading="lazy" />
                </div>

                <div>
                    <h3>PHP</h3>
                    <p>Estudo desde de 2018, POO, composer, PSRs básico.</p>
                </div>
            </section>

            <section class="stacks-item">
                <div>
                    <img src="/images/html.png" alt="HTML5 Logo" title="HTML5 Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>HTML</h3>
                    <p>Estudo desde de 2018, semântico básico.</p>
                </div>
            </section>

            <section class="stacks-item">
                <div>
                    <img src="/images/css.png" alt="CSS3 Logo" title="CSS3 Logo" width="500" height="500" loading="lazy" />
                </div>

                <div>
                    <h3>CSS</h3>
                    <p>Estudo desde de 2018</p>
                </div>
            </section>

            <section class="stacks-item">
                <div>
                    <img src="/images/javascript.png" alt="JavaScript Logo" title="JavaScript Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Javascript</h3>
                    <p>Estudo desde de 2018, node.js básico, express básico, bots com puppeteer.</p>
                </div>
            </section>

            <section class="stacks-item">
                <div>
                    <img src="/images/dart.png" alt="Dart Logo" title="Dart Logo" width="500" height="500" loading="lazy" />
                </div>

                <div>
                    <h3>Dart</h3>
                    <p>1 ano de estudo<br />sou bem iniciante.</p>
                </div>
            </section>
        </div>

        <h3>Framewokrs</h3>

        <div class="stacks-items frameworks">
            <section class="stacks-item framework">
                <div>
                    <img src="/images/laravel.png" alt="Laravel Logo" title="Laravel Logo" width="500" height="500" loading="lazy" />
                </div>

                <div>
                    <h3>Laravel</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/livewire.png" alt="Livewire Logo" title="Livewire Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Livewire</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/vuejs.png" alt="Vue.js Logo" title="Vue.js Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Vue.js</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/nuxt.png" alt="NUXT Logo" title="NUXT Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Nuxt</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/alpinejs.png" alt="Alpine.js Logo" title="Alpine.js Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Alpine.js</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/tailwindcss.png" alt="Tailwindcss Logo" title="Tailwindcss Logo" width="500" height="500" loading="lazy" />
                </div>

                <div>
                    <h3>Tailwindcss</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/bootstrap.png" alt="Bootstrap Logo" title="Bootstrap Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Bootstrap</h3>
                </div>
            </section>

            <section class="stacks-item framework">
                <div>
                    <img src="/images/flutter.png" alt="Flutter Logo" title="Flutter Logo" width="500" height="500"
                        loading="lazy" />
                </div>

                <div>
                    <h3>Flutter</h3>
                </div>
            </section>
        </div>
    </section>
</template>

<style lang="scss">
@import "@/assets/sass/medias";
@import "@/assets/sass/colors";
@import "@/assets/sass/animations";

#stacks {
    padding: 42px 0;
    background: $bg;

    h2,
    &>h3 {
        font-family: 'matrix';
        font-size: 3rem;
        color: white;
        text-align: center;
        margin: 0 0 12px 0;
        animation: 2s rightBottomFontMatrix infinite steps(3, end);
    }

    &>h3 {
        font-size: 2rem;
    }

    & div.stacks-items {
        width: 100%;
        max-width: $media-lg;
        margin: 10px auto;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 18px;

        &:has(.framework) {
            flex-direction: row;
            flex-wrap: wrap;
            max-width: $media-md;

            .stacks-item.framework {
                width: calc(50% - 18px) !important;

                h3 {
                    font-size: 1rem;
                }

                @media screen and (min-width: $media-md) {
                    width: min-content !important;                    
                }
            }

        }


        @media screen and (min-width: $media-md) {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
        }
    }

    .stacks-item {
        display: flex;
        gap: 18px;
        padding: 16px;
        background: #141414;
        box-shadow: 3px 3px 0 $color1;
        width: 100%;

        &.framework {
            width: min-content !important;
            flex-direction: column-reverse;
            place-items: center center;
        }

        @media screen and (min-width: $media-md) {
            width: calc(50% - 18px);
        }

        @media screen and (min-width: $media-lg) {
            width: 30%;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 5px;
            color: white;
        }

        p {
            font-size: .8rem;
            margin: 0;
            color: white;
        }

        img {
            height: 64px;
            width: 64px;
            object-fit: contain;
            object-position: center;
        }
    }
}
</style>