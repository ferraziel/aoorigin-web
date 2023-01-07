<template>
  <div class="container">
    <br>
    <br>
    <h2>Cofres por insignias</h2>
    <ul>
      <li>Cofre de Cascos y Escudos Legendarios | 4 Insignias Rojas | 4 Insignias Azules</li>
      <li>Cofre de Túnicas y Armaduras Legendarias  | 5 Insignias Rojas | 5 Insignias Azules</li>
      <li>Cofre de Armas Legendarias  | 6 Insignias Rojas | 6 Insignias Azules</li>
      <li>Cofre de Hechizos Legendarios  | 7 Insignias Rojas | 7 Insignias Azules</li>
    </ul>
    <div
      v-if="cofres.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Cofres</h2>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Items</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cofre in cofres" :key="cofre.item_id">
              <td class="text-right">{{ cofre.item_id }}</td>
              <td><img width="64px" :src="cofre.Data.canvasImage" /></td>
              <td class="text-right">{{ cofre.Data.NAME }}</td>
              <td class="text-right">{{ cofre.Data.TEXTO }}</td>
              <td class="text-right">
                <div v-for="item in cofre.Data.ITEMSCOFRE" :key="item.item_id">
                  <li>{{item}}</li>
                </div>
              </td>
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
