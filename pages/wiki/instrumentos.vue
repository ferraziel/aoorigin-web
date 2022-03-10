<template>
  <div class="container">
    <div
      v-if="instrumentos.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Instrumentos musicales</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Duracion Efecto</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="instrumento in instrumentos" :key="instrumento.item_id">
              <td class="text-right">{{ instrumento.item_id }}</td>
              <td><img width="300px" :src="instrumento.Data.canvasImage" /></td>
              <td class="text-right">{{ instrumento.Data.NAME }}</td>
              <td class="text-right">{{ instrumento.Data.DURACIONEFECTO }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="instrumentosMagicos.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>instrumentosMagicos musicales</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Duracion Efecto</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="instrumentosMagico in instrumentosMagicos" :key="instrumentosMagico.item_id">
              <td class="text-right">{{ instrumentosMagico.item_id }}</td>
              <td><img width="300px" :src="instrumentosMagico.Data.canvasImage" /></td>
              <td class="text-right">{{ instrumentosMagico.Data.NAME }}</td>
              <td class="text-right">{{ instrumentosMagico.Data.DURACIONEFECTO }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando instrumentos musicales.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instrumentos: [],
      instrumentosMagicos: [],
    };
  },
  async fetch() {
    this.instrumentos = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllInstrumentosMusicales");
    this.instrumentosMagicos = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllMagicDamage");
  },
  head() {
    return {
      title: "Wiki - Armaduras",
    };
  },
};
</script>

<style>

select:required:invalid {
  color: gray;
}

option[value=""][disabled] {
  display: none;
}

td {
  @apply bg-gray-900 p-4 border border-gray-200;
}

</style>
