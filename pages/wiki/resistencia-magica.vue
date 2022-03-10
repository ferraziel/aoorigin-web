<template>
  <div class="container">
    <div
      v-if="magicResistanceItems.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Resistencia Magica</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
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
            <tr v-for="magicResistanceItem in magicResistanceItems" :key="magicResistanceItem.item_id">
              <td class="text-right">{{ magicResistanceItem.item_id }}</td>
              <td><img width="300px" :src="magicResistanceItem.Data.canvasImage" /></td>
              <td class="text-right">{{ magicResistanceItem.Data.NAME }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.MINELV }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.RESISTENCIAMAGICA }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.VALOR }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.LINGO }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.LINGP }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.LINGH }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.SKHERRERIA }}</td>
              <td class="text-right">{{magicResistanceItem.Data.CP1}} {{magicResistanceItem.Data.CP2}} {{magicResistanceItem.Data.CP3}} {{magicResistanceItem.Data.CP4}} {{magicResistanceItem.Data.CP5}} {{magicResistanceItem.Data.CP5}} {{magicResistanceItem.Data.CP7}} {{magicResistanceItem.Data.CP8}} {{magicResistanceItem.Data.CP9}} {{magicResistanceItem.Data.CP10}} {{magicResistanceItem.Data.CP11}} {{magicResistanceItem.Data.CP12}} {{magicResistanceItem.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Resistencias Magicas.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      magicResistanceItems: [],
    };
  },
  async fetch() {
    this.magicResistanceItems = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllMagicResistance");
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
