<template>
  <div class="container">
    <div
      v-if="monturas.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Monturas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Nivel Minimo</th>
              <th>Skills Requeridos</th>
              <th>Valor en Oro</th>
              <th>Velocidad</th>
              <th>No se Cae</th>
              <th>Intirable</th>
              <th>Intransferible</th>
              <th>Clases Prohibidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="montura in monturas" :key="montura.item_id">
              <td class="text-right">{{ montura.item_id }}</td>
              <td><img width="300px" :src="montura.Data.canvasImage" /></td>
              <td class="text-right">{{ montura.Data.NAME }}</td>
              <td class="text-right">{{ montura.Data.MINELV }}</td>
              <td class="text-right">{{ montura.Data.SKILLREQUERIDO }}</td>
              <td class="text-right">{{ montura.Data.VALOR }}</td>
              <td class="text-right">{{ montura.Data.VELOCIDAD }}</td>
              <td class="text-right"><span v-if="montura.Data.NOSECAE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="montura.Data.INTIRABLE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="montura.Data.INSTRANSFERIBLE">Sí</span><span v-else>No</span></td>
              <td class="text-right">{{montura.Data.CP1}} {{montura.Data.CP2}} {{montura.Data.CP3}} {{montura.Data.CP4}} {{montura.Data.CP5}} {{montura.Data.CP5}} {{montura.Data.CP7}} {{montura.Data.CP8}} {{montura.Data.CP9}} {{montura.Data.CP10}} {{montura.Data.CP11}} {{montura.Data.CP12}} {{montura.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando monturas.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monturas: [],
    };
  },
  async fetch() {
    this.monturas = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllMonturas");
  },
  head() {
    return {
      title: "Wiki - Monturas",
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
