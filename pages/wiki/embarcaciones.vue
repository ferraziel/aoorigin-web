<template>
  <div class="container">
    <div
      v-if="embarcaciones.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Embarcaciones</h1>
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
              <th>Madera</th>
              <th>Madera Elfica</th>
              <th>Skills Carpinteria</th>
              <th>No se Cae</th>
              <th>Intirable</th>
              <th>Intransferible</th>
              <th>Clases Prohibidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="embarcacion in embarcaciones" :key="embarcacion.item_id">
              <td class="text-right">{{ embarcacion.item_id }}</td>
              <td><img width="300px" :src="embarcacion.Data.canvasImage" /></td>
              <td class="text-right">{{ embarcacion.Data.NAME }}</td>
              <td class="text-right">{{ embarcacion.Data.MINELV }}</td>
              <td class="text-right">{{ embarcacion.Data.SKILLREQUERIDO }}</td>
              <td class="text-right">{{ embarcacion.Data.VALOR }}</td>
              <td class="text-right">{{ embarcacion.Data.VELOCIDAD }}</td>
              <td class="text-right">{{ embarcacion.Data.MADERA }}</td>
              <td class="text-right">{{ embarcacion.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ embarcacion.Data.SKCARPINTERIA }}</td>
              <td class="text-right"><span v-if="embarcacion.Data.NOSECAE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="embarcacion.Data.INTIRABLE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="embarcacion.Data.INSTRANSFERIBLE">Sí</span><span v-else>No</span></td>
              <td class="text-right">{{embarcacion.Data.CP1}} {{embarcacion.Data.CP2}} {{embarcacion.Data.CP3}} {{embarcacion.Data.CP4}} {{embarcacion.Data.CP5}} {{embarcacion.Data.CP5}} {{embarcacion.Data.CP7}} {{embarcacion.Data.CP8}} {{embarcacion.Data.CP9}} {{embarcacion.Data.CP10}} {{embarcacion.Data.CP11}} {{embarcacion.Data.CP12}} {{embarcacion.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando embarcaciones.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      embarcaciones: [],
    };
  },
  async fetch() {
    this.embarcaciones = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllEmbarcaciones");
  },
  head() {
    return {
      title: "Wiki - Embarcaciones",
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
