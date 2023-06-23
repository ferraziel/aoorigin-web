<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="instrumentos.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Instrumentos Musicales</h2>
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
              <td><img width="64px" :src="instrumento.Data.canvasImage" /></td>
              <td class="text-right">{{ instrumento.Data.NAME }}</td>
              <td class="text-right">{{ instrumento.Data.DURACIONEFECTO }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando instrumentos musicales.</p>
    </section>

    <div
      v-if="instrumentosMagicos.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Instrumentos Musicales Magicos</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th><span title="No se Cae" class="color-icon color-icon-md color-icon-nosecae"></span></th>
              <th><span title="Intirable" class="color-icon color-icon-md color-icon-notirable"></span></th>
              <th><span title="Intransferible" class="color-icon color-icon-md color-icon-notransferible"></span></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="instrumentosMagico in instrumentosMagicos" :key="instrumentosMagico.item_id">
              <td class="text-right">{{ instrumentosMagico.item_id }}</td>
              <td><img width="64px" :src="instrumentosMagico.Data.canvasImage" /></td>
              <td class="text-right">{{ instrumentosMagico.Data.NAME }}</td>
              <td class="text-right"><span v-if="instrumentosMagico.Data.NOSECAE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="instrumentosMagico.Data.INTIRABLE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="instrumentosMagico.Data.INSTRANSFERIBLE">Sí</span><span v-else>No</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando instrumentos magicos.</p>
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
    this.instrumentos = await this.$axios.$get("/dats/getAllInstrumentosMusicales");
    this.instrumentosMagicos = await this.$axios.$get("/dats/getAllMagicDamage");
  },
  head() {
    return {
      title: "Wiki - Instrumentos Musicales",
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

</style>
