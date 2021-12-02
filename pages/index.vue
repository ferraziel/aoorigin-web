<template>
  <main class="-mt-32 -z-1">
    <header class="h-screen relative overflow-hidden" style="background: initial">
      <div
        class="container h-full flex justify-center items-center sticky z-20 py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48"
      >
        <div class="flex flex-col items-center">
          <img src="@/assets/img/argentum20_logo.png" alt="Argentum 20 Logo" class="w-144 mb-3 xl:mb-6 no-select" />
          <h1 class="text-xl sm:text-3xl lg:text-4xl text-center leading-tight text-white mb-12 normal-case">
            Aventurate en las tierras de Argentum 20<br class="hidden lg:block" />
            y escribí tu propio camino
          </h1>
          <a href="/#juga-gratis" class="btn btn-cta">Jugá gratis</a>
        </div>
      </div>

      <div class="bg-black opacity-50 absolute top-0 left-0 w-full h-full object-cover z-10"></div>

      <img
        :src="homePage.data.banner_image.url"
        alt=""
        class="w-full h-full absolute top-0 left-0 object-cover bg-transparent"
      />

      <!-- <video autoplay muted loop class="w-full h-full absolute top-0 left-0 object-cover bg-transparent">
        <source src="https://revolucionao.com/agite.mp4" type="video/mp4" />
      </video> -->
    </header>

    <section class="bg-gray-1000 mb-10">
      <div class="divider2"></div>

      <div class="py-3 md:py-6 lg:py-12">
        <div class="container flex justify-center items-center gap-x-6 md:gap-x-10 lg:gap-x-20">
          <a href="/sorteo" class="btn">Participa del Sorteo de NFTs</a>

          <h4>NFTs AO20 Collection</h4>
          <span
            >6420 (ERC-721) NFT's coleccionables seran creandos en esta primera edicion en una mezcla entre todos los
            cuerpos sin equipo con todas las caras posibles. esto nos permitira en el futuro a poder expandir el
            concepto. Todos los NFTs tienen atributos unicos asignandoles rarezas.</span
          >

          <img src="http://nfts.ao20.com.ar/config/images/example.gif" />
          <a href="https://www.elmesonhostigado.com/foro/ao-20/416-nft-s-ao20-primer-coleccion-opensea-polygon"
            >Mas informacion</a
          >
          <a href="http://nfts.ao20.com.ar">Comprar</a>
        </div>
      </div>

      <div class="divider2"></div>
    </section>

    <section class="bg-gray-1000 mb-10">
      <div class="divider2"></div>

      <div class="py-3 md:py-6 lg:py-12">
        <div class="container flex justify-center items-center gap-x-6 md:gap-x-10 lg:gap-x-20">
          <News-Bar />
          <!-- <a href="#" target="_blank" class="transition-colors duration-150 ease-out hover:text-primary">
            <i class="fab fa-instagram"></i>
          </a> -->
        </div>
      </div>

      <div class="divider2"></div>
    </section>


    <section id="discord" class="container max-w-screen-lg mx-auto">
      <widgetbot
        server="761213868352471040"
        channel="761286044229959701"
        width="800"
        height="600"
      ></widgetbot>
      <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
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
              href="http://twitter.com/ao20oficial"
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

    <section id="juga-gratis" class="container mb-16 md:mb-24">
      <h2 class="section-title text-center mb-4 md:mb-10">¡Jugá Gratis!</h2>

      <div class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div class="flex flex-col items-center mt-16 lg:mt-24 xl:mt-32">
          <div class="relative mb-4 z-10">
            <!--
            No borrar matomo_download por que se usa para contar descarga en analytics.
            https://matomo.org/faq/new-to-piwik/faq_47/
            -->
            <a id="download-btn" :href="link(homePage.data.installer_link)" class="btn btn-cta matomo_download"
              >Descargar</a
            >
          </div>

          <!-- <img src="@/assets/img/wings.png" alt class="absolute top-0 inset-x-auto" /> -->
          <p class="text-sm text-gray-600 mb-6 lg:mb-16">Sólo disponible para Windows</p>

          <section class="flex flex-col gap-y-4 text-center" v-if="mirrorLinks.length">
            <p class="text-xl leading-none">También podés descargar el instalador de los siguientes mirrors</p>

            <div v-for="mirror in mirrorLinks" :key="mirror.mirror_link.url">
              <a :href="mirror.mirror_link.url" target="_blank" rel="noopener">
                Descargar ({{ mirror.mirror_link.url }})
                <img :src="mirror.mirror_img.url" :alt="mirror.mirror_img.alt" />
              </a>
            </div>
          </section>
        </div>

        <RegisterForm />
      </div>
    </section>

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
      </div>
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

    <!-- <Forum-Posts /> -->

    <section id="galeria" class="mb-10">
      <h2 class="section-title text-center mb-16">Galería de imágenes</h2>
      <div class="grid grid-cols-2 md:grid-cols-4">
        <a v-for="image in ingameImages" :key="image.alt" :href="image.url" data-fancybox="galeria">
          <!-- <div class="w-full overflow-hidden"> -->
          <div class="overflow-hidden w-full">
            <img
              :src="image.thumb.url"
              :alt="image.alt"
              class="w-full transform hover:scale-150 transition duration-[0.5s] ease-out"
            />
          </div>
          <!-- </div> -->
        </a>
      </div>
    </section>

    <div class="section-divider mb-16"></div>

    <section
      id="info"
      class="
        max-w-screen-xl
        mx-auto
        container
        grid
        items-center
        grid-cols-1
        md:grid-cols-6
        lg:grid-cols-12
        gap-x-12
        mb-12
        lg:mb-0
      "
    >
      <div class="flex flex-col gap-y-6 col-span-1 order-2 lg:order-1 md:col-span-4 lg:col-span-8">
        <h2 class="text-4xl text-gr gr-gold text-center lg:text-left">El primer MMORPG 100% argentino</h2>
        <p class="text-xl">
          Argentum es un juego online multijugador, donde podés tomar el rol de un guerrero, mago, paladín y muchas
          otras clases, y explorar las tierras míticas de Argentum.
        </p>
        <p class="text-xl">
          Nació hace 20 años como un juego
          <span class="text-primary font-bold">totalmente desarrollado en Argentina</span> para luego ser liberado a la
          comunidad de manera gratuita. El código es accesible a todos, permitiendo así su evolución y continuidad en el
          tiempo.
        </p>
        <p class="text-xl">
          De la mano de los creadores originales del juego,
          <span class="text-primary font-bold">Argentum 20</span> resurge como una conmemoración por el cumplimiento de
          los 20 años de su origen.
        </p>
      </div>

      <figure class="col-span-1 md:col-span-2 lg:col-span-4 order-1 lg:order-2">
        <img src="@/assets/img/catapulta.png" alt="Catapulta argentum 20" class="w-full" />
      </figure>
    </section>

    <MessageBox v-if="validatedMail" status="OK" :isFloating="true">
      <p class="text-lg -mt-2">Se ha validado el mail correctamente.</p>
    </MessageBox>
  </main>
</template>

<script>
import $ from "jquery";

export default {
  async asyncData({ $prismic }) {
    const homePage = await $prismic.api.getSingle("inicio");

    // console.log(homePage);

    const ingameImages = homePage.data.multimedia.map((i) => ({
      url: i.ingame_image.url,
      alt: i.ingame_image.alt,
      thumb: {
        url: i.ingame_image.thumb.url,
      },
    }));

    const mirrorLinks = homePage.data.body.filter((s) => s.slice_type === "mirror_link").map((s) => s.primary);
    // console.log(mirrorLinks);
    return {
      homePage,
      ingameImages,
      mirrorLinks,
    };
  },
  data() {
    return {
      validatedMail: false,
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
  methods: {
    link(prismicObject) {
      return this.$prismic.asLink(prismicObject);
    },
  },
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
