<template>
  <div class="container">
    <div
      v-if="armours.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Armaduras</h1>
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
            <tr v-for="armour in armours" :key="armour.item_id">
              <td class="text-right">{{ armour.item_id }}</td>
              <td><img width="300px" :src="armour.Data.canvasImage" /></td>
              <td class="text-right">{{ armour.Data.NAME }}</td>
              <td class="text-right">{{ armour.Data.MINDEF }}</td>
              <td class="text-right">{{ armour.Data.MAXDEF }}</td>
              <td class="text-right">{{ armour.Data.MINELV }}</td>
              <td class="text-right">{{ armour.Data.RESISTENCIAMAGICA }}</td>
              <td class="text-right">{{ armour.Data.SKILLREQUERIDO }}</td>
              <td class="text-right">{{ armour.Data.VALOR }}</td>
              <td class="text-right">{{ armour.Data.LINGO }}</td>
              <td class="text-right">{{ armour.Data.LINGP }}</td>
              <td class="text-right">{{ armour.Data.LINGH }}</td>
              <td class="text-right">{{ armour.Data.SKHERRERIA }}</td>
              <td class="text-right">{{armour.Data.CP1}} {{armour.Data.CP2}} {{armour.Data.CP3}} {{armour.Data.CP4}} {{armour.Data.CP5}} {{armour.Data.CP5}} {{armour.Data.CP7}} {{armour.Data.CP8}} {{armour.Data.CP9}} {{armour.Data.CP10}} {{armour.Data.CP11}} {{armour.Data.CP12}} {{armour.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando armaduras.</p>
    </section>

    <div
      v-if="armoursFacciones.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Armaduras Faccionarias</h1>
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
            <tr v-for="armourFacciones in armoursFacciones" :key="armourFacciones.item_id">
              <td class="text-right">{{ armourFacciones.item_id }}</td>
              <td><img width="300px" :src="armourFacciones.Data.canvasImage" /></td>
              <td class="text-right">{{ armourFacciones.Data.NAME }}</td>
              <td class="text-right">{{ armourFacciones.Data.MINDEF }}</td>
              <td class="text-right">{{ armourFacciones.Data.MAXDEF }}</td>
              <td class="text-right">{{ armourFacciones.Data.MINELV }}</td>
              <td class="text-right">{{ armourFacciones.Data.RESISTENCIAMAGICA }}</td>
              <td class="text-right">{{ armourFacciones.Data.SKILLREQUERIDO }}</td>
              <td class="text-right">{{ armourFacciones.Data.VALOR }}</td>
              <td class="text-right">{{ armourFacciones.Data.LINGO }}</td>
              <td class="text-right">{{ armourFacciones.Data.LINGP }}</td>
              <td class="text-right">{{ armourFacciones.Data.LINGH }}</td>
              <td class="text-right">{{ armourFacciones.Data.SKHERRERIA }}</td>
              <td class="text-right">{{armourFacciones.Data.CP1}} {{armourFacciones.Data.CP2}} {{armourFacciones.Data.CP3}} {{armourFacciones.Data.CP4}} {{armourFacciones.Data.CP5}} {{armourFacciones.Data.CP5}} {{armourFacciones.Data.CP7}} {{armourFacciones.Data.CP8}} {{armourFacciones.Data.CP9}} {{armourFacciones.Data.CP10}} {{armourFacciones.Data.CP11}} {{armourFacciones.Data.CP12}} {{armourFacciones.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando armaduras faccionarias.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      armours: [],
      armoursFacciones: [],
    };
  },
  async fetch() {
    this.armours = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllArmours");
    this.armoursFacciones = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllArmoursFacciones");
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
