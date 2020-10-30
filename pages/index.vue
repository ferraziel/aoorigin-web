<template>
  <main>
    <header class="h-screen relative overflow-hidden" style="background: initial">
      <!-- <img
        src="@/assets/img/game.png"
        alt="Argentum 20"
        class="absolute top-0 left-0 w-full h-full object-cover"
        style="filter: brightness(0.4); z-index: -1;"
      />-->
      <div
        class="container flex justify-center items-center sticky z-20 pt-6 md:pt-12 lg:pt-16 xl:pt-20"
      >
        <div class="flex flex-col items-center">
          <img src="@/assets/img/argentum20_logo.png" alt="Argentum 20 Logo" class="mb-6" />
          <h1 class="text-3xl text-gr gr-gold">El Servidor Oficial de AO Clásico</h1>
        </div>
      </div>
      <div class="bg-black opacity-50 absolute top-0 left-0 w-full h-full object-cover z-10"></div>
      <video
        autoplay
        muted
        loop
        class="w-full h-full absolute top-0 left-0 object-cover bg-transparent"
      >
        <source src="https://revolucionao.com/agite.mp4" type="video/mp4" />
      </video>
    </header>
    <section class="bg-gray-1000 py-6 border-t border-b border-gr border-gr-silver mb-40">
      <div class="container flex justify-center items-center gap-x-8">
        <h3 class="font-sans font-normal text-lg">Seguinos</h3>
        <div class="flex items-center gap-x-4 text-3xl">
          <a
            href="#"
            target="_blank"
            class="transition-colors duration-150 ease-out hover:text-gold"
          >
            <i class="fab fa-discord"></i>
          </a>
          <a
            href="#"
            target="_blank"
            class="transition-colors duration-150 ease-out hover:text-gold"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="#"
            target="_blank"
            class="transition-colors duration-150 ease-out hover:text-gold"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
    <div class="container flex justify-center mb-24">
      <div class="flex flex-col items-center">
        <div class="relative mb-2 z-10">
          <a
            id="download-btn"
            href="#"
            class="inline-block text-2xl font-serif font-bold tracking-wider uppercase px-5 py-3 border-2 border-gr border-gr-gold bg-gradient-to-t from-gray-900 to-gray-800 hover:from-gray-700"
            >Descargar el Instalador</a
          >
        </div>
        <!-- <img src="@/assets/img/wings.png" alt class="absolute top-0 inset-x-auto" /> -->
        <p class="text-sm text-gray-600">Sólo disponible para Windows</p>
      </div>
    </div>
    <section class="container grid grid-cols-2 gap-8">
      <RegisterForm />
      <figure>
        <img
          src="@/assets/img/gulfas.png"
          alt="Estatua de Gulfas Morgolock"
          class="w-full border border-gr border-gr-silver mb-4"
        />
        <!-- <figcaption class="text-right italic text-lg">
          <q class="block mb-3"
            >Se me ocurrió que acá haya una frase épica relacionada a Argentum, quizá algo que
            indique el renacimiento del servidor oficial.</q
          >
          <p>— Gulfas Morgolock</p>
        </figcaption> -->
      </figure>
    </section>

    <section class="my-32">
      <h2 class="text-4xl text-center text-gr gr-gold mb-4">Galería</h2>
      <div class="grid grid-cols-3 gap-8">
        <a v-for="image in galleryImages" :key="image" :href="image.src" data-fancybox="galeria">
          <img :src="image.src" :alt="image.alt" class="w-full" />
        </a>
      </div>
    </section>

    <MessageBox v-if="validatedMail" status="OK" :isFloating="true">
      <p class="text-lg -mt-2">Se ha validado el mail correctamente.</p>
    </MessageBox>
  </main>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      validatedMail: false,
      galleryImages: [
        {
          src: "/assets/img/prueba.jpg",
          alt: "imagen 1",
        },
        {
          src: "/assets/img/prueba.jpg",
          alt: "imagen 2",
        },
        {
          src: "/assets/img/prueba.jpg",
          alt: "imagen 3",
        },
        {
          src: "/assets/img/prueba.jpg",
          alt: "imagen 4",
        },
        {
          src: "/assets/img/prueba.jpg",
          alt: "imagen 5",
        },
        {
          src: "/assets/img/prueba.jpg",
          alt: "imagen 6",
        },
      ],
    };
  },
  mounted() {
    window.$ = window.jQuery = $;
    require("@fancyapps/fancybox");
    $("[data-fancybox='gallery']").fancybox({
      backFocus: false,
    });

    if (this.$route.query.validada == 1) {
      this.validatedMail = true;

      setTimeout(() => {
        this.validatedMail = false;
      }, 6000);
    }
  },
};
</script>

<style>
#download-btn {
  transition: all 150ms ease-out;
  box-shadow: 0 0 20px rgba(199, 131, 0, 0.4);
}

#download-btn::before {
  @apply absolute top-0;
  content: url("/assets/img/wings.png");
  left: 50%;
  transform: translateY(-99px) translateX(-50%);
  z-index: -1;
}

#download-btn:hover {
  box-shadow: 0 0 40px rgba(199, 131, 0, 0.7), inset 0 0 35px -10px rgba(0, 0, 0, 0.75);
}

/* #download-btn:active {
  box-shadow: inset 0 0;
} */
</style>
