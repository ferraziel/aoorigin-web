<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <nav class="w-full py-2 bg-black bg-opacity-10">
      <div class="container flex items-center justify-between w-full">
        <NuxtLink to="/" class="flex items-center gap-2 main-title flex-shrink-1 -my-4 -ml-2" style="z-index: 999">
          <img src="@/assets/img/aoorigin_logo2_sm.png" alt="Argentum Origin" class="w-40" />
          <span class="hidden">Argentum Origin</span>
        </NuxtLink>

        <div class="flex items-center gap-x-16">
          <ul class="items-center hidden tracking-wide text-gray-300 uppercase lg:flex gap-x-10">
            <li v-for="link in linksMain" :key="link.route">
              <NuxtLink :to="link.route" class="inline-block py-2 hover:text-gray-100">{{ link.label }}</NuxtLink>
            </li>
          </ul>

          <div class="flex items-center gap-x-4">
            <p class="mb-0 hidden text-sm tracking-wide uppercase lg:block">
              <span v-if="isServerOnline">{{ onlineCount || 0 }} usuarios online</span>
              <span v-else class="p-2 font-bold text-white bg-yellow-500">Cargando...</span>
            </p>

            <NuxtLink to="/cuenta" v-if="$auth.loggedIn">Mi cuenta</NuxtLink>
            <NuxtLink v-else to="/login" class="px-2 py-1 text-sm border btn btn-silver">Login</NuxtLink>
          </div>
        </div>

        <button
          @click="showMobileMenu = !showMobileMenu"
          class="py-4 pl-4 lg:hidden focus:outline-none"
          style="z-index: 999"
        >
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5">
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>
      </div>
    </nav>
    <div class="w-full lg:block hidden" style="background-color: #330a0b">
      <div class="container flex w-full">
        <ul class="items-center hidden tracking-wide text-gray-300 uppercase lg:flex gap-x-10">
          <li>
            <a
              href="https://steamcommunity.com/app/1956740/discussions/"
              target="_blank"
              class="inline-block py-2 hover:text-yellow-400"
              >Foro</a
            >
          </li>
          <li v-for="link in links" :key="link.route">
            <NuxtLink :to="link.route" class="inline-block py-2 hover:text-yellow-400">{{ link.label }}</NuxtLink>
          </li>
          <li>
            <a href="https://estadisticas.ao20.com.ar/produccion/" class="inline-block py-2 hover:text-yellow-400"
              >Estadisticas</a
            >
          </li>
          <li>
            <a href="https://soporte.ao20.com.ar" class="inline-block py-2 hover:text-yellow-400">Soporte</a>
          </li>
        </ul>
      </div>
    </div>

    <transition name="mobile-menu">
      <nav
        v-show="showMobileMenu"
        class="fixed top-0 left-0 flex flex-col justify-center w-full h-screen overflow-y-scroll bg-gray-1000"
      >
        <ul class="text-2xl tracking-wider uppercase mt-52 border-t border-white">
          <li v-for="link in linksMain" :key="link.route" @click="showMobileMenu = !showMobileMenu">
            <NuxtLink :to="link.route" class="mobile-nav-link">{{ link.label }}</NuxtLink>
          </li>
          <li @click="showMobileMenu = !showMobileMenu">
            <a href="https://steamcommunity.com/app/1956740/discussions/" target="_blank" class="mobile-nav-link"
              >Foro</a
            >
          </li>
          <li v-for="link in links" :key="link.route">
            <NuxtLink :to="link.route" class="mobile-nav-link">{{ link.label }}</NuxtLink>
          </li>

          <li>
            <a href="https://estadisticas.ao20.com.ar/produccion/" class="mobile-nav-link">Estadisticas</a>
          </li>

          <li>
            <a href="https://soporte.ao20.com.ar" class="mobile-nav-link">Soporte</a>
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
      onlineCount: 0,
      isServerOnline: false,
      showMobileMenu: false,
      linksMain: [
        {
          label: "Jugá gratis",
          route: "/#juga-gratis",
        },
        {
          label: "Staff",
          route: "/staff",
        },
        {
          label: "Mercado",
          route: "/mercadoao",
        },
      ],
      links: [
        {
          label: "Ranking",
          route: "/ranking",
        },
        {
          label: "Ranking Clanes",
          route: "/ranking-clanes",
        },
        {
          label: "Muro de la verguenza",
          route: "/baneados",
        },
        {
          label: "Manual",
          route: "/wiki",
        },
        {
          label: "Landlords",
          route: "/landlords",
        },
        {
          label: "Reglamento",
          route: "/reglamento",
        },
        {
          label: "Calendario Eventos",
          route: "/calendario",
        },
      ],
    };
  },
  async created() {
    try {
      const response = await this.$axios.$get("/");
      this.onlineCount = response.onlineCount;
      this.isServerOnline = response.isServerOnline;
    } catch (error) {
      console.error("Nav.vue fetch error:", error);
      this.onlineCount = 1;
      this.isServerOnline = false;
    }
  },

  mounted() {
    window.addEventListener("resize", () => {
      if (window.screen.width > 1024) {
        this.showMobileMenu = false;
      }
    });
  },
  methods: {
    toggleMenu() {},
  },
};
</script>

<style scoped>
.mobile-nav-link {
  @apply inline-block px-6 py-6 w-full border-b border-white hover:text-yellow-100;
}
</style>
