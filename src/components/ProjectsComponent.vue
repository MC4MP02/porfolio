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
    <h1 class="flex mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white w-full items-center">
        <svg class="size-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
        </svg>
        Proyectos
    </h1>
    <div id="projects-grid" class="text-[#acb1ba] flex flex-col gap-y-16">
        <div v-for="project in projects" :key="project.title"
            class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
            @mouseover="enlargeProject" @mouseout="resetProjectSize">
            <div id="foto-project" class="w-full md:w-1/2">
                <img :src="project.img" alt="project image" class="rounded-md h-45 w-full" />
            </div>
            <div id="info-project" class="w-full md:w-1/2 md:max-w-lg">
                <h2 class="text-2xl font-bold text-gray-100">{{ project.title }}</h2>
                <p class="mt-5">{{ project.description }}</p>
                <div class="mt-6">
                    <a :href="project.url" target="_blank"
                        class="inline-flex p-1.5 hover:bg-gray-600 bg-gray-800 border border-gray-600 rounded-md w-auto text-base text-white items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" width="36px" height="36px"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
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
    </div>
</template>

<style scoped></style>