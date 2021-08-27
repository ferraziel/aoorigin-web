<template>
  <div class="container">
    <PagePadding />

    <div class="text-center mb-12">
      <h1 class="section-title">Lista de personajes!</h1>
      <ul
        v-if="characters.length"
        class="max-w-screen-md mx-auto bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-6"
      >
        <NuxtLink
          v-for="character in characters"
          :key="character.id"
          :id="character.id"
          :to="`/personajes/${character.id}`"
          class="
            group
            flex flex-col
            p-3
            md:p-6
            border-b
            last:border-b-0
            border-gray-700
            hover:bg-white hover:bg-opacity-10
            transition-colors
            duration-200
            ease-out
          "
        >
        </NuxtLink>
      </ul>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en la cuenta.</p>
      </section>
    </div>
    <!-- <pre class="bg-black">{{ $auth.user }}</pre> -->

    <div class="flex justify-center">
      <button class="btn btn-silver" @click="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data({ $axios }) {
    return {
      characters: $axios.$get(`characters`),
    };
  },
  methods: {
    async logout() {
      this.$auth.logout();
    },
  },
};
</script>

<style></style>
