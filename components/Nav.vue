<template>
  <header class="w-full fixed z-50" style="top: 1rem">
    <div class="container flex items-center justify-between gap-x-6">
      <NuxtLink
        to="/"
        class="w-16 xl:w-24 flex flex-row lg:flex-col items-center gap-2 flex-grow-0"
        style="z-index: 999"
      >
        <img src="@/assets/img/logo_square.png" alt="Logo Argentum 20 cuadrado" />
        <div class="uppercase text-white text-xs font-bold tracking-wider bg-red-700 px-2 py-1">Beta</div>
      </NuxtLink>

      <nav
        class="bg-gray-900 border border-gr border-gr-silver py-2 px-8 hidden lg:flex w-full justify-between items-center"
      >
        <ul class="flex items-center gap-x-6 uppercase tracking-wide text-gray-500">
          <li>
            <NuxtLink to="/" class="inline-block py-2 hover:text-gray-400">Inicio</NuxtLink>
          </li>
          <div class="vertical-separator self-stretch opacity-50"></div>
          <li>
            <NuxtLink to="/#apoyanos" class="inline-block py-2 hover:text-gray-400">Apoyanos</NuxtLink>
          </li>
          <div class="vertical-separator self-stretch opacity-50"></div>
          <li>
            <NuxtLink to="/multimedia" class="inline-block py-2 hover:text-gray-400">Multimedia</NuxtLink>
          </li>
        </ul>
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
      </nav>
      <button
        @click="showMobileMenu = !showMobileMenu"
        class="lg:hidden pl-4 py-4 focus:outline-none"
        style="z-index: 999"
      >
        <i class="fal fa-bars fa-lg"></i>
      </button>
    </div>

    <transition name="mobile-menu">
      <nav
        v-show="showMobileMenu"
        class="h-screen bg-gray-900 w-full fixed top-0 left-0 flex flex-col justify-center overflow-y-scroll"
      >
        <ul class="text-3xl uppercase tracking-wider">
          <li v-for="(link, i) in links" :key="link.route" @click="showMobileMenu = false">
            <NuxtLink
              :to="link.route"
              class="inline-block px-8 py-6 w-full border-b border-gray-700 hover:text-gray-400"
              :class="{ 'border-t': i == 0 }"
              >{{ link.label }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      links: [
        {
          label: "Inicio",
          route: "/",
        },
        {
          label: "Apoyanos",
          route: "/#apoyanos",
        },
        {
          label: "Multimedia",
          route: "/multimedia",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.screen.width > 1024) {
        this.showMobileMenu = false;
      }
    });
  },
  methods: {
    toggleMenu() {
      alert("hi");
    },
  },
};
</script>

<style></style>
