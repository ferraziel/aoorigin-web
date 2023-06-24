<template>
  <div class="container">
    <br>
    <br>

    <img src="@/assets/img/wiki/trabajadores-carritos.png" alt="Carritos de Trabajadores"/>

    <div
      v-if="tools.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Herramientas</h2>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th><span title="Valor en oro" class="color-icon color-icon-md color-icon-gold"></span></th>
              <th><span title="Skills Herreria" class="color-icon color-icon-md color-icon-herrero"></span></th>
              <th><span title="Lingotes de Oro" class="color-icon color-icon-md color-icon-lingoteoro"></span></th>
              <th><span title="Lingotes de Plata" class="color-icon color-icon-md color-icon-lingoteplata"></span></th>
              <th><span title="Lingotes de Bronce" class="color-icon color-icon-md color-icon-lingotehierro"></span></th>
              <th><span title="Madera" class="color-icon color-icon-md color-icon-madera"></span></th>
              <th><span title="Madera Elfica" class="color-icon color-icon-md color-icon-maderaelfica"></span></th>
              <th><span title="Skills Carpinteria" class="color-icon color-icon-md color-icon-carpintero"></span></th>

              <th>Clases Permitidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="tool in tools" :key="tool.item_id">
              <td class="text-right">{{ tool.item_id }}</td>
              <td><img width="64px" :src="tool.Data.canvasImage" /></td>
              <td class="text-right">{{ tool.Data.NAME }}</td>
              <td class="text-right">{{ tool.Data.TEXTO }}</td>
              <td class="text-right">{{ tool.Data.VALOR }}</td>
              <td class="text-right">{{ tool.Data.LINGO }}</td>
              <td class="text-right">{{ tool.Data.LINGP }}</td>
              <td class="text-right">{{ tool.Data.LINGH }}</td>
              <td class="text-right">{{ tool.Data.SKHERRERIA }}</td>
              <td class="text-right">{{ tool.Data.MADERA }}</td>
              <td class="text-right">{{ tool.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ tool.Data.SKCARPINTERIA }}</td>
              <td class="text-right">{{ tool.Data.ClasesPermitidas }}</td>
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
    this.tools = await this.$axios.$get("/dats/getAlltools");
  },
  head() {
    return {
      title: "Wiki - Herramientas",
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
