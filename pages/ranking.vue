<template>
  <section class="container grid grid-cols-1 gap-8 xl:grid-cols-12">
    <div class="xl:col-span-2 flex flex-col space-y-4">
      <button
        v-if="classFilter || raceFilter || sortBy"
        @click="resetFilters"
        class="self-center btn btn-silver text-xs px-2 py-1"
      >
        Resetear Filtros
      </button>

      <div
        class="flex flex-wrap items-center justify-center space-x-4 xl:flex-col xl:items-stretch xl:justify-start xl:space-y-4 xl:space-x-0"
      >
        <div class="flex flex-col space-y-1">
          <p>Clase</p>
          <select name="class" v-model="classFilter">
            <option value="" disabled selected>Clase</option>
            <option value="1">Mago</option>
            <option value="2">Clerigo</option>
            <option value="3">Guerrero</option>
            <option value="4">Asesino</option>
            <option value="5">Bardo</option>
            <option value="6">Druida</option>
            <option value="7">Paladín</option>
            <option value="8">Cazador</option>
            <option value="9">Trabajador</option>
            <option value="10">Pirata</option>
            <option value="11">Ladrón</option>
            <option value="12">Bandido</option>
          </select>
        </div>

        <div class="flex flex-col space-y-1">
          <p>Raza</p>
          <select name="race" v-model="raceFilter">
            <option value="" disabled selected>Raza</option>
            <option value="1">Humano</option>
            <option value="2">Elfo</option>
            <option value="3">Elfo oscuro</option>
            <option value="4">Gnomo</option>
            <option value="5">Enano</option>
            <!-- <option value="6">Orco</option> -->
          </select>
        </div>

        <div class="flex flex-col space-y-1">
          <p>Ordenar por</p>
          <select name="sortBy" v-model="sortBy">
            <option value="" disabled selected>Ordenar por</option>
            <option value="level">Nivel</option>
            <option value="total_kills">Asesinatos</option>
            <option value="elo">ELO</option>
            <!-- <option value="6">Orco</option> -->
          </select>
        </div>
      </div>
    </div>

    <div class="xl:col-span-10 text-xl overflow-x-auto">
      <LoadingSpinner v-if="isFetching" />

      <table v-else-if="ranking.length" class="text-gray-400">
        <thead>
          <td></td>
          <td></td>
          <td>Nivel</td>
          <td>Clase</td>
          <td>Raza</td>
          <td>Asesinatos</td>
          <td>ELO</td>
        </thead>
        <tbody>
          <tr
            v-for="(character, i) in ranking"
            :key="character.id"
            :class="{
              'text-primary text-4xl': i === 0,
              'text-silver text-3xl': i === 1,
              'text-bronze text-2xl': i === 2,
            }"
          >
            <td>#{{ i + 1 }}</td>
            <td class="xl:break-all">
              <div class="flex items-center">
                <CharacterHead
                  :id="character.head_id"
                  :scale="i === 0 ? 5 : i === 1 ? 3 : 2"
                  class="flex-shrink-0 mr-4"
                />
                {{
                  character.character_name.length > 16 && i === 0
                    ? character.character_name.substring(0, 16) + "..."
                    : character.character_name
                }}
              </div>
            </td>
            <td :title="`Experiencia: ${character.exp} / ${character.exp_next_level}`" class="text-right">
              <div class="flex items-center">
                <span class="mr-1">{{ character.level }}</span>
                <span class="text-sm text-right"> ({{ (character.exp_percentage * 100).toFixed(2) }}%) </span>
              </div>
            </td>
            <td>{{ character.class_name }}</td>
            <td>{{ character.race_name }}</td>
            <td class="text-right">{{ character.total_kills }}</td>
            <td class="text-right">{{ character.elo }}</td>
          </tr>
        </tbody>
      </table>

      <div v-else>
        <p>Su búsqueda no ha dado ningún resultado.</p>
      </div>
    </div>
  </section>
</template>

<script>
function objectToQueryString(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export default {
  async asyncData({ $axios }) {
    const ranking = await $axios.$get("/rankings/users?top=100");
    return { ranking: ranking.characters };
    // return {
    //   ranking: [
    //     {
    //       id: 438,
    //       character_name: "elgordorevoleadordeapoka",
    //       class_id: 1,
    //       race_id: 1,
    //       genre_id: 1,
    //       head_id: 4,
    //       elo: 775,
    //       level: 45,
    //       exp: 1720734,
    //       total_gold: 261,
    //       total_kills: 2,
    //       race_name: "Humano",
    //       gender_name: "Hombre",
    //       class_name: "Mago",
    //       exp_next_level: 150906250,
    //       exp_percentage: 0.01140266887554359,
    //     },
    //     {
    //       id: 231,
    //       character_name: "SimP",
    //       class_id: 6,
    //       race_id: 1,
    //       genre_id: 1,
    //       head_id: 12,
    //       elo: 578,
    //       level: 46,
    //       exp: 1720734,
    //       total_gold: 261008,
    //       total_kills: 54,
    //       race_name: "Humano",
    //       gender_name: "Hombre",
    //       class_name: "Druida",
    //       exp_next_level: 150906250,
    //       exp_percentage: 0.430266887554359,
    //     },
    //     {
    //       id: 231,
    //       character_name: "Cacayi",
    //       class_id: 7,
    //       race_id: 1,
    //       genre_id: 1,
    //       head_id: 17,
    //       elo: 212,
    //       level: 46,
    //       exp: 1720734,
    //       total_gold: 261008,
    //       total_kills: 17,
    //       race_name: "Humano",
    //       gender_name: "Hombre",
    //       class_name: "Paladín",
    //       exp_next_level: 150906250,
    //       exp_percentage: 0.210266887554359,
    //     },
    //     {
    //       id: 2111,
    //       character_name: "PedritoX",
    //       class_id: 2,
    //       race_id: 1,
    //       genre_id: 1,
    //       head_id: 22,
    //       elo: 185,
    //       level: 41,
    //       exp: 1720734,
    //       total_gold: 261008,
    //       total_kills: 11,
    //       race_name: "Humano",
    //       gender_name: "Hombre",
    //       class_name: "Paladín",
    //       exp_next_level: 150906250,
    //       exp_percentage: 0.350266887554359,
    //     },
    //   ],
    // };
  },
  data() {
    return {
      isFetching: false,
      classFilter: "",
      raceFilter: "",
      sortBy: "",
    };
  },
  watch: {
    classFilter() {
      this.applyFilters();
    },
    raceFilter() {
      this.applyFilters();
    },
    sortBy() {
      this.applyFilters();
    },
  },
  methods: {
    async applyFilters() {
      this.isFetching = true;
      const obj = {};
      if (this.classFilter) obj["classId"] = this.classFilter;
      if (this.raceFilter) obj["raceId"] = this.raceFilter;
      if (this.sortBy) obj["sortBy"] = this.sortBy;
      const res = await this.$axios.$get(`/rankings/users?top=100&${objectToQueryString(obj)}`);
      this.ranking = res.characters;
      this.isFetching = false;
    },
    resetFilters() {
      this.classFilter = "";
      this.raceFilter = "";
      this.sortBy = "";
    },
  },
};
</script>

<style scoped>
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
