<template>
  <header class="w-full fixed z-50 top-0 left-0">
    <nav class="bg-black bg-opacity-75 py-2 w-full">
      <div class="container flex w-full justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-2 main-title flex-shrink-1" style="z-index: 999">
          <img src="@/assets/img/logo_square.png" alt="Logo Argentum 20 cuadrado" class="w-12" />
          <span class="text-primary text-2xl hidden lg:block">Argentum 20</span>
        </NuxtLink>

        <div class="flex items-center gap-x-16">
          <ul class="hidden lg:flex items-center gap-x-10 uppercase tracking-wide text-gray-300">
            <li v-for="link in links" :key="link.route">
              <NuxtLink :to="link.route" class="inline-block py-2 hover:text-gray-100">{{ link.label }}</NuxtLink>
            </li>
            <li>
              <a href="https://wiki.ao20.com.ar/es/home" target="_blank" class="inline-block py-2 hover:text-gray-100"
                >Manual</a
              >
            </li>
            <li>
              <a
                href="https://www.elmesonhostigado.com/foro/"
                target="_blank"
                class="inline-block py-2 hover:text-gray-100"
                >Foro</a
              >
            </li>
          </ul>

          <div class="flex items-center gap-x-4">
            <NuxtLink to="/#juga-gratis" class="hidden lg:inline-block btn btn-silver border px-2 py-1 text-sm"
              >Descargar</NuxtLink
            >

            <p class="uppercase tracking-wide text-sm hidden lg:block">
              <span v-if="$store.state.isGameOnline">{{ $store.state.onlineCount || 0 }} usuarios online</span>
              <span v-else class="text-white p-2 bg-red-500 font-bold">Servidor Offline</span>
            </p>

            <NuxtLink to="/cuenta" v-if="$auth.loggedIn">Mi cuenta</NuxtLink>
            <NuxtLink v-else to="/login" class="btn btn-silver border px-2 py-1 text-sm">Cuenta</NuxtLink>
          </div>
        </div>

        <button
          @click="showMobileMenu = !showMobileMenu"
          class="lg:hidden pl-4 py-4 focus:outline-none"
          style="z-index: 999"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
          <!-- <i class="fal fa-bars fa-lg"></i> -->
        </button>
      </div>
    </nav>

    <transition name="mobile-menu">
      <nav
        v-show="showMobileMenu"
        class="h-screen bg-gray-1000 w-full fixed top-0 left-0 flex flex-col justify-center overflow-y-scroll"
      >
        <ul class="text-3xl uppercase tracking-wider">
          <li v-for="(link, i) in links" :key="i" @click="showMobileMenu = false">
            <NuxtLink :to="link.route" class="mobile-nav-link" :class="{ 'border-t': i == 0 }">{{
              link.label
            }}</NuxtLink>
          </li>
          <li>
            <a href="https://wiki.ao20.com.ar/es/home" target="_blank" class="mobile-nav-link">Manual</a>
          </li>
          <li>
            <a href="https://www.elmesonhostigado.com/foro/" target="_blank" class="mobile-nav-link">Foro</a>
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
          label: "Noticias",
          route: "/noticias",
        },
        {
          label: "Ranking",
          route: "/ranking",
        },
        {
          label: "Staff",
          route: "/staff",
        },
        {
          label: "Calendario Eventos",
          route: "/calendario",
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
      // alert("hi");
    },
  },
};
</script>

<style scoped>
.mobile-nav-link {
  @apply inline-block px-8 py-6 w-full border-b border-gray-700 hover:text-gray-100;
}
</style>
