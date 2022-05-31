<template>
  <div class="container">
    <div
      v-if="weapons.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Armas</h1>
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
              <!-- <th>Nivel Minimo</th> -->
              <th>Oro</th>
              <th>Dos Manos</th>
              <th>Apuñala</th>
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
            <tr v-for="weapon in weapons" :key="weapon.item_id">
              <td class="text-right">{{ weapon.item_id }}</td>
              <td><img width="300px" :src="weapon.Data.canvasImage" /></td>
              <td class="text-right">{{ weapon.Data.NAME }}</td>
              <td class="text-right">{{weapon.Data.TEXTO}}</td>
              <td class="text-right">{{ weapon.Data.MINHIT }}</td>
              <td class="text-right">{{ weapon.Data.MAXHIT }}</td>
              <!-- <td class="text-right">{{ weapon.Data.MINELV }}</td> -->
              <td class="text-right">{{ weapon.Data.VALOR }}</td>
              <td class="text-right"><span v-if="weapon.Data.DOSMANOS">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="weapon.Data.APUÑALA">Sí</span><span v-else>No</span></td>
              <td class="text-right">{{ weapon.Data.LINGO }}</td>
              <td class="text-right">{{ weapon.Data.LINGP }}</td>
              <td class="text-right">{{ weapon.Data.LINGH }}</td>
              <td class="text-right">{{ weapon.Data.SKHERRERIA }}</td>
              <td class="text-right">{{ weapon.Data.MADERA }}</td>
              <td class="text-right">{{ weapon.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ weapon.Data.SKCARPINTERIA }}</td>
              <td class="text-right">{{weapon.Data.CP1}} {{weapon.Data.CP2}} {{weapon.Data.CP3}} {{weapon.Data.CP4}} {{weapon.Data.CP5}} {{weapon.Data.CP5}} {{weapon.Data.CP7}} {{weapon.Data.CP8}} {{weapon.Data.CP9}} {{weapon.Data.CP10}} {{weapon.Data.CP11}} {{weapon.Data.CP12}} {{weapon.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando armas.</p>
    </section>

    <div
      v-if="knuckles.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Nudillos para Artes Marciales</h1>
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
              <th>Oro</th>
              <th>Dos Manos</th>
              <th>Apuñala</th>
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
            <tr v-for="knuckles in knuckles" :key="knuckles.item_id">
              <td class="text-right">{{ knuckles.item_id }}</td>
              <td><img width="300px" :src="knuckles.Data.canvasImage" /></td>
              <td class="text-right">{{ knuckles.Data.NAME }}</td>
              <td class="text-right">{{knuckles.Data.TEXTO}}</td>
              <td class="text-right">{{ knuckles.Data.MINHIT }}</td>
              <td class="text-right">{{ knuckles.Data.MAXHIT }}</td>
              <td class="text-right">{{ knuckles.Data.VALOR }}</td>
              <td class="text-right"><span v-if="knuckles.Data.DOSMANOS">Sí</span><span v-else>No</span></td>
              <td class="text-right"><span v-if="knuckles.Data.APUÑALA">Sí</span><span v-else>No</span></td>
              <td class="text-right">{{ knuckles.Data.LINGO }}</td>
              <td class="text-right">{{ knuckles.Data.LINGP }}</td>
              <td class="text-right">{{ knuckles.Data.LINGH }}</td>
              <td class="text-right">{{ knuckles.Data.SKHERRERIA }}</td>
              <td class="text-right">{{ knuckles.Data.MADERA }}</td>
              <td class="text-right">{{ knuckles.Data.MADERAELFICA }}</td>
              <td class="text-right">{{ knuckles.Data.SKCARPINTERIA }}</td>
              <td class="text-right">{{knuckles.Data.CP1}} {{knuckles.Data.CP2}} {{knuckles.Data.CP3}} {{knuckles.Data.CP4}} {{knuckles.Data.CP5}} {{knuckles.Data.CP5}} {{knuckles.Data.CP7}} {{knuckles.Data.CP8}} {{knuckles.Data.CP9}} {{knuckles.Data.CP10}} {{knuckles.Data.CP11}} {{knuckles.Data.CP12}} {{knuckles.Data.CP13}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Nudillos para Artes Marciales.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      weapons: [],
      knuckles: [],
    };
  },
  async fetch() {
    this.weapons = await this.$axios.$get("/dats/getAllWeapons");
    this.knuckles = await this.$axios.$get("/dats/getAllKnuckles");
  },
  head() {
    return {
      title: "Wiki - Armas",
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
