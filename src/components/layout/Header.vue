<template>
    <header id="headerApp">
        <div>
            <div>
                <h1>Gean Lima</h1>
            </div>

            <div>
                <nav id="headerAppMenu">
                    <ul>
                        <li>
                            <a href="">
                                <i class='bx bxs-home'></i>
                                <span style="display: none;">Início</span>
                            </a>
                        </li>

                        <li>
                            <a href="#stacks">Stacks</a>
                        </li>

                        <li>
                            <a href="">Experiência</a>
                        </li>

                        <li>
                            <a href="">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="headerAppEnd">
                <button>
                    <i class='bx bx-menu-alt-right'></i>
                </button>

                <a href="https://github.com/Gean-Lima" target="_blank">
                    <i class='bx bxl-github' ></i>
                </a>

                <a href="https://www.linkedin.com/in/gean-lima-775b491a2/" target="_blank">
                    <i class='bx bxl-linkedin-square' ></i>
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@import "@/assets/sass/medias";
@import "@/assets/sass/colors";

#headerApp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    z-index: 999;
    background: linear-gradient(to bottom, rgba(0,0,0,.3), transparent);

    & > div {
        height: 55px;
        display: flex;
        padding: 0 1rem;
        align-items: center;
        justify-content: space-between;
        max-width: 960px;
        margin: 0 auto;

        h1 {
            margin: 0;
            font-family: 'matrix';
            font-size: 2rem;
            color: white;
        }

        button {
            font-size: 1.3rem;
            background: transparent;
            color: white;

            @media screen and (min-width: $media-md) {
                display: none;
            }
        }
        
        a {
            font-size: 1.3rem;
            color: white;
        }

        #headerAppEnd {
            display: flex;
            justify-content: center;
            gap: .8rem;
        }
        
        #headerAppMenu {
            display: none;

            @media screen and (min-width: $media-md) {
                display: block;
            }

            ul {
                padding: 0;
                margin: 0;
                display: flex;
                gap: 10px;

                a {
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>
