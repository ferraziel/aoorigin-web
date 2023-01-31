<template>
  <div class="container">
    <div class="text-center mb-12">
      <br>
      <br>
      <h1 class="section-title">Landlords</h1>
      <span>Para ser un miembro de "Landlords" tenes que ser Patreon. Mas informacion en el siguiente <a target="blank" href="https://www.patreon.com/posts/guia-beneficios-63817246">link</a></span>


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
              <td>{{landlord.description}}</td>
              <td>{{landlord.patron_tier}}</td>
              <td>
                <div v-if="landlord.user">
                  <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                    <img :src="landlord.user.canvasImage" width="32px"/>
                  </div>

                  <span>{{landlord.user.name}}</span>
                </div>

              </td>
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
