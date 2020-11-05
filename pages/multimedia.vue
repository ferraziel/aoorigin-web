<template>
  <main class="pt-24 md:pt-32 lg:pt-48">
    <section id="multimedia" class="">
      <h2 class="text-3xl md:text-4xl text-center text-gr gr-gold mb-4">Multimedia</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <a v-for="image in galleryImages" :key="image.alt" :href="image.src" data-fancybox="galeria">
          <img :src="image.src" :alt="image.alt" class="w-full" />
        </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style></style>
