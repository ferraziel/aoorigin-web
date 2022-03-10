<template>
  <div class="container">
    <div
      v-if="spells.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Hechizos</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Min Hit</th>
              <th>Max Hit</th>
              <th>Sube HP</th>
              <th>Skills en Magia</th>
              <th>Palabras Magicas</th>
              <th>Mana</th>
              <th>Stamina</th>
              <th>Necesita Vara</th>
              <th>Clases Prohibidas</th>
              <th>Valor Oro</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="spell in spells" :key="spell.item_id">
              <td><img v-if="spell.Data" width="300px" :src="spell.Data.canvasImage" /></td>
              <td class="text-right">{{ spell.spell_id }}</td>
              <td class="text-right">{{ spell.NOMBRE }}</td>
              <td class="text-right">{{ spell.DESC }}</td>
              <td class="text-right">{{ spell.MINHP }}</td>
              <td class="text-right">{{ spell.MAXHP }}</td>
              <td class="text-right">{{ spell.SUBEHP }}</td>
              <td class="text-right">{{ spell.MINSKILL }}</td>
              <td class="text-right">{{ spell.PALABRASMAGICAS }}</td>
              <td class="text-right">{{ spell.MANAREQUERIDO }}</td>
              <td class="text-right">{{ spell.STAREQUERIDO }}</td>
              <td class="text-right"><span v-if="spell.NEEDSTAFF">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="spell.Data">{{spell.Data.CP1}} {{spell.Data.CP2}} {{spell.Data.CP3}} {{spell.Data.CP4}} {{spell.Data.CP5}} {{spell.Data.CP5}} {{spell.Data.CP7}} {{spell.Data.CP8}} {{spell.Data.CP9}} {{spell.Data.CP10}} {{spell.Data.CP11}} {{spell.Data.CP12}} {{spell.Data.CP13}}</span></td>
              <td class="text-right"><span v-if="spell.Data">{{ spell.Data.VALOR }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando hechizos.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spells: [],
    };
  },
  async fetch() {
    this.spells = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllSpells");

  },
  head() {
    return {
      title: "Wiki - Hechizos",
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
