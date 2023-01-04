<template>
  <div class="container">
    <br>
    <br>
    <div v-if="craftedItems" class="bg-gray-900 border-2 border-gr border-gr-primary">
      <h2 class="section-title text-center mb-4 uppercase">Sastreria</h2>

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
                <th>Nivel Minimo</th>
                <th>Defensa</th>
                <th>Resistencia Magica</th>
                <th>Valor en Oro</th>
                <th>Piel Lobo</th>
                <th>Piel Oso Pardo</th>
                <th>Piel Oso Polar</th>
                <th>Skills Sastreria</th>
                <th>Clases Prohibidas</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in items" :key="item.item_id">
                <td class="text-right">{{ item.item_id }}</td>
                <td><img width="64px" :src="item.Data.canvasImage" /></td>
                <td class="text-right">{{ item.Data.NAME }}</td>
                <td class="text-right">{{ item.Data.TEXTO }}</td>
                <td class="text-right">{{ item.Data.MINELV }}</td>
                <td class="text-right">{{ item.Data.MINDEF }} / {{ item.Data.MAXDEF }}</td>
                <td class="text-right">{{ item.Data.RESISTENCIAMAGICA }}</td>
                <td class="text-right">{{ item.Data.VALOR }}</td>
                <td class="text-right">{{ item.Data.PIELLOBO }}</td>
                <td class="text-right">{{ item.Data.PIELOSOPARDO }}</td>
                <td class="text-right">{{ item.Data.PIELOSOPOLAR }}</td>
                <td class="text-right">{{ item.Data.SKSASTRERIA }}</td>
                <td class="text-right">
                  {{ item.Data.CP1 }} {{ item.Data.CP2 }} {{ item.Data.CP3 }} {{ item.Data.CP4 }} {{ item.Data.CP5 }}
                  {{ item.Data.CP5 }} {{ item.Data.CP7 }} {{ item.Data.CP8 }} {{ item.Data.CP9 }} {{ item.Data.CP10 }}
                  {{ item.Data.CP11 }} {{ item.Data.CP12 }} {{ item.Data.CP13 }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando items sastreria.</p>
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
    this.craftedItems = await this.$axios.$get("/dats/getAllCraftedTailor");
  },
  head() {
    return {
      title: "Wiki - Sastreria",
    };
  },
};
</script>

<style></style>
