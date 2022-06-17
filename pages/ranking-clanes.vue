<template>
  <div class="container">
    <div
      v-if="rankingGuilds.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Ranking Clanes</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fundador</th>
              <th>Fecha Creacion</th>
              <th>Alineacion</th>
              <th>Ultimas Elecciones</th>
              <th>Descripcion</th>
              <th>Novedades</th>
              <th>Lider</th>
              <th>Nivel</th>
              <th>Miembros</th>
              <th>Cantidad Miembros</th>
              <th>Cantidad Solicitudes para Ingreso</th>
              <!-- <th>Oro total de todos los miembros</th> -->
            </tr>
          </thead>

          <tbody>
            <tr v-for="guild in rankingGuilds" :key="guild.item_id">
              <td class="text-right">{{ guild.GUILDNAME }}</td>
              <td class="text-right">{{ guild.FOUNDER }}</td>
              <td class="text-right">{{ guild.DATE }}</td>
              <td class="text-right">{{ guild.ALINEACION }}</td>
              <td class="text-right">{{ guild.ULTIMASELECCIONES }}</td>
              <td class="text-right">{{ guild.DESC }}</td>
              <td class="text-right">{{ guild.GUILDNEWS }}</td>
              <td class="text-right">{{ guild.LEADER }}</td>
              <td class="text-right">{{ guild.NIVELDECLAN }}</td>
              <td class="text-right">{{ guild.MEMBERS }}</td>
              <td class="text-right">{{ guild.QTY_MEMBERS }}</td>
              <td class="text-right">{{ guild.QTY_SOLICITUDES_INGRESO }}</td>
              <!-- <td class="text-right">{{ guild.TOTAL_GOLD_FROM_MEMBERS }}</td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Ranking Clanes.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      rankingGuilds: [],
    };
  },
  async fetch() {
    this.rankingGuilds = await this.$axios.$get("guilds/getAll");
  },
  head() {
    return {
      title: "Ranking - Clanes",
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
