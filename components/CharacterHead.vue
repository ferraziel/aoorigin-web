<template>
  <div>
    <figure
      v-if="head"
      :style="{
        '--scale': scale,
        '--x': `-${head.x}px`,
        '--y': `-${head.y}px`,
        '--w': `${head.width}px`,
        '--h': `${head.height}px`,
      }"
      class="character-head"
    ></figure>

    <div v-else>
      <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="https://www.w3.org/2000/svg">
        <path
          d="M7.875 7.29169C7.875 11.2199 11.0718 14.4167 15 14.4167C18.9283 14.4167 22.125 11.2199 22.125 7.29169C22.125 3.36344 18.9283 0.166687 15 0.166687C11.0718 0.166687 7.875 3.36344 7.875 7.29169ZM27.6667 30.25H29.25V28.6667C29.25 22.5566 24.2768 17.5834 18.1667 17.5834H11.8333C5.72167 17.5834 0.75 22.5566 0.75 28.6667V30.25H27.6667Z"
          fill="#404040"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import headCoords from "@/assets/head_coords.json";

export default {
  props: {
    scale: {
      type: Number,
      default: 3,
    },
    id: Number,
  },
  computed: {
    head() {
      return headCoords.find((h) => h.id === this.id);
    },
  },
};
</script>
