<template>
  <main class="-mt-32 -z-1">
    <header class="h-screen relative overflow-hidden" style="background: initial">
      <div
        class="container h-full flex justify-center items-center sticky z-20 py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48"
      >
        <div class="flex flex-col items-center">
          <img src="@/assets/img/argentum20_logo.png" alt="Argentum 20 Logo" class="w-144 mb-3 xl:mb-6 no-select" />
          <h1 class="text-xl sm:text-3xl lg:text-4xl text-center leading-tight text-white mb-12 normal-case">
            Mercado AO. Compra o vende tu personaje. Compra items especiales
          </h1>
          <NuxtLink to="mercadoao" class="btn btn-cta">Entrar al mercado</NuxtLink>
        </div>
      </div>

      <!-- <video autoplay muted loop class="w-full h-full absolute top-0 left-0 object-cover bg-transparent">
        <source src="https://revolucionao.com/agite.mp4" type="video/mp4" />
      </video> -->
    </header>

    <div class="section-divider my-16"></div>

    <section id="apoyanos" class="container max-w-screen-lg mx-auto">
      <h3 class="section-title mb-10 text-center">¡Apoyanos!</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 md:text-lg">
        <article class="flex flex-col gap-y-6">
          <h3 class="flex items-center gap-x-4 font-sans font-semibold text-xl md:text-2xl tracking-widest">
            <img src="@/assets/img/patreon.png" alt="icono de Patreon" />
            Patreon
          </h3>
          <p>
            Convertite en un Patron para obtener beneficios exclusivos in-game y acceso a canales privados de Discord
          </p>
          <div class="hidden md:flex flex-grow"></div>
          <a
            href="https://patreon.com/nolandstudios"
            target="_blank"
            rel="noopener"
            class="btn btn-silver self-start text-base"
            >Convertite en Patron</a
          >
        </article>




        <article class="flex flex-col gap-y-6">
          <h3 class="flex items-center gap-x-4 font-sans font-semibold text-xl md:text-2xl tracking-widest">
            <img src="@/assets/img/cafecito.png" alt="icono de cafecito" />
            Cafecito
          </h3>
          <div class="flex-grow">
            <p class="mb-3">Ayudanos con un Cafecito (psst, ¡lo creó Midraks, un jugador de AO!).</p>
            <p>¡Podés pagar con Mercado Pago y todos los medios que ofrece!</p>
          </div>
          <a
            href="https://cafecito.app/nolandstudios"
            target="_blank"
            rel="noopener"
            class="btn btn-silver self-start text-base"
            >Donar en Cafecito</a
          >
        </article>

        <!-- <img src="https://i.ibb.co/Tg22HDn/image.png" alt="Beneficios" /> -->


      </div>
    </section>

    <section class="bg-gray-1000 mb-10">
      <div class="divider2"></div>

      <div class="py-3 md:py-6 lg:py-12">
        <div class="container flex justify-center items-center gap-x-6 md:gap-x-10 lg:gap-x-20">
          <h3 class="font-sans font-normal sm:text-lg md:text-2xl lg:text-4xl">Seguinos</h3>
          <div class="flex items-center gap-x-2 lg:gap-x-12">
            <a
              href="https://discord.gg/e3juVbF"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#6E85D3]"
            >
              <!-- <i class="fab fa-discord fa-2x"></i> -->
              <img src="@/assets/img/ico-discord.png" alt="icono discord" class="w-8 lg:w-20" />
            </a>
            <a
              href="https://www.youtube.com/c/PabloMarquez-aka-morgolock"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#F70000]"
            >
              <!-- <i class="fab fa-youtube fa-2x"></i> -->
              <img src="@/assets/img/ico-youtube.png" alt="icono youtube" class="w-8 lg:w-20" />
            </a>
            <a
              href="https://www.facebook.com/ao20oficial"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#1873EB]"
            >
              <!-- <i class="fab fa-facebook fa-2x"></i> -->
              <img src="@/assets/img/ico-facebook.png" alt="icono youtube" class="w-8 lg:w-20" />
            </a>
            <a
              href="https://instagram.com/ao20oficial"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#DC3A60]"
            >
              <!-- <i class="fab fa-instagram fa-2x"></i> -->
              <img src="@/assets/img/ico-instagram.png" alt="icono instagram" class="w-8 lg:w-20" />
            </a>
            <a
              href="https://twitter.com/ao20oficial"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#009DED]"
            >
              <!-- <i class="fab fa-twitter fa-2x"></i> -->
              <img src="@/assets/img/ico-twitter.png" alt="icono twitter" class="w-8 lg:w-20" />
            </a>
            <a
              href="https://www.twitch.tv/ao20oficial"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#009DED]"
            >
              <!-- <i class="fab fa-twitter fa-2x"></i> -->
              <img src="@/assets/img/ico-twitch.png" alt="icono twitch" class="w-8 lg:w-20" />
            </a>
            <a
              href="https://elmesonhostigado.com/foro"
              target="_blank"
              rel="noopener"
              class="transition-colors duration-150 ease-out text-[#009DED]"
            >
              <!-- <i class="fab fa-twitter fa-2x"></i> -->
              <img src="@/assets/img/ico-forum.png" alt="icono foro" class="w-8 lg:w-20" />
            </a>
            <!-- <a href="#" target="_blank" class="transition-colors duration-150 ease-out hover:text-primary">
              <i class="fab fa-instagram"></i>
            </a> -->
          </div>
        </div>
      </div>

      <div class="divider2"></div>
    </section>


    <div class="section-divider my-16"></div>

    <section id="newsletter" class="container max-w-screen-lg mx-auto">
      <form
        style="border: 1px solid #ccc; padding: 3px; text-align: center"
        action="https://tinyletter.com/ao20"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/ao20', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label for="tlemail">Newsletter: Recibi novedades al email</label>
        </p>
        <p><input type="text" style="width: 140px" name="email" id="tlemail" /></p>
        <br>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" class="btn btn-silver self-start text-base" value="Subscribirse" />
      </form>
    </section>

    <div class="section-divider my-16"></div>

  </main>
</template>

<script>

export default {
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply tracking-wider uppercase;
}

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
