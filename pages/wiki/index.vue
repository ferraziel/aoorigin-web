<template>
  <div class="container">
    <div
      v-if="weapons.length"
      class="max-w-screen-md mx-auto bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-6"
    >
      <h1>Armas</h1>
      <div class="xl:col-span-10 text-s overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <!-- <th>Caracteristicas</th> -->
              <th>Min Hit</th>
              <th>Max Hit</th>
              <th>Valor en Oro</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="weapon in weapons" :key="weapon.item_id">
              <td class="text-right mr-1">{{ weapon.item_id }}</td>
              <td><img :src="weapon.Data.canvasImage" /></td>
              <td class="text-right mr-1">{{ weapon.Data.NAME }}</td>
              <!-- <td class="text-right mr-1">{{weapon.Data.TEXTO}}</td> -->
              <td class="text-right mr-1">{{ weapon.Data.MINHIT }}</td>
              <td class="text-right mr-1">{{ weapon.Data.MAXHIT }}</td>
              <td class="text-right mr-1">{{ weapon.Data.VALOR }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Aún no hay noticias.</p>
    </section>
  </div>
</template>

<script>
import parser from "fast-xml-parser";

export default {
  data() {
    return {
      weapons: [],
    };
  },
  async fetch() {
    this.weapons = await this.$axios.$get("dats/getAllWeapons");
  },
  head() {
    return {
      title: "Wiki",
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
