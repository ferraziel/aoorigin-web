<template>
  <figure
    :style="{
      '--scale': scale,
      '--x': `-${x}px`,
      '--y': `-${y}px`,
      '--w': `${w}px`,
      '--h': `${h}px`,
    }"
  ></figure>
</template>

<script>
export default {
  props: {
    x: Number,
    y: Number,
    w: Number,
    h: Number,
    scale: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
figure {
  width: calc(var(--w) * var(--scale));
  height: calc(var(--h) * var(--scale));
  background: url("/assets/img/heads_trimmed.png") no-repeat;
  background-position: top calc(var(--y) * var(--scale)) left calc(var(--x) * var(--scale));
  background-size: calc(512px * var(--scale));
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
</style>
