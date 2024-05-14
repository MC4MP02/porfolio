<script>
import Header from './components/HeaderComponent.vue'
import Presentation from './components/PresentationComponent.vue'
import Projects from './components/ProjectsComponent.vue'
import Experiencia from './components/ExperienciaComponent.vue'

export default {
  components: {
    AppHeader: Header,
    Presentation,
    Experiencia,
    Projects
  },
  data() {
    return {
    }
  },
  created() {
    document.title = 'Porfolio de Marc Campo'
  },
}
</script>

<template>
  <main class="w-full bg-none m-0 p-0 flex flex-wrap flex-col justify-around overflow-auto px-4">
    <div id="header" class="z-999 w-full box-border top-0 fixed">
      <AppHeader />
    </div>
    <div id="inicio"
      class="flex flex-col justify-start box-border w-full mx-auto align-start py-16 md:py-28 lg:max-w-4xl md:max-w-2xl container">
      <Presentation />
    </div>
    <div id="experiencia"
      class="flex flex-col items-center justify-start gap-3 w-full mx-auto mt-[8%] lg:max-w-4xl md:max-w-2xl scroll-m-20 container">
      <Experiencia />
    </div>
    <div id="proyectos"
      class="flex flex-col items-center justify-center gap-3 w-full mx-auto mt-[8%] container lg:max-w-4xl md:max-w-2xl scroll-m-20">
      <Projects />
    </div>
  </main>
</template>

<style scoped></style>
