<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="cofres.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Cofres</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <!-- <th>Nombre</th> -->
              <th>Descripcion</th>
              <th>Items</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cofre in cofres" :key="cofre.item_id">
              <td class="text-right">{{ cofre.item_id }}</td>
              <td><img width="64px" :src="cofre.Data.canvasImage" /></td>
              <!-- <td class="text-right">{{ cofre.Data.NAME }}</td> -->
              <td class="text-right">{{ cofre.Data.TEXTO }}</td>
              <td class="text-right">{{ cofre.Data.ITEMSCOFRE }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Cofres.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cofres: [],
    };
  },
  async fetch() {
    this.cofres = await this.$axios.$get("/dats/getAllChests");
  },
  head() {
    return {
      title: "Wiki - Cofres",
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
