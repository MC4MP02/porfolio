<script>
import Header from './components/HeaderComponent.vue'
import Presentation from './components/PresentationComponent.vue'
import Projects from './components/ProjectsComponent.vue'
//import Experiencia from './components/ExperienciaComponent.vue'

export default {
  components: {
    AppHeader: Header,
    Presentation,
    //Experiencia,
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
  <main class="w-full bg-none m-0 p-0 flex flex-wrap flex-col justify-around overflow-auto">
    <div id="header" class="z-999 w-full box-border top-0 fixed">
      <AppHeader />
    </div>
    <div id="inicio" class="flex flex-col justify-start w-1/2 box-border mr-auto ml-auto mt-[8%] align-start">
      <Presentation />
    </div>
    <div id="proyectos" class="flex items-center justify-center">
      <Projects />
    </div>
    <!-- <div id="experiencia">
      <Experiencia />
    </div> -->
  </main>
</template>

<style scoped>
#proyectos {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  align-items: left;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8%;
}

#experiencia {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8%;
}
</style>
