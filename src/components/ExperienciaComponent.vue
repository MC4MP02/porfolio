<script></script>

<template>
    <h1 class="flex mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white w-full items-center">
        <svg class="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
        </svg>
        Experiencia
    </h1>
    <div class="flex flex-row">
        <ol class="relative mt-16">
            <li class="">
                <div
                    class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                    <div class="relative pb-12 md:col-span-2">
                        <div class="sticky top-0">
                            <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">•</span>
                            <h3 class="text-xl font-bold text-yellow-400">Codificador</h3>
                            <h4 class="font-semibold text-xl text-gray-600 dark:text-white">Swapp</h4>
                            <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Ocutbre 2022</time>
                        </div>
                    </div>
                    <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                        Experiencia en desarrollo web y mantenimiento de bases de datos.
                        Participación en la codificación y modelado de páginas web.
                        Trabajo colaborativo en la implementación de soluciones tecnológicas.
                        <a href="https://swapp.es" role="link"
                            class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700">
                            Saber más
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 6l6 6l-6 6"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </li>
        </ol>
    </div>


</template>

<style scoped>
h1 {
    color: white;
    font-size: 3.5vh;
}
</style>