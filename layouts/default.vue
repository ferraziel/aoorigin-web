<template>
  <div id="base" class="min-h-screen">
    <Nav v-if="!$route.query.hideHeaderAndFooter || $route.query.hideHeaderAndFooter !== 'true'" />

    <div>
      <Nuxt class="pt-24" />
    </div>

    <Footer v-if="!$route.query.hideHeaderAndFooter || $route.query.hideHeaderAndFooter !== 'true'" />
  </div>
</template>


<script>
export default {};
</script>

<style></style>
