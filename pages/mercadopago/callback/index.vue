<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ redirect, $axios }) {
    try {
      await $axios.post(`/mercadopago/callback?code=${this.$route.query.code}`);
      return redirect("/cuenta");
    } catch (e) {
      return redirect("/");
    }
  },
};
</script>
