<template>
  <div class="container">
    <br>
    <br>
    <div v-if="craftedItems" class="bg-gray-900 border-2 border-gr border-gr-primary">
      <h2 class="section-title text-center mb-4 uppercase">Carpinteria</h2>

      <div class="xl:col-span-10 text-xs overflow-x-auto" v-for="(items, name) in craftedItems" :key="name">
        <div v-if="items.length > 0">
          <h1>{{ name }}</h1>
          <table class="text-gray-400">
            <thead>
              <tr>
                <th>Id</th>
                <th></th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Daño Magico</th>
                <th>Valor en Oro</th>
                <th>Madera</th>
                <th>Madera Elfica</th>
                <th>Skills Carpinteria</th>
                <th>Clases Permitidas</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in items" :key="item.item_id">
                <td class="text-right">{{ item.item_id }}</td>
                <td><img width="64px" :src="item.Data.canvasImage" /></td>
                <td class="text-right">{{ item.Data.NAME }}</td>
                <td class="text-right">{{ item.Data.TEXTO }}</td>
                <td class="text-right">{{ item.Data.MINHIT }} / {{ item.Data.MAXHIT }}</td>
                <td class="text-right">{{ item.Data.MINDEF }} / {{ item.Data.MAXDEF }}</td>
                <td class="text-right">{{ item.Data.MAGICDAMAGEBONUS }}</td>
                <td class="text-right">{{ item.Data.VALOR }}</td>
                <td class="text-right">{{ item.Data.MADERA }}</td>
                <td class="text-right">{{ item.Data.MADERAELFICA }}</td>
                <td class="text-right">{{ item.Data.SKCARPINTERIA }}</td>
                <td class="text-right">{{ item.Data.ClasesPermitidas }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando items carpinteria.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      craftedItems: null,
    };
  },
  async fetch() {
    this.craftedItems = await this.$axios.$get("/dats/getAllCraftedCarpenter");
  },
  head() {
    return {
      title: "Wiki - Carpinteria",
    };
  },
};
</script>

<style></style>

