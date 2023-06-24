<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="foods.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Armaduras</h2>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th><span title="Valor en oro" class="color-icon color-icon-md color-icon-gold"></span></th>
              <th>Restaura Hambre</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="food in foods" :key="food.item_id">
              <td class="text-right">{{ food.item_id }}</td>
              <td><img width="64px" :src="food.Data.canvasImage" /></td>
              <td class="text-right">{{ food.Data.NAME }}</td>
              <td class="text-right">{{ food.Data.TEXTO }}</td>
              <td class="text-right">{{ food.Data.VALOR }}</td>
              <td class="text-right">{{ food.Data.MINHAM }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="drinks.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Bebidas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Caracteristicas</th>
              <th><span title="Valor en oro" class="color-icon color-icon-md color-icon-gold"></span></th>
              <th>Restaura Sed</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="drink in drinks" :key="drink.item_id">
              <td class="text-right">{{ drink.item_id }}</td>
              <td><img width="64px" :src="drink.Data.canvasImage" /></td>
              <td class="text-right">{{ drink.Data.NAME }}</td>
              <td class="text-right">{{ drink.Data.TEXTO }}</td>
              <td class="text-right">{{ drink.Data.VALOR }}</td>
              <td class="text-right">{{ drink.Data.MINAGU }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Alimentos.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      foods: [],
      drinks: [],
    };
  },
  async fetch() {
    this.foods = await this.$axios.$get("/dats/getAllFoods");
    this.drinks = await this.$axios.$get("/dats/getAllDrinks");
  },
  head() {
    return {
      title: "Wiki - Alimentos",
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
