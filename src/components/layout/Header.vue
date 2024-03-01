<template>
    <header id="headerApp">
        <div>
            <div>
                <h1>Gean Lima</h1>
            </div>

            <div>
                <input type="checkbox" id="headerAppCheckMenu" />
                <nav id="headerAppMenu">
                    <ul>
                        <li>
                            <a href="/">
                                <i class='bx bxs-home'></i>
                                <span style="display: none;">Início</span>
                            </a>
                        </li>

                        <li>
                            <a href="#skills">Skills</a>
                        </li>

                        <li>
                            <a href="#experience">Experiência</a>
                        </li>

                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="headerAppEnd">
                <label for="headerAppCheckMenu">
                    <i class='bx bx-menu-alt-right'></i>
                </label>

                <a href="https://github.com/Gean-Lima" target="_blank">
                    <i class='bx bxl-github' ></i>
                    <span style="display: none;">Github</span>
                </a>

                <a href="https://www.linkedin.com/in/gean-lima-775b491a2/" target="_blank">
                    <i class='bx bxl-linkedin-square' ></i>
                    <span style="display: none;">Linkedin</span>
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

        label {
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
            gap: 1rem;
        }
        
        #headerAppMenu {
            display: none;
            position: fixed;
            top: 55px;
            left: 0;
            width: 100%;
            background-color: $bg;
            padding: 18px 0;

            ul {
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 18px;
                min-height: 100%;

                a {
                    font-size: 1rem;
                }

                @media screen and (min-width: $media-md) {
                    flex-direction: row;
                }
            }

            @media screen and (min-width: $media-md) {
                display: block;
                position: static;
                background-color: transparent;
            }
        }

        #headerAppCheckMenu {
            display: none;

            &:checked ~ #headerAppMenu {
                display: block;
            }
        }
    }
}
</style>
