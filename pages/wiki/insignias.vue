<template>
  <div class="container">
    <br>
    <br>
    <h1>¿Cómo consigo Insignias?</h1>

    <p>
      Las insignias es uno de los items mas preciados de todo Argentum20 ya que
      con ellas podemos conseguir armas, armaduras, cascos y hasta monturas.
    </p>

        <img src="https://lh5.googleusercontent.com/xsP5bSo-0xjOh87mrlHhkS5KBOrOZkyLlHT-M2O8Ka7f2EpdK9f1sMTTTfG09ztLpgT2uyV95hD4J-ND36MElddIXGAw7J__VhHu6sTQoJL7f4Pm5S9LS0XsRPfi8xxZ4qzZISpUGbGPyyjMQ_W8b0apAB3AEirIJ_4-2qT9AfPk7fpetcMg=w1280"/>
    <img src="https://lh4.googleusercontent.com/Sb51LyxywC20MUbroLgJk2rNptAdlD41HfNO8pCO1n3ga1fiGSJdqOSZ5dO7mgrdBVFUgEkXsfEXHERkEsyqx2Hf24knYIwPczPeVar6pwzhJVBz5RdiFTlZabbKBYbNMFRj5N9aQBhXUABSAMH6lYMWrka5mIlObh3KlHQBSU2cdAO5WnEWdg=w1280"/>

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
