<template>
  <main>
    <header class="h-screen relative overflow-hidden" style="background: initial">
      <!-- <img
        src="@/assets/img/game.png"
        alt="Argentum 20"
        class="absolute top-0 left-0 w-full h-full object-cover"
        style="filter: brightness(0.4); z-index: -1;"
      />-->
      <div class="container flex justify-center items-center sticky z-20 pt-6 md:pt-8">
        <div class="flex flex-col items-center">
          <img src="@/assets/img/argentum20_logo.png" alt="Argentum 20 Logo" class="mb-3 xl:mb-6" />
          <h1 class="text-lg sm:text-2xl lg:text-3xl text-center leading-tight">
            <span class="text-gr gr-gold">El servidor de los</span><br class="hidden md:block" />
            <span class="text-gr gr-gold">creadores originales de Argentum</span>
          </h1>
        </div>
      </div>
      <div class="bg-black opacity-50 absolute top-0 left-0 w-full h-full object-cover z-10"></div>
      <video autoplay muted loop class="w-full h-full absolute top-0 left-0 object-cover bg-transparent">
        <source src="https://ao20.s3-accelerate.amazonaws.com/banner_ao20.mp4" type="video/mp4" />
      </video>
    </header>
    <section class="bg-gray-1000 py-6 border-t border-b border-gr border-gr-silver mb-24 md:mb-32 lg:mb-40">
      <div class="container flex justify-center items-center gap-x-8">
        <h3 class="font-sans font-normal text-lg">Seguinos</h3>
        <div class="flex items-center gap-x-4 text-3xl">
          <a
            href="https://discord.gg/e3juVbF"
            target="_blank"
            class="transition-colors duration-150 ease-out hover:text-gold"
          >
            <i class="fab fa-discord"></i>
          </a>
          <a
            href="https://www.youtube.com/c/PabloMarquez-aka-morgolock"
            target="_blank"
            class="transition-colors duration-150 ease-out hover:text-gold"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <!-- <a href="#" target="_blank" class="transition-colors duration-150 ease-out hover:text-gold">
            <i class="fab fa-instagram"></i>
          </a> -->
        </div>
      </div>
    </section>
    <div class="container flex justify-center mb-16 lg:mb-24">
      <div class="flex flex-col items-center">
        <div class="relative mb-2 z-10">
          <a
            id="download-btn"
            href="https://revolucionao.com/ao20/AO%2020.exe"
            class="inline-block text-center sm:text-xl lg:text-2xl font-serif font-bold tracking-wider uppercase px-2 py-2 md:px-5 md:py-3 border-2 border-gr border-gr-gold bg-gradient-to-t from-gray-900 to-gray-800 hover:from-gray-700"
            >Descargar el Instalador</a
          >
        </div>
        <!-- <img src="@/assets/img/wings.png" alt class="absolute top-0 inset-x-auto" /> -->
        <p class="text-sm text-gray-600">Sólo disponible para Windows</p>
      </div>
    </div>
    <section class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-24">
      <RegisterForm class="order-last" />
      <figure class="order-first">
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

    <section id="apoyanos" class="container">
      <h3 class="text-3xl md:text-4xl text-gr gr-gold mb-6 md:mb-10 text-center">¡Apoyanos!</h3>
      <div class="md:max-w-2xl lg:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 md:text-lg">
        <article class="flex flex-col gap-y-6">
          <h3 class="flex items-center gap-x-4 font-sans font-semibold text-xl md:text-2xl tracking-widest">
            <img src="@/assets/img/patreon.png" alt="icono de Patreon" />
            Patreon
          </h3>
          <p>
            Convertite en un Patron para tener acceso a beneficios exclusivos, como contenido Work in Progress, roles de
            Discord, colores in-game ¡y más!
          </p>
          <div class="hidden md:flex flex-grow"></div>
          <a href="https://patreon.com/nolandstudios" target="_blank" class="btn btn-silver self-start text-base"
            >Convertite en Patron</a
          >
        </article>

        <article class="flex flex-col gap-y-6">
          <h3 class="flex items-center gap-x-4 font-sans font-semibold text-xl md:text-2xl tracking-widest">
            <img src="@/assets/img/bitcoin.png" alt="icono de Bitcoin" />
            Bitcoin
          </h3>
          <div>
            <p class="mb-3">Para donaciones que no reciben beneficios, ofrecemos Bitcoin como moneda.</p>
            <p>
              Escaneá el código QR con tu celular para abrir tu Wallet y enviarnos lo que desees. ¡Muchísimas gracias!
            </p>
          </div>
          <a href="/assets/img/bitcoin_qr.png" class="btn btn-silver self-start text-base" data-fancybox="bitcoin"
            >Enviar Bitcoin</a
          >
        </article>
      </div>
    </section>

    <section id="galeria" class="my-16 md:my-24 lg:my-32">
      <h2 class="text-3xl md:text-4xl text-center text-gr gr-gold mb-4">Galería</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <a v-for="image in galleryImages" :key="image.alt" :href="image.src" data-fancybox="galeria">
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
          src: "/assets/img/galeria_1.png",
          alt: "imagen 1 de la galería de Argentum 20",
        },
        {
          src: "/assets/img/galeria_2.png",
          alt: "imagen 2 de la galería de Argentum 20",
        },
        {
          src: "/assets/img/galeria_3.png",
          alt: "imagen 3 de la galería de Argentum 20",
        },
        {
          src: "/assets/img/galeria_4.png",
          alt: "imagen 4 de la galería de Argentum 20",
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
  content: url("/assets/img/wings_mobile.png");
  left: 50%;
  transform: translateY(-50px) translateX(-50%);
  z-index: -1;
}

#download-btn:hover {
  box-shadow: 0 0 40px rgba(199, 131, 0, 0.7), inset 0 0 35px -10px rgba(0, 0, 0, 0.75);
}

.grecaptcha-badge {
  z-index: 999;
}

@screen md {
  #download-btn::before {
    @apply w-auto;
    content: url("/assets/img/wings.png");
    transform: translateY(-99px) translateX(-50%);
  }
}

/* #download-btn:active {
  box-shadow: inset 0 0;
} */
</style>
