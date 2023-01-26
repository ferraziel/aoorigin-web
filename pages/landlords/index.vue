<template>
  <div class="container">
    <div class="text-center mb-12">
      <br>
      <br>
      <h1 class="section-title">Landlords</h1>

      <div v-if="landlords.length">
        <!-- create table with landlord data -->
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Patron tier</th>
              <th>Propietarios</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="landlord in landlords" :key="landlord.description" :id="landlord.description">
              <th>{{landlord.description}}</th>
              <th>{{landlord.patron_tier}}</th>
              <th>
                <div v-for="user in landlord.users" :key="user.name" :id="user.name">
                  <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                    <img :src="user.canvasImage" width="64px"/>
                  </div>

                  <span>{{user.name}}</span>
                </div>

              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay landlords, vuelva a chequear mas tarde.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return {
      landlords: await $axios.$post(`users/getAllLandlords`),
    };
  },
};
</script>

<style></style>
