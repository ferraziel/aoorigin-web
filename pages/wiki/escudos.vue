<template>
  <div class="container">
    <div
      v-if="shields.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Escudos</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Min Def</th>
              <th>Max Def</th>
              <th>Nivel Minimo</th>
              <th>Resistencia Magica</th>
              <th>Valor en Oro</th>
              <th>Lingote de Oro</th>
              <th>Lingote de Plata</th>
              <th>Lingote de Bronce</th>
              <th>Skills Herreria</th>
              <th>Clases Prohibidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="shield in shields" :key="shield.item_id">
              <td class="text-right">{{ shield.item_id }}</td>
              <td><img width="300px" :src="shield.Data.canvasImage" /></td>
              <td class="text-right">{{ shield.Data.NAME }}</td>
              <td class="text-right">{{ shield.Data.MINDEF }}</td>
              <td class="text-right">{{ shield.Data.MAXDEF }}</td>
              <td class="text-right">{{ shield.Data.MINELV }}</td>
              <td class="text-right">{{ shield.Data.RESISTENCIAMAGICA }}</td>
              <td class="text-right">{{ shield.Data.VALOR }}</td>
              <td class="text-right">{{ shield.Data.LINGO }}</td>
              <td class="text-right">{{ shield.Data.LINGP }}</td>
              <td class="text-right">{{ shield.Data.LINGH }}</td>
              <td class="text-right">{{ shield.Data.SKHERRERIA }}</td>
              <td class="text-right">{{shield.Data.CP1}} {{shield.Data.CP2}} {{shield.Data.CP3}} {{shield.Data.CP4}} {{shield.Data.CP5}} {{shield.Data.CP5}} {{shield.Data.CP7}} {{shield.Data.CP8}} {{shield.Data.CP9}} {{shield.Data.CP10}} {{shield.Data.CP11}} {{shield.Data.CP12}} {{shield.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando escudos.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shields: [],
    };
  },
  async fetch() {
    this.shields = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllShields");
  },
  head() {
    return {
      title: "Wiki - Escudos",
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
