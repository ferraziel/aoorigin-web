<template>
  <div class="container">
    <section>
      <br>
      <br>
      <h1 class="section-title text-center mb-4 uppercase">Wiki / Guia de Juego</h1>
      <p class="text-center mb-8">Esta wiki toma dinámicamente los datos desde los archivos del juego, por lo que está siempre actualizada.</p>

      <!-- Items container -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mb-6 content-rte text-xl gap-4">
          <div><NuxtLink to="/wiki/escudos" class="btn-wiki-cat btn bg-brown-texture btn-silver">Escudos</NuxtLink></div>
          <div><NuxtLink to="/wiki/armaduras" class="btn-wiki-cat btn bg-brown-texture btn-silver">Armaduras</NuxtLink></div>
          <div><NuxtLink to="/wiki/armas" class="btn-wiki-cat btn bg-brown-texture btn-silver">Armas</NuxtLink></div>
          <div><NuxtLink to="/wiki/cascos" class="btn-wiki-cat btn bg-brown-texture btn-silver">Cascos</NuxtLink></div>
          <div><NuxtLink to="/wiki/monturas" class="btn-wiki-cat btn bg-brown-texture btn-silver">Monturas</NuxtLink></div>
          <div><NuxtLink to="/wiki/hechizos" class="btn-wiki-cat btn bg-brown-texture btn-silver">Hechizos</NuxtLink></div>
          <div><NuxtLink to="/wiki/npcs" class="btn-wiki-cat btn bg-brown-texture btn-silver">Npcs</NuxtLink></div>
          <div><NuxtLink to="/wiki/quests" class="btn-wiki-cat btn bg-brown-texture btn-silver">Quests</NuxtLink></div>
          <div><NuxtLink to="/wiki/balance" class="btn-wiki-cat btn bg-brown-texture btn-silver">Balance</NuxtLink></div>
          <div><NuxtLink to="/wiki/alimentos" class="btn-wiki-cat btn bg-brown-texture btn-silver">Alimentos</NuxtLink></div>
          <div><NuxtLink to="/wiki/resistencia-magica" class="btn-wiki-cat btn bg-brown-texture btn-silver">Resistencia Magica</NuxtLink></div>
          <div><NuxtLink to="/wiki/instrumentos" class="btn-wiki-cat btn bg-brown-texture btn-silver">Instrumentos Musicales</NuxtLink></div>
          <div><NuxtLink to="/wiki/flechas-municiones" class="btn-wiki-cat btn bg-brown-texture btn-silver">Flechas y municiones</NuxtLink></div>
          <div><NuxtLink to="/wiki/herramientas" class="btn-wiki-cat btn bg-brown-texture btn-silver">Herramientas</NuxtLink></div>
          <div><NuxtLink to="/wiki/consumibles" class="btn-wiki-cat btn bg-brown-texture btn-silver">Consumibles</NuxtLink></div>
          <div><NuxtLink to="/wiki/embarcaciones" class="btn-wiki-cat btn bg-brown-texture btn-silver">Embarcaciones</NuxtLink></div>
          <div><NuxtLink to="/wiki/items-magicos" class="btn-wiki-cat btn bg-brown-texture btn-silver">Items Magicos</NuxtLink></div>
          <div><NuxtLink to="/wiki/habilidades" class="btn-wiki-cat btn bg-brown-texture btn-silver">Habilidades</NuxtLink></div>
          <div><NuxtLink to="/wiki/npcs-vendedores" class="btn-wiki-cat btn bg-brown-texture btn-silver">Npcs Vendedores</NuxtLink></div>
          <div><NuxtLink to="/wiki/items-patreon" class="btn-wiki-cat btn bg-brown-texture btn-silver">Items Patreon</NuxtLink></div>
          <div><NuxtLink to="/wiki/insigias" class="btn-wiki-cat btn bg-brown-texture btn-silver">Insignias</NuxtLink></div>
      </div>
      <!-- /Items container -->

      <p class="text-center mb-8">Esta guia de entrenamiento es solo para darles una idea y ayudarlos en el camino, hay muchas variaciones de las mismas y no hay una forma correcta de entrenar a un personaje, cada cual lo puede hacer como guste.</p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mb-6 content-rte text-xl gap-4">
          <div><NuxtLink to="/wiki/guia/leveleo-1-12" class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 1-12</NuxtLink></div>
          <div><NuxtLink to="/wiki/guia/leveleo-13-20" class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 13-20</NuxtLink></div>
      </div>

    </section>


  </div>
</template>

<script>
</script>

<style>
    .btn-wiki-cat {
        @apply truncate px-4 w-full text-center text-sm normal-case text-yellow-400;
    }
</style>
