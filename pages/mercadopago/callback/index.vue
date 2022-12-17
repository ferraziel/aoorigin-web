<template>
  <div class="container">
    <br>
    <br>
    <br>

    <h1>Mercado Pago Token Callback</h1>
    <div>
      <span>{{ errorDisplay }}</span>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData({ route, redirect, $axios }) {
    let errorDisplay = "Luchando por el token....";
    try {
      await $axios.get(`mercadopago/callback?code=${route.query.code}`);
      return redirect("/cuenta");
    } catch (error) {
      console.error(error, route.query.code);
      errorDisplay = error.message + " -- " + error.response.data.message
    }

    return {
      errorDisplay,
    }
  },
};
</script>
