<template>
  <div
    class="p-4 border flex items-start gap-x-2"
    :class="{
      'border-green-400 bg-green-200 text-green-800': status == 'OK',
      'border-red-400 bg-red-200 text-red-800': status == 'ERROR',
      'border-blue-400 bg-blue-200 text-blue-800': status == 'PENDING',
      floating: isFloating,
    }"
    v-show="status != null"
  >
    <div class="lds-dual-ring" v-if="status == 'PENDING'"></div>
    <i class="fal fa-check-circle fa-lg" v-else-if="status == 'OK'"></i>
    <i class="fal fa-times-circle fa-lg" v-else-if="status == 'ERROR'"></i>
    <div>
      <p v-if="message" v-html="message" class="-mt-1"></p>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  props: ["status", "message", "isFloating"],
};
</script>

<style>
.floating {
  @apply fixed max-w-xs;
  bottom: 3rem;
  right: 3rem;
}
</style>
