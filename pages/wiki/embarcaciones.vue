<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="embarcaciones.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Navegacion</h2>

      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th><span title="Skills Requeridos" class="color-icon color-icon-md color-icon-skills"></span></th>
              <th><span title="Valor en oro" class="color-icon color-icon-md color-icon-gold"></span></th>
              <th><span title="Velocidad" class="color-icon color-icon-md color-icon-velocidad"></span></th>
              <th><span title="Madera" class="color-icon color-icon-md color-icon-madera"></span></th>
              <th><span title="Madera Elfica" class="color-icon color-icon-md color-icon-maderaelfica"></span></th>
              <th><span title="Skills Carpinteria" class="color-icon color-icon-md color-icon-carpintero"></span></th>
              <th><span title="No se Cae" class="color-icon color-icon-md color-icon-nosecae"></span></th>
              <th><span title="Intirable" class="color-icon color-icon-md color-icon-notirable"></span></th>
              <th><span title="Intransferible" class="color-icon color-icon-md color-icon-notransferible"></span></th>
              <th>Clases Permitidas</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="embarcacion in embarcaciones" :key="embarcacion.item_id">
              <td class="text-right">{{ embarcacion.item_id }}</td>
              <td><img width="64px" :src="embarcacion.Data.canvasImage" /></td>
              <td class="text-right">{{ embarcacion.Data.NAME }}</td>
              <td class="text-right">{{ embarcacion.Data.MINSKILL }}</td>
              <td class="text-right">{{ embarcacion.Data.VALOR }}</td>
              <td class="text-right">{{ embarcacion.Data.VELOCIDAD }}</td>
              <td class="text-right">{{ embarcacion.Data.MADERA }}</td>
              <td class="text-right">{{ embarcacion.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ embarcacion.Data.SKCARPINTERIA }}</td>
              <td class="text-right"><span v-if="embarcacion.Data.NOSECAE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="embarcacion.Data.INTIRABLE">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="embarcacion.Data.INSTRANSFERIBLE">Sí</span><span v-else>No</span></td>
              <td class="text-right">{{embarcacion.Data.ClasesPermitidas}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando embarcaciones.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      embarcaciones: [],
    };
  },
  async fetch() {
    this.embarcaciones = await this.$axios.$get("/dats/getAllEmbarcaciones");
  },
  head() {
    return {
      title: "Wiki - Embarcaciones",
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
