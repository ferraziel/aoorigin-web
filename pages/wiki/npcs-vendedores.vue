<template>
  <div class="container">
    <div
      v-if="npcs.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Npcs</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Interes de items</th>
              <th>Items a la venta</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="npc in npcs" :key="npc.npc_id">
              <td class="text-right">{{ npc.npc_id }}</td>
              <td><img width="300px" :src="npc.canvasImage" /></td>
              <td class="text-right">{{ npc.NAME }}</td>
              <td class="text-right">{{ npc.DESC }}</td>
              <td class="text-right">{{ npc.TIPOITEMSNAME }}</td>
              <td class="text-right">
                <div v-if="npc.OBJSINFORMATION">
                  <div v-for="item in npc.OBJSINFORMATION" :key="item.item_id">
                    <img v-if="item.Data" :src="item.Data.canvasImage" :alt="item.Data.NAME" :title="item.Data.NAME" />
                    <span v-if="item.Data">{{item.Data.NAME}}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando npcs vendedores.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      npcs: [],
    };
  },
  async fetch() {
    this.npcs = await this.$axios.$get("https://localhost:5101/dats/getAllSellersNpcs");
    // this.npcs = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllSellersNpcs");
  },
  head() {
    return {
      title: "Wiki - Npcs Vendedores",
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
