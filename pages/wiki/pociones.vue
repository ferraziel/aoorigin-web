<template>
  <div class="container">
    <div
      v-if="potions.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Pociones</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th>Min Modificador</th>
              <th>Max Modificador</th>
              <th>Valor Oro</th>
              <th>Se puede tirar? </th>
              <th>Se cae al morir? </th>
              <th>Se puede transferir? </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="potion in potions" :key="potion.item_id">
              <td class="text-right">{{ potion.item_id }}</td>
              <td><img width="300px" :src="potion.Data.canvasImage" /></td>
              <td class="text-right">{{ potion.Data.NAME }}</td>
              <td class="text-right">{{potion.Data.TEXTO}}</td>
              <td class="text-right">{{ potion.Data.MINMODIFICADOR }}</td>
              <td class="text-right">{{ potion.Data.MAXMODIFICADOR }}</td>
              <td class="text-right">{{ potion.Data.VALOR }}</td>
              <td class="text-right"><span v-if="potion.Data.INTIRABLE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="potion.Data.NOSECAE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="potion.Data.INSTRANSFERIBLE">Sí</span><span v-else>No</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando pociones.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      potions: [],
    };
  },
  async fetch() {
    this.potions = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllPotions");
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
