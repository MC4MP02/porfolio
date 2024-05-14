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
  <main class="w-full bg-none m-0 p-0 flex flex-wrap flex-col justify-around overflow-auto px-4 relative">
    <div id="header" class="fixed top-0 left-0 right-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
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
