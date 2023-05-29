<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="patreonItems.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Items Patreon</h2>
      <p>
        Convertite en un Patron para obtener beneficios exclusivos in-game y acceso a canales privados de Discord. <a class="section-title" href="https://www.patreon.com/posts/guia-beneficios-63817246" target="_blank">Ver beneficios patreons</a>
      </p>

      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th>Puntos Patreon</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="patreonItem in patreonItems" :key="patreonItem.item_id">
              <td class="text-right">{{ patreonItem.item_id }}</td>
              <td><img width="64px" :src="patreonItem.Data.canvasImage" /></td>
              <td class="text-right">{{ patreonItem.Data.NAME }}</td>
              <td class="text-right">{{patreonItem.Data.TEXTO}}</td>
              <td class="text-right">{{patreonItem.Data.VALOR}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando items Patreon.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      patreonItems: [],
    };
  },
  async fetch() {
    this.patreonItems = await this.$axios.$get("/dats/getAllPatreonPointsItems");
  },
  head() {
    return {
      title: "Wiki - Patreon Items",
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
