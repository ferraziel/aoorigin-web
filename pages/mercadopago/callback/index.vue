<template>
  <div>Seteando token de mercadopago
    <span>{{ error }}</span>
  </div>
</template>

<script>
export default {
  async asyncData({ route, redirect, $axios }) {
    try {
      await $axios.get(`mercadopago/callback?code=${route.query.code}`);
      return redirect("/cuenta");
    } catch (error) {
      console.error(error);
      return {
        error: error.message,
      };
    }
  },
};
</script>
