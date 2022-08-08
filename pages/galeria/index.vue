<template>
  <div class="container">
      <br>
      <br>
      <section id="galeria" class="mb-10">
        <h2 class="section-title text-center mb-8 uppercase">Galería de imágenes</h2>
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
  </div>
</template>

<script>
import $ from "jquery";

export default {
  async asyncData({ $prismic }) {
    const homePage = await $prismic.api.getSingle("inicio");

    const ingameImages = homePage.data.multimedia.map((i) => ({
      url: i.ingame_image.url,
      alt: i.ingame_image.alt,
      thumb: {
        url: i.ingame_image.thumb.url,
      },
    }));

    return {

      ingameImages,
    };
  },

  mounted() {
    window.$ = window.jQuery = $;
    require("@fancyapps/fancybox");

    $("[data-fancybox='gallery']").fancybox({
      backFocus: false,
    });

  },


};
</script>

<style></style>
