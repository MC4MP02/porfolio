<script></script>

<template>
    <div id="foto">
        <img id="foto-marc" src="/public/img/fotoMarc.jpg" alt="marc foto" />
        <a href="https://www.linkedin.com/in/marc-campo-363522264/" target="_blank">
            <p>Disponible para trabajar</p>
        </a>
    </div>

    <h1>Marc <span>Campo</span></h1>

    <h2 class="text-9xl pl-2.5">
        Estudiante universitario <span>apasionado por el desarrollo Full Stack</span>, en constante aprendizaje y
        crecimiento.
        Construyendo proyectos con entusiasmo y dedicación para explorar nuevas tecnologías y expandir mis habilidades
        en el mundo del desarrollo web.
    </h2>

    <div class="social-links">
        <ul>
            <li>
                <a href="https://github.com/MC4MP02" target="_blank">
                    <img src="/public/img/github-logo-blanco.png" alt="GitHub Logo" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/marc-campo-363522264/" target="_blank">
                    <img src="/public/img/linkedin-logo.png" alt="Linkedin Logo" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/maarccampoo2/" target="_blank">
                    <img src="/public/img/instagram-logo.png" alt="Linkedin Logo" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#foto-marc {
    width: 9vh;
    height: 9vh;
    padding: 0.8vw;
    border-radius: 999999px;
}

#foto {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#foto a {
    text-decoration: none;
    color: white;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    padding-top: 0.3vw;
    padding-bottom: 0.3vw;
    padding: .6% 1%;
    font-size: 17px;
    margin-left: 1vh;
    background-color: #1f2937;
    border: 0.1vw solid #45ba9b;
    border-radius: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

h1 {
    text-transform: uppercase;
    font-size: 5.8vh;
    padding: 0.8vw;
    color: white;
    text-align: center;
}

h1 span,
h2 span {
    color: #fef08a;
}

h2 {
    padding: 0.8vw;
    color: #acb1ba;
    text-align: left;
    text-wrap: pretty;
    font-size: 2.2vh;
}

.social-links {
    margin-top: 2.2vh;
    padding: 0.8vw;
}

.social-links ul {
    display: flex;
    flex-direction: row;
}

.social-links li {
    margin-bottom: 0.54vh;
}

.social-links a {
    text-decoration: none;
    color: #cc7523;
}

.social-links a:hover {
    color: #fff;
}

.social-links img {
    width: 4.376vh;
    margin-right: 1vh;
}
</style>
