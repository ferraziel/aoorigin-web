<template>
  <div class="container">
    <section>
      <br>
      <br>
      <h1 class="section-title text-center mb-4 uppercase">Wiki / Guia de Juego</h1>
      <p class="text-center mb-8">Esta wiki toma dinámicamente los datos desde los archivos del juego, por lo que está siempre actualizada.</p>

      <!-- Items container -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mb-6 content-rte text-xl gap-4">
        <div>
          <NuxtLink :to="{ path: '/wiki/escudos', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Escudos</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/armaduras', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Armaduras</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/armas', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Armas</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/cascos', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Cascos</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/monturas', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Monturas</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/hechizos', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Hechizos</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/npcs', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Npcs</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/quests', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Quests</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/balance', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Balance</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/razas', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Razas</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/alimentos', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Alimentos</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/resistencia-magica', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Resistencia Magica</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/instrumentos', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Instrumentos Musicales</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/flechas-municiones', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Flechas y municiones</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/herramientas', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Herramientas</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/consumibles', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Consumibles</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/embarcaciones', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Navegacion</NuxtLink>
        </div>
        <div>
          <NuxtLink :to="{ path: '/wiki/items-magicos', query: { ...$route.query } }"
            class="btn-wiki-cat btn bg-brown-texture btn-silver">Items Magicos</NuxtLink>
        </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/habilidades', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Habilidades</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/npcs-vendedores', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Npcs Vendedores</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/items-patreon', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Items Patreon</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/insignias', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Insignias</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/cofres', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Cofres</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/facciones', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Facciones</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/perdon', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Perdon</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/sastreria', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Sastreria</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/herreria', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Herreria</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/carpinteria', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Carpinteria</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/pescar', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Pescar</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/clanes', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Clanes</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/vender-en-mao', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Vender en MAO</NuxtLink>
      </div>
    </div>
    <!-- /Items container -->

    <p class="text-center mb-8">Esta guia de entrenamiento es solo para darles una idea y ayudarlos en el camino, hay
      muchas variaciones de las mismas y no hay una forma correcta de entrenar a un personaje, cada cual lo puede hacer
      como guste.</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mb-6 content-rte text-xl gap-4">
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/tips', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Antes de empezar</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/comenzar', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Comenzar a jugar</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/skills-clases', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Asignar skills por clases</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/minar', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">¿Cómo y dónde minar?</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-1-12', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 1-12</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-13-20', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 13-20</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-18-30', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 18-30</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-25-40', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 25-40</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-40-47', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Nivel 40-47</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-mapas-no-magicos', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Mapas NO Magicos</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/guia/leveleo-fans', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">Video Guias Fans</NuxtLink>
      </div>
    </div>

    <p class="text-center mb-8">Soporte Tecnico.</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mb-6 content-rte text-xl gap-4">
      <div>
        <NuxtLink :to="{ path: '/wiki/soporte/no-abre', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">No abre el juego</NuxtLink>
      </div>
      <div>
        <NuxtLink :to="{ path: '/wiki/soporte/no-abre-quests', query: { ...$route.query }} "
          class="btn-wiki-cat btn bg-brown-texture btn-silver">No abren Quests o Minimapa</NuxtLink>
      </div>
    </div>
  </section>


</div></template>

<script>
</script>

<style>.btn-wiki-cat {
  @apply truncate px-4 w-full text-center text-sm normal-case text-yellow-400;
}</style>
