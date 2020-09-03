<template>
  <button
    class="inline-block border border-black relative uppercase tracking-wider focus:outline-none"
    :disabled="disabled || false"
  >
    <div class="border px-8 py-3">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: ["disabled"],
};
</script>

<style scoped>
button {
  background: linear-gradient(to top, #13282c, #436169);
}

button > div {
  border-color: #7b7063;
  border-image-slice: 1;
}

button:hover {
  box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.3);
}

button:hover > div {
  border-image-source: linear-gradient(to right, #7b7063, #ffb45b, #7b7063);
}

button:active {
  box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.2);
}

button:active > div {
  border-image-source: linear-gradient(to right, #7b7063, #b6864b, #7b7063);
}

button:disabled {
  background: linear-gradient(to top, #333333, #727272);
}

button:disabled:hover,
button:disabled:active {
  box-shadow: initial;
}

button:disabled:active > div,
button:disabled:hover > div {
  border-image-source: initial;
}
</style>
