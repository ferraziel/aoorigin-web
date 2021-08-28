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
          <h3>{{ character.name }}</h3>
          <CharacterHead
          :id="character.head_id"
          :scale="i === 0 ? 5 : i === 1 ? 3 : 2"
          class="flex-shrink-0 mr-4"
          />
          <h3>Nivel: {{ character.level }}</h3>
          <h3>Online: {{ character.is_logged }}</h3>
          <h3>Registrado: {{ $dayjs(character.fecha_ingreso).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}</h3>
          <h3>WalletId: {{ character.eth_wallet_id }}</h3>

        </NuxtLink>
      </ul>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en la cuenta.</p>
      </section>
    </div>
    <!-- <pre class="bg-black">{{ $auth.user }}</pre> -->
  </div>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData({ $axios }) {
    return {
      characters: await $axios.$get(`characters`),
    };
  },
};
</script>

<style></style>
