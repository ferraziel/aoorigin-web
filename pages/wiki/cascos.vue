<template>
  <div class="container">
    <div
      v-if="helmets.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Cascos / Sombreros</h1>
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
              <th>Skills Requeridos</th>
              <th>Valor en Oro</th>
              <th>Lingote de Oro</th>
              <th>Lingote de Plata</th>
              <th>Lingote de Bronce</th>
              <th>Skills Herreria</th>
              <th>Clases Prohibidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="helmet in helmets" :key="helmet.item_id">
              <td class="text-right">{{ helmet.item_id }}</td>
              <td><img width="300px" :src="helmet.Data.canvasImage" /></td>
              <td class="text-right">{{ helmet.Data.NAME }}</td>
              <td class="text-right">{{ helmet.Data.MINDEF }}</td>
              <td class="text-right">{{ helmet.Data.MAXDEF }}</td>
              <td class="text-right">{{ helmet.Data.MINELV }}</td>
              <td class="text-right">{{ helmet.Data.RESISTENCIAMAGICA }}</td>
              <td class="text-right">{{ helmet.Data.SKILLREQUERIDO }}</td>
              <td class="text-right">{{ helmet.Data.VALOR }}</td>
              <td class="text-right">{{ helmet.Data.LINGO }}</td>
              <td class="text-right">{{ helmet.Data.LINGP }}</td>
              <td class="text-right">{{ helmet.Data.LINGH }}</td>
              <td class="text-right">{{ helmet.Data.SKHERRERIA }}</td>
              <td class="text-right">{{helmet.Data.CP1}} {{helmet.Data.CP2}} {{helmet.Data.CP3}} {{helmet.Data.CP4}} {{helmet.Data.CP5}} {{helmet.Data.CP5}} {{helmet.Data.CP7}} {{helmet.Data.CP8}} {{helmet.Data.CP9}} {{helmet.Data.CP10}} {{helmet.Data.CP11}} {{helmet.Data.CP12}} {{helmet.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando cascos.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      helmets: [],
    };
  },
  async fetch() {
    this.helmets = await this.$axios.$get("dats/getAllHelmets");
  },
  head() {
    return {
      title: "Wiki - Cascos / Sombreros",
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
