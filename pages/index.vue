<template>
  <main>
    <header class="relative overflow-hidden" style="background: initial">
      <!-- <img
        src="@/assets/img/game.png"
        alt="Argentum 20"
        class="absolute top-0 left-0 w-full h-full object-cover"
        style="filter: brightness(0.4); z-index: -1;"
      />-->
      <div class="container flex justify-center items-center sticky z-20 py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48">
        <div class="flex flex-col items-center">
          <img src="@/assets/img/argentum20_logo.png" alt="Argentum 20 Logo" class="mb-3 xl:mb-6 no-select" />
          <h1 class="text-lg sm:text-2xl lg:text-3xl text-center leading-tight">
            <span class="text-gr gr-gold">El servidor de los</span><br class="hidden md:block" />
            <span class="text-gr gr-gold">creadores de Argentum</span>
          </h1>
        </div>
      </div>
      <div class="bg-black opacity-50 absolute top-0 left-0 w-full h-full object-cover z-10"></div>
      <video autoplay muted loop class="w-full h-full absolute top-0 left-0 object-cover bg-transparent">
        <source src="https://revolucionao.com/agite.mp4" type="video/mp4" />
      </video>
    </header>
    <section class="bg-gray-1000 py-3 md:py-6 border-t border-b border-gr border-gr-silver mb-10 md:mb-16 lg:mb-24">
      <div class="container flex justify-center items-center gap-x-8">
        <h3 class="font-sans font-normal sm:text-lg">Seguinos</h3>
        <div class="flex items-center gap-x-4 text-2xl sm:text-3xl">
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
    <div class="container mb-16 lg:mb-24">
      <p class="uppercase tracking-wider text-xl text-center" v-if="$store.state.onlineCount >= 0">
        <span class="text-4xl font-bold">{{ $store.state.onlineCount }}</span
        ><br />
        usuarios online
      </p>
      <div class="flex flex-col items-center mt-16 lg:mt-24 xl:mt-32">
        <div class="relative mb-2 z-10">
          <a
            id="download-btn"
            href="https://revolucionao.com/ao20/AO%2020.exe"
            class="inline-block text-center sm:text-xl lg:text-2xl font-serif font-bold tracking-wider uppercase px-4 py-3 md:px-5 md:py-3 border-2 border-gr border-gr-gold bg-gradient-to-t from-gray-900 to-gray-800 hover:from-gray-700 text-shadow"
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
            Convertite en un Patron para obtener beneficios exclusivos, como acceso a la Beta, contenido Work in
            Progress, canales privados de Discord, colores in-game ¡y más!
          </p>
          <div class="hidden md:flex flex-grow"></div>
          <a href="https://patreon.com/nolandstudios" target="_blank" class="btn btn-silver self-start text-base"
            >Convertite en Patron</a
          >
        </article>

        <article class="flex flex-col gap-y-6">
          <h3 class="flex items-center gap-x-4 font-sans font-semibold text-xl md:text-2xl tracking-widest">
            <img src="@/assets/img/cafecito.png" alt="icono de cafecito" />
            Cafecito
          </h3>
          <div class="flex-grow">
            <p class="mb-3">Donándonos al menos un Cafecito, tenés acceso a la Beta.</p>
            <p>¡Podés pagar con Mercado Pago y todos los medios que ofrece!</p>
          </div>
          <a href="https://cafecito.app/nolandstudios" target="_blank" class="btn btn-silver self-start text-base"
            >Donar en Cafecito</a
          >
        </article>
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
    };
  },
  mounted() {
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
