<template>
  <div id="base" class="min-h-screen">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --gold: #c78300;
  --silver: #d3d3d3;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply text-white overflow-x-hidden;
}

#base {
  background: url("/assets/img/bg_texture.png") repeat;
}

a {
  @apply transition-colors duration-150 ease-out;
}

.nuxt-link-exact-active:not(.main-title) {
  @apply text-yellow-600;
  text-shadow: 0px 0px 13px #fff;
}

.vertical-separator {
  width: 2px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), #adadad, rgba(255, 255, 255, 0));
  border-radius: 100%;
}

.text-gr {
  @apply bg-clip-text text-transparent bg-gradient-to-t;
}

.border-gr {
  border-image-slice: 1;
}

.gr-gold {
  @apply from-gold to-white;
}

.gr-silver {
  @apply from-silver to-white;
}

.border-gr-silver {
  border-image-source: linear-gradient(to right, #666, #fff, #666);
}

.border-gr-gold {
  border-image-source: linear-gradient(to right, #8c5d00, #ffbe15, #8c5d00);
}

.text-input {
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #666, #fff, #666);
}

.text-input {
  @apply py-2 px-3 border;
  background-color: #392919;
  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.75);
}

.text-input:focus {
  border-image-source: linear-gradient(to right, #8c5d00, #ffbe15, #8c5d00);
}

.text-input.input-error {
  border-image-slice: intial;
  border-image-source: initial;
  @apply border-red-500;
}

.text-input.input-error:focus {
  @apply border-red-500;
}

.btn {
  @apply transition duration-150 ease-out font-serif font-bold uppercase tracking-wide py-3 px-4 border inline-block;
}

.btn:hover {
  box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.2);
}

.btn:focus {
  @apply outline-none;
  box-shadow: inset 0 0 20px rgba(255, 190, 21, 0.2);
}

.btn-silver {
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #666, #fff, #666);
  @apply bg-gray-900 text-white;
}

.btn-silver:focus {
  border-image-source: linear-gradient(to right, #8c5d00, #ffbe15, #8c5d00);
}

.btn-silver:disabled {
  @apply text-gray-700 border-gray-700;
}

.text-shadow {
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.65);
}

.no-select {
  @apply pointer-events-none;
  user-select: none;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 200ms ease-out;
}
.mobile-menu-enter, .mobile-menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(25px);
}

@screen sm {
  #recovery-form {
    max-width: 640px;
  }
}

.lds-dual-ring {
  display: inline-block;
  width: 24px;
  height: 24px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 6px solid #2b6cb0;
  border-color: #2b6cb0 transparent #2b6cb0 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.section-divider {
  display: block;
  background: url(/assets/img/divider.png) center center no-repeat;
  height: 43px;
  width: auto;
}
</style>
