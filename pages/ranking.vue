<template>
  <main class="pt-24 md:pt-32 lg:pt-48">
    <section id="multimedia" class="">
      <h2 class="text-3xl md:text-4xl text-center text-gr gr-gold mb-4">Ranking</h2>
      <!-- <div v-for="(rank,i) in ranking" :key="i">
        {{rank.name}}
      </div> -->
      <div class="text-center">
        <button class="btn btn-silver" v-on:click="showRankingLevel()">
          Nivel
        </button>
        <button class="btn btn-silver" v-on:click="showRankingHealth()">
          Vida
        </button>
        <button class="btn btn-silver" v-on:click="showRankingGold()">
          Oro
        </button>
        <button class="btn btn-silver" v-on:click="showRankingKills()">
          Usuarios Matados
        </button>
        <button class="btn btn-silver" v-on:click="showRankingNpcs()">
          Npcs Matados
        </button>
      </div>

      <section id="sectionRankingLevel" class="container flex flex-col items-center" style="visibility:collapse">
        <div style="orientation:horizontal;margin-top:5px">
          <button class="btn btn-silver">
            Mago
          </button>
          <button class="btn btn-silver">
            Clérigo
          </button>
          <button class="btn btn-silver">
            Guerrero
          </button>
          <button class="btn btn-silver">
            Asesino
          </button>
          <button class="btn btn-silver">
            Bardo
          </button>
          <button class="btn btn-silver">
            Druida
          </button>
        </div>
        <div style="orientation:horizontal;margin-top:5px">
          <button class="btn btn-silver">
            Paladín
          </button>
          <button class="btn btn-silver">
            Cazador
          </button>
          <button class="btn btn-silver">
            Trabajador
          </button>
          <button class="btn btn-silver">
            Pirata
          </button>
          <button class="btn btn-silver">
            Ladrón
          </button>
          <button class="btn btn-silver">
            Bandido
          </button>
        </div>
        <table class="table-fixed border-separate">
          <thead>
            <th>
              Nombre
            </th>
            <th>
              Nivel
            </th>
            <th>
              Clase
            </th>
            <th>
              Raza
            </th>
          </thead>
          <tbody>
            <tr v-for="(rank,i) in rankingLevel" :key="i">
              <td>
                {{rank.name}}
              </td>
              <td>
                {{rank.level}}
              </td>
              <td>
                {{rank.class}}
              </td>
              <td>
                {{rank.race}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="sectionRankingHealth" class="container flex flex-col items-center" style="visibility:collapse">

        <div style="orientation:horizontal;margin-top:5px">
          <button class="btn btn-silver">
            Mago
          </button>
          <button class="btn btn-silver">
            Clérigo
          </button>
          <button class="btn btn-silver">
            Guerrero
          </button>
          <button class="btn btn-silver">
            Asesino
          </button>
          <button class="btn btn-silver">
            Bardo
          </button>
          <button class="btn btn-silver">
            Druida
          </button>
        </div>
        <div style="orientation:horizontal;margin-top:5px">
          <button class="btn btn-silver">
            Paladín
          </button>
          <button class="btn btn-silver">
            Cazador
          </button>
          <button class="btn btn-silver">
            Trabajador
          </button>
          <button class="btn btn-silver">
            Pirata
          </button>
          <button class="btn btn-silver">
            Ladrón
          </button>
          <button class="btn btn-silver">
            Bandido
          </button>
        </div>

        <table class="table-fixed border-separate">
          <thead>
            <th>
              Nombre
            </th>
            <th>
              Vida
            </th>
          </thead>
          <tbody>
            <tr class="bg-blue-5" v-for="(rank,i) in rankingHealth" :key="i">
              <td>
                {{rank.name}}
              </td>
              <td>
                {{rank.health}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="sectionRankingGold" class="container flex flex-col items-center" style="visibility:collapse">
        <table class="table-fixed border-separate">
          <thead>
            <th>
              Nombre
            </th>
            <th>
              Oro
            </th>
          </thead>
          <tbody>
            <tr class="bg-blue-5" v-for="(rank,i) in rankingGold" :key="i">
              <td>
                {{rank.name}}
              </td>
              <td>
                {{rank.gold}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="sectionRankingKills" class="container flex flex-col items-center" style="visibility:collapse">
        <table class="table-fixed border-separate">
          <thead>
            <th>
              Nombre
            </th>
            <th style="color: blue">
              Ciudadanos Matados
            </th>
            <th style="color: red">
              Criminales Matados
            </th>
            <th>
              Total
            </th>
          </thead>
          <tbody>
            <tr class="bg-blue-5" v-for="(rank,i) in rankingKills" :key="i">
              <td>
                {{rank.name}}
              </td>
              <td>
                {{rank.ciudadanos_matados}}
              </td>
              <td>
                {{rank.criminales_matados}}
              </td>
              <td>
                {{rank.kills}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="sectionRankingNpcs" class="container flex flex-col items-center" style="visibility:collapse">
        <table class="table-fixed border-separate">
          <thead>
            <th>
              Nombre
            </th>
            <th>
              Npcs Matados
            </th>
          </thead>
          <tbody>
            <tr class="bg-blue-5" v-for="(rank,i) in rankingNpcs" :key="i">
              <td>
                {{rank.name}}
              </td>
              <td>
                {{rank.npcKills}}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  methods:{
    showRankingLevel: function () {
      document.getElementById("sectionRankingLevel").style.visibility = "visible";
      document.getElementById("sectionRankingHealth").style.visibility = "collapse";
      document.getElementById("sectionRankingGold").style.visibility = "collapse";
      document.getElementById("sectionRankingNpcs").style.visibility = "collapse";
      document.getElementById("sectionRankingKills").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.maxHeight = "0px";
      document.getElementById("sectionRankingGold").style.maxHeight = "0px";
      document.getElementById("sectionRankingNpcs").style.maxHeight = "0px";
      document.getElementById("sectionRankingKills").style.maxHeight = "0px";
      document.getElementById("sectionRankingLevel").style.maxHeight = "500px";
    },
    showRankingHealth: function () {
      document.getElementById("sectionRankingLevel").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.visibility = "visible";
      document.getElementById("sectionRankingGold").style.visibility = "collapse";
      document.getElementById("sectionRankingNpcs").style.visibility = "collapse";
      document.getElementById("sectionRankingKills").style.visibility = "collapse";
      document.getElementById("sectionRankingLevel").style.maxHeight = "0px";
      document.getElementById("sectionRankingGold").style.maxHeight = "0px";
      document.getElementById("sectionRankingNpcs").style.maxHeight = "0px";
      document.getElementById("sectionRankingKills").style.maxHeight = "0px";
      document.getElementById("sectionRankingHealth").style.maxHeight = "500px";
    },
    showRankingGold: function () {
      document.getElementById("sectionRankingLevel").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.visibility = "collapse";
      document.getElementById("sectionRankingGold").style.visibility = "visible";
      document.getElementById("sectionRankingNpcs").style.visibility = "collapse";
      document.getElementById("sectionRankingKills").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.maxHeight = "0px";
      document.getElementById("sectionRankingLevel").style.maxHeight = "0px";
      document.getElementById("sectionRankingNpcs").style.maxHeight = "0px";
      document.getElementById("sectionRankingKills").style.maxHeight = "0px";
      document.getElementById("sectionRankingGold").style.maxHeight = "500px";
    },
    showRankingNpcs: function () {
      document.getElementById("sectionRankingLevel").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.visibility = "collapse";
      document.getElementById("sectionRankingGold").style.visibility = "collapse";
      document.getElementById("sectionRankingNpcs").style.visibility = "visible";
      document.getElementById("sectionRankingKills").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.maxHeight = "0px";
      document.getElementById("sectionRankingGold").style.maxHeight = "0px";
      document.getElementById("sectionRankingLevel").style.maxHeight = "0px";
      document.getElementById("sectionRankingKills").style.maxHeight = "0px";
      document.getElementById("sectionRankingNpcs").style.maxHeight = "500px";
    },
    showRankingKills: function () {
      document.getElementById("sectionRankingLevel").style.visibility = "collapse";
      document.getElementById("sectionRankingHealth").style.visibility = "collapse";
      document.getElementById("sectionRankingGold").style.visibility = "collapse";
      document.getElementById("sectionRankingNpcs").style.visibility = "collapse";
      document.getElementById("sectionRankingKills").style.visibility = "visible";
      document.getElementById("sectionRankingHealth").style.maxHeight = "0px";
      document.getElementById("sectionRankingGold").style.maxHeight = "0px";
      document.getElementById("sectionRankingNpcs").style.maxHeight = "0px";
      document.getElementById("sectionRankingLevel").style.maxHeight = "0px";
      document.getElementById("sectionRankingKills").style.maxHeight = "500px";
    },
  },
  async asyncData({ redirect, $axios, params }) {
    try {
      const rankingLevel = await $axios.$get(`/rankings/level`);
      const rankingHealth = await $axios.$get(`/rankings/health`);
      const rankingKills = await $axios.$get(`/rankings/kills`);
      const rankingGold = await $axios.$get(`/rankings/gold`);
      const rankingNpcs = await $axios.$get(`/rankings/npcs`);
      return {rankingLevel,rankingHealth,rankingKills,rankingGold,rankingNpcs};

    } catch (e) {
      return redirect("/");
    }
  }

}

</script>

<style>
table {
    margin-top: 20px;
  }
table, th, td {
  border: 1px solid whitesmoke;
}

th{
  color: #e2a703;
}

td{
  text-align: center;
  min-width: 100px;
}

td:first-child{
  min-width: 150px;
}
</style>
