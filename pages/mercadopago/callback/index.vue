<template>
  <div>Seteando token de mercadopago
    <span>{{ errorDisplay }}</span>
  </div>
</template>

<script>
export default {

  async asyncData({ route, redirect, $axios }) {
    let errorDisplay = "";
    console.log(666, route.query.code);
    try {
      await $axios.get(`mercadopago/callback?code=${route.query.code}`);
      return redirect("/cuenta");
    } catch (error) {
      console.log(error, route.query.code);
      errorDisplay = error.message
    }

    return {
      errorDisplay,
    }
  },
};
</script>
