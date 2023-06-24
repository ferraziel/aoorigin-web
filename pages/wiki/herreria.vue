<template>
  <div class="container">
    <br>
    <br>
    <div v-if="craftedItems" class="bg-gray-900 border-2 border-gr border-gr-primary">
      <h2 class="section-title text-center mb-4 uppercase">Herreria</h2>

      <img src="@/assets/img/wiki/lingotes-minerales.png" alt="Cantidad de Minerales por Lingote" class="w-40" />
      <span>Cantidad de Minerales por Lingote</span>

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
                <th><span title="Ataque" class="color-icon color-icon-md color-icon-maxhit"></span></th>
                <th><span title="Defensa" class="color-icon color-icon-md color-icon-maxdef"></span></th>
                <th><span title="Lingotes de Oro" class="color-icon color-icon-md color-icon-lingoteoro"></span></th>
                <th><span title="Lingotes de Plata" class="color-icon color-icon-md color-icon-lingoteplata"></span></th>
                <th><span title="Lingotes de Bronce" class="color-icon color-icon-md color-icon-lingotehierro"></span></th>
                <th><span title="Skills Herreria" class="color-icon color-icon-md color-icon-herrero"></span></th>
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
                <td class="text-right">{{ item.Data.LINGO }}</td>
                <td class="text-right">{{ item.Data.LINGP }}</td>
                <td class="text-right">{{ item.Data.LINGH }}</td>
                <td class="text-right">{{ item.Data.SKHERRERIA }}</td>
                <td class="text-right">{{ item.Data.ClasesPermitidas }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando items herreria.</p>
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
    this.craftedItems = await this.$axios.$get("/dats/getAllCraftedBlacksmith");
  },
  head() {
    return {
      title: "Wiki - Herreria",
    };
  },
};
</script>

<style></style>

