<template>
  <header class="fixed top-0 left-0 z-50 w-full">
    <nav class="w-full py-2 bg-black bg-opacity-75">
      <div class="container flex items-center justify-between w-full">
        <NuxtLink to="/" class="flex items-center gap-2 main-title flex-shrink-1" style="z-index: 999">
          <img src="@/assets/img/logo_square.png" alt="Logo Argentum 20 cuadrado" class="w-12" />
          <span class="hidden text-primary lg:block">Argentum 20</span>
        </NuxtLink>

        <div class="flex items-center gap-x-16">
          <ul class="items-center hidden tracking-wide text-gray-300 uppercase lg:flex gap-x-10">
            <li v-for="link in linksMain" :key="link.route">
              <NuxtLink :to="link.route" class="inline-block py-2 hover:text-gray-100">{{ link.label }}</NuxtLink>
            </li>
          </ul>

          <div class="flex items-center gap-x-4">
            <p class="hidden text-sm tracking-wide uppercase lg:block">
              <span v-if="$store.state.isGameOnline">{{ $store.state.onlineCount || 0 }} usuarios online</span>
              <span v-else class="p-2 font-bold text-white bg-red-500">Servidor Offline</span>
            </p>

            <NuxtLink to="/cuenta" v-if="$auth.loggedIn">Mi cuenta</NuxtLink>
            <NuxtLink v-else to="/login" class="px-2 py-1 text-sm border btn btn-silver">Cuenta</NuxtLink>
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
          <!-- <i class="fal fa-bars fa-lg"></i> -->
        </button>
      </div>
    </nav>
    <div class="w-full h-10 lg:block hidden" style="background-color: #330a0b; opacity:70%">
      <div class="container flex w-full">
        <ul class="items-center hidden tracking-wide text-gray-300 uppercase lg:flex gap-x-10">
          <li>
            <a
              href="https://elmesonhostigado.com/foro"
              target="_blank"
              class="inline-block py-2 hover:text-gray-100"
              >Foro</a
            >
          </li>
          <li v-for="link in links" :key="link.route">
              <NuxtLink :to="link.route" class="inline-block py-2 hover:text-gray-100">{{ link.label }}</NuxtLink>
          </li>
          <li>
            <!-- Esto se abre asi y no con nuxtLink por que sino tira error a veces.... -->
            <a href="/market-nft/opensea" class="inline-block py-2 hover:text-gray-100">NFT Marketplace</a>
          </li>
      </ul>
      </div>

    </div>

    <transition name="mobile-menu">
      <nav
        v-show="showMobileMenu"
        class="fixed top-0 left-0 flex flex-col justify-center w-full h-screen overflow-y-scroll bg-gray-1000"
      >
        <ul class="text-3xl tracking-wider uppercase">
          <li v-for="link in linksMain" :key="link.route"  @click="showMobileMenu = !showMobileMenu" >
            <NuxtLink :to="link.route"  class="mobile-nav-link">{{ link.label }}</NuxtLink>
          </li>
           <li  @click="showMobileMenu = !showMobileMenu" >
            <a
              href="https://wiki.ao20.com.ar/index.php?title=P%C3%A1gina_principal"
              target="_blank"
               class="mobile-nav-link"
              >Manual</a
            >
          </li>
          <li  @click="showMobileMenu = !showMobileMenu" >
            <a
              href="https://elmesonhostigado.com/foro"
              target="_blank"
               class="mobile-nav-link"
              >Foro</a
            >
          </li>
          <li v-for="link in links" :key="link.route"  @click="showMobileMenu = !showMobileMenu" >
              <NuxtLink :to="link.route"  class="mobile-nav-link">{{ link.label }}</NuxtLink>
          </li>
          <li>
            <!-- Esto se abre asi y no con nuxtLink por que sino tira error a veces.... -->
            <a href="/market-nft/opensea" class="mobile-nav-link"  @click="showMobileMenu = !showMobileMenu">NFT Marketplace</a>
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
      linksMain: [
        {
          label: "Sorteo NFT",
          route: "/sorteo",
        },
        {
          label: "Jugá gratis",
          route: "/#juga-gratis",
        },
        {
          label: "Noticias",
          route: "/noticias",
        },
        {
          label: "Staff",
          route: "/staff",
        }
      ],
      links: [
        {
          label: "Ranking",
          route: "/ranking",
        },
        {
          label: "Manual",
          route: "/wiki",
        },
        {
          label: "Mercado AO",
          route: "/mercadoao",
        }
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
