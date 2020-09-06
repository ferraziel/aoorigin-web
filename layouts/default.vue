<template>
  <div class="min-h-screen pb-64" style="background: url('/assets/img/bg_texture.png') repeat">
    <Nuxt />
  </div>
</template>

<style>
:root {
  --gold: #c78300;
  --silver: #d3d3d3;
}

body {
  @apply text-white;
  background: url("/assets/img/bg_texture") repeat;
}

.text-input {
  @apply p-2 bg-gray-800;
}

.input-error {
  @apply border border-red-500;
}

#main-form {
  @apply w-full;
}

@screen sm {
  #main-form {
    width: 450px;
  }
}
</style>
