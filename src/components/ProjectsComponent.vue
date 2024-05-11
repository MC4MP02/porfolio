<script>
export default {
    name: 'ProjectsPage',
    data() {
        return {
            projects: [
                {
                    title: 'Arkanoid JS',
                    description: 'Implementación de Arkanoid en JavaScript con sistema de puntuación. Desarrollé una versión del clásico juego Arkanoid utilizando JavaScript. El juego cuenta con un sistema de puntuación que registra los puntos obtenidos por el jugador mientras destruye ladrillos y avanza en los niveles',
                    img: 'img/arkanoid.png',
                    url: 'https://github.com/MC4MP02/arkanoid-game',
                },
                {
                    title: 'Tetris JS',
                    description: 'Proyecto de Tetris en JavaScript con sistema de puntuación. Desarrollé una versión del juego Tetris utilizando JavaScript. El juego incluye un sistema de puntuación que registra los puntos obtenidos por el jugador mientras juega',
                    img: 'img/tetris.png',
                    url: 'https://github.com/MC4MP02/tetrisJS',
                },
                {
                    title: 'Calculator JS',
                    description: 'Proyecto de calculadora en JavaScript que permite realizar operaciones matemáticas básicas a través de la consola del navegador web',
                    img: 'img/calculator.png',
                    url: 'https://github.com/MC4MP02/calculatorJS',
                },
                {
                    title: 'Chess C++',
                    description: 'Proyecto en C++: Implementación de juego de ajedrez con interfaz gráfica. Permite jugar partidas de jugador contra jugador con funciones básicas del juego',
                    img: 'img/chess.png',
                    url: 'https://github.com/MC4MP02/Chess_C',
                }],
        }
    },
    methods: {
        enlargeProject(event) {
            let element = event.target;
            while (element && !element.classList.contains('project-grid')) {
                element = element.parentElement;
            }
            if (element) {
                element.classList.add('enlarged');
            }
        },
        resetProjectSize(event) {
            let element = event.target;
            while (element && !element.classList.contains('project-grid')) {
                element = element.parentElement;
            }
            if (element) {
                element.classList.remove('enlarged');
            }
        }
    }
}
</script>

<template>
    <h1 class="flex items-start mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">Proyectos</h1>
    <div id="projects-grid" class="text-[#acb1ba] flex flex-col gap-y-16">
        <div v-for="project in projects" :key="project.title"
            class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
            @mouseover="enlargeProject" @mouseout="resetProjectSize">
            <div id="foto-project" class="w-full md:w-1/2">
                <img :src="project.img" alt="project image" />
            </div>
            <div id="info-project" class="w-full md:w-1/2 md:max-w-lg">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <a :href="project.url" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                        </path>
                    </svg>
                    Code
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-grid {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    transition: transform 0.3s ease-out;
}

.enlarged {
    transform: scale(1.03);
}

.project-grid>div>img {
    grid-area: img;
    margin: auto;
    width: 100%;
    height: 100%;
    border: 0.22vh solid #555;
    box-shadow: 0.87vh 0.87vh 1vh rgba(0, 0, 0, 0.3);
    border-radius: 1vh;

}

.project-grid>div>h2 {
    grid-area: h2;
    color: #f3f4f6;
    margin: auto;
    font-size: 2.8vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 2vh;
    padding-right: 2vh;
}

.project-grid>div>p {
    grid-area: p;
    margin: auto;
    font-size: 1.75vh;
    padding-top: 1vh;
    padding-bottom: 2.5vh;
    padding-left: 2vh;
    padding-right: 2vh;
}

.project-grid>div>a {
    display: flex;
    width: 15%;
    align-items: center;
    justify-content: center;
    grid-area: a;
    text-decoration: none;
    color: #fef08a;
    font-size: 2.3vh;
    font-size: 100%;
    border: 0.22vh solid #555;
    border-radius: 0.62vw;
    padding: 1.5%;
    margin-left: 3%;
    margin-top: 3%;
}

#info-projects>a>svg {
    width: 15%;
}

@media (max-width: 1000px) {
    .project-grid {
        flex-direction: column;
    }

    #foto-project>img {
        width: 130%;
    }

    #info-project {
        width: 80%;
        margin-top: 0;
    }
}

@media (max-width: 550px) {
    #info-project>p {
        display: none;
    }

    #projects-grid {}
}
</style>