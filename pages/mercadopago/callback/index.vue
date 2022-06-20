<template>
  <div>Seteando token de mercadopago</div>
</template>

<script>
export default {
  async asyncData({ redirect, $axios }) {
    await $axios.post(`mercadopago/callback?code=${this.$route.query.code}`);
    return redirect("/cuenta");
  },
};
</script>
