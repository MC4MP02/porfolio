<script>
</script>

<template>
  <header>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#">Contacto</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  top: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  justify-content: center;
  align-items: center;
}

nav {
  background-color: rgba(137, 139, 148, 0.63);
  border-radius: 999px;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 400px;
  margin-left: 0;
  margin-right: 0;
  padding-left: .625vw;
  padding-right: .625vw;
  margin-top: 2vh;
  justify-content: center;
  align-items: center;
}

nav a {
  padding: .417vw;
  text-decoration: none;
  color: #cfd1d8;
  font-size: 20px;
}

nav a:hover {
  color: #fef08a;
}
</style>
