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
        >
          <!-- <CharacterHead :id="character.head_id" :scale="i === 0 ? 5 : i === 1 ? 3 : 2" class="flex-shrink-0 mr-4" /> -->

          <div class="flex flex-col items-center gap-y-2">
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
              <CharacterRenderer
                :isDead="character.min_hp == 0"
                :bodyData="character.bodyGraphicData"
                :helmetData="character.helmetGraphicData"
                :weaponData="character.weaponGraphicData"
                :shieldData="character.shieldGraphicData"
                :headData="character.headGraphicData"
                background="https://i1.sndcdn.com/artworks-wclS76qZZbYHAhoX-yVPKnw-t500x500.jpg"
              />
            </div>
          </div>

          <h2 class="text-4xl text-gr gr-gold">{{ character.name }}</h2>
          <h2>Nivel: {{ character.level }}</h2>
          <h2>Ultimo login: {{ $dayjs(character.fecha_ingreso).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}</h2>
          <h2>WalletId: {{ character.eth_wallet_id }}</h2>
          <h2>Online: {{ character.is_logged }}</h2>
          <hr />
          <br />
        </NuxtLink>


      </ul>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en la cuenta.</p>
      </section>
    </div>

    <div class="text-center mb-12">
      <h1 class="section-title">Personajes Borrados</h1>
      <h5>Si queres podes recuperar tus personajes borrados por dinero</h5>
      <ul
        v-if="deletedCharacters.length"
        class="max-w-screen-md mx-auto bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-6"
      >
        <NuxtLink
          v-for="deletedCharacters in deletedCharacters"
          :key="deletedCharacters.id"
          :id="deletedCharacters.id"
          :to="`/personajes/${deletedCharacters.id}`"
        >
          <!-- <CharacterHead :id="deletedCharacters.head_id" :scale="i === 0 ? 5 : i === 1 ? 3 : 2" class="flex-shrink-0 mr-4" /> -->

          <div class="flex flex-col items-center gap-y-2">
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
              <CharacterRenderer
                :isDead="deletedCharacters.min_hp == 0"
                :bodyData="deletedCharacters.bodyGraphicData"
                :helmetData="deletedCharacters.helmetGraphicData"
                :weaponData="deletedCharacters.weaponGraphicData"
                :shieldData="deletedCharacters.shieldGraphicData"
                :headData="deletedCharacters.headGraphicData"
                background="https://i1.sndcdn.com/artworks-wclS76qZZbYHAhoX-yVPKnw-t500x500.jpg"
              />
            </div>
          </div>

          <h2 class="text-4xl text-gr gr-gold">{{ deletedCharacters.name }}</h2>
          <h2>Nivel: {{ deletedCharacters.level }}</h2>
          <h2>Ultimo login: {{ $dayjs(deletedCharacters.fecha_ingreso).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}</h2>
          <h2>WalletId: {{ deletedCharacters.eth_wallet_id }}</h2>
          <h2>Online: {{ deletedCharacters.is_logged }}</h2>
          <hr />
          <br />
        </NuxtLink>


      </ul>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes borrados en la cuenta.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData({ $axios }) {
    return {
      characters: await $axios.$get(`characters`),
      deletedCharacters: await $axios.$get(`characters/getAllDeletedCharacters`),
    };
  },
};
</script>

<style></style>
