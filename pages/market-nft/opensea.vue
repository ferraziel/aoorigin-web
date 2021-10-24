<template>
  <iframe :src="`${openseaIframeUrl}`"
        height='1300px'
        width='100%'
        frameborder='2'
        allowfullscreen>
  </iframe>

</template>

<script>

export default {
  data() {
    return {
      openseaIframeUrl: process.env.OPENSEA_IFRAME_URL
    }
  },
  head() {
    return {
      title: "Market NFT",
    };
  },
};
</script>

<style>
</style>
