<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="magicResistanceItems.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Resistencia Magica</h2>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th><span title="Nivel Minimo" class="color-icon color-icon-md color-icon-minlvl"></span></th>
              <th><span title="Resistencia Magica" class="color-icon color-icon-md color-icon-resistenciamagica"></span></th>
              <th><span title="Valor en oro" class="color-icon color-icon-md color-icon-gold"></span></th>
              <th><span title="Lingotes de Oro" class="color-icon color-icon-md color-icon-lingoteoro"></span></th>
              <th><span title="Lingotes de Plata" class="color-icon color-icon-md color-icon-lingoteplata"></span></th>
              <th><span title="Lingotes de Bronce" class="color-icon color-icon-md color-icon-lingotehierro"></span></th>
              <th><span title="Skills Herreria" class="color-icon color-icon-md color-icon-herrero"></span></th>
              <th>Clases Permitidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="magicResistanceItem in magicResistanceItems" :key="magicResistanceItem.item_id">
              <td class="text-right">{{ magicResistanceItem.item_id }}</td>
              <td><img width="64px" :src="magicResistanceItem.Data.canvasImage" /></td>
              <td class="text-right">{{ magicResistanceItem.Data.NAME }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.MINELV }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.RESISTENCIAMAGICA }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.VALOR }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.LINGO }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.LINGP }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.LINGH }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.SKHERRERIA }}</td>
              <td class="text-right">{{ magicResistanceItem.Data.ClasesPermitidas }}</td>
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
    this.magicResistanceItems = await this.$axios.$get("/dats/getAllMagicResistance");
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

</style>
