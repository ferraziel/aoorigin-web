<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="flechas.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Flechas y Municiones</h2>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th>Min Hit</th>
              <th>Max Hit</th>
              <th>Valor Oro</th>
              <th>Lingote de Oro</th>
              <th>Lingote de Plata</th>
              <th>Lingote de Bronce</th>
              <th>Skills Herreria</th>
              <th>Madera</th>
              <th>Madera Elfica</th>
              <th>Skills Carpintera</th>
              <th>Clases Prohibidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="flecha in flechas" :key="flecha.item_id">
              <td class="text-right">{{ flecha.item_id }}</td>
              <td><img width="64px" :src="flecha.Data.canvasImage" /></td>
              <td class="text-right">{{ flecha.Data.NAME }}</td>
              <td class="text-right">{{flecha.Data.TEXTO}}</td>
              <td class="text-right">{{ flecha.Data.MINHIT }}</td>
              <td class="text-right">{{ flecha.Data.MAXHIT }}</td>
              <td class="text-right">{{ flecha.Data.VALOR }}</td>
              <td class="text-right">{{ flecha.Data.LINGO }}</td>
              <td class="text-right">{{ flecha.Data.LINGP }}</td>
              <td class="text-right">{{ flecha.Data.LINGH }}</td>
              <td class="text-right">{{ flecha.Data.SKHERRERIA }}</td>
              <td class="text-right">{{ flecha.Data.MADERA }}</td>
              <td class="text-right">{{ flecha.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ flecha.Data.SKCARPINTERIA }}</td>
              <td class="text-right">{{flecha.Data.CP1}} {{flecha.Data.CP2}} {{flecha.Data.CP3}} {{flecha.Data.CP4}} {{flecha.Data.CP5}} {{flecha.Data.CP5}} {{flecha.Data.CP7}} {{flecha.Data.CP8}} {{flecha.Data.CP9}} {{flecha.Data.CP10}} {{flecha.Data.CP11}} {{flecha.Data.CP12}} {{flecha.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando flechas y municiones.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      flechas: [],
    };
  },
  async fetch() {
    this.flechas = await this.$axios.$get("/dats/getAllFlechas");
  },
  head() {
    return {
      title: "Wiki - Flechas y Municiones",
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
