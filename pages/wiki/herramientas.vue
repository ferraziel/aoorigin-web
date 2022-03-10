<template>
  <div class="container">
    <div
      v-if="tools.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Herramientas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th>Valor Oro</th>
              <th>Skills Herreria</th>
              <th>Lingote de Oro</th>
              <th>Lingote de Plata</th>
              <th>Lingote de Bronce</th>
              <th>Madera</th>
              <th>Madera Elfica</th>
              <th>Skills Carpinteria</th>
              <th>Clases Prohibidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="tool in tools" :key="tool.item_id">
              <td class="text-right">{{ tool.item_id }}</td>
              <td><img width="300px" :src="tool.Data.canvasImage" /></td>
              <td class="text-right">{{ tool.Data.NAME }}</td>
              <td class="text-right">{{tool.Data.TEXTO}}</td>
              <td class="text-right">{{ tool.Data.VALOR }}</td>
              <td class="text-right">{{ tool.Data.LINGO }}</td>
              <td class="text-right">{{ tool.Data.LINGP }}</td>
              <td class="text-right">{{ tool.Data.LINGH }}</td>
              <td class="text-right">{{ tool.Data.SKHERRERIA }}</td>
              <td class="text-right">{{ tool.Data.MADERA }}</td>
              <td class="text-right">{{ tool.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ tool.Data.SKCARPINTERIA }}</td>
              <td class="text-right">{{tool.Data.CP1}} {{tool.Data.CP2}} {{tool.Data.CP3}} {{tool.Data.CP4}} {{tool.Data.CP5}} {{tool.Data.CP5}} {{tool.Data.CP7}} {{tool.Data.CP8}} {{tool.Data.CP9}} {{tool.Data.CP10}} {{tool.Data.CP11}} {{tool.Data.CP12}} {{tool.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Herramientas.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tools: [],
    };
  },
  async fetch() {
    this.tools = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAlltools");
  },
  head() {
    return {
      title: "Wiki - Armas",
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
