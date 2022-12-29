<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Insignias</h2>
    <h1>¿Cómo consigo insignias?</h1>

    <p>
      Las insignias es uno de los items mas preciados de todo Argentum20 ya que
      con ellas podemos conseguir armas, armaduras, cascos y hasta monturas.
    </p>

    <img src="@/assets/img/wiki/insignia-azul.png"/>
    <img src="@/assets/img/wiki/insignia-roja.png"/>

    Podemos conseguirlas de 2 maneras.
    <ul>
      <li>
        En 1er lugar, matando cualquiera de los bosses que hay en las tierras de
        Argentum20. Estos tiene un 100% de chance que se dropee una insignia,
        Roja o Azul.
      </li>

      <li>
        En 2do lugar, apartir de nivel 40 se nos habilitan 2 nuevos dungeons
        donde vamos a encontrar nuevas criaturas que algunas tiene un % de
        dropeo de insignias
      </li>

      <li>
        Dungeon Magma: Golem Infernal (Insignia roja), Banshee (Insignia azul).
      </li>

      <li>Cueva de la Gorgona: Euríale y Dama Oscura (Ambas Insignia Roja).</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  async fetch() {},
  head() {
    return {
      title: "Wiki - Insignias",
    };
  },
};
</script>

<style>
select:required:invalid {
  color: gray;
}

option[value=""][disabled] {
  display: none;
}
</style>
