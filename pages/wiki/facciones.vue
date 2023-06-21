<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Facciones</h2>
    <h3>Armada Real</h3>
    <img src="@/assets/img/wiki/armada-real.png"/>

    <p>
      Para enlistarnos en la Armada real necesitamos tener al menos 25 criminales matados y ser nivel 25 para el primer rango, sin tener ningún ciudadano matado o haber pedido el perdón faccionario. Nos dirigimos al Rey de Banderbill que se encuentra en el Castillo en el mapa 60. Lo clickeamos y tipeamos /ENLISTAR
    </p>

    <ul>
      <li>1er Rango: 25 criminales matados - Soldado (Nivel 25)</li>
      <li>2do Rango: 350 criminales matados - Caballero (Nivel 30)</li>
      <li>3er Rango: 700 criminales matados - Capitán (Nivel 35)</li>
      <li>4to Rango: 1050 criminales matados - Protector del Reino (Nivel 40)</li>
      <li>5to Rango: 2000 criminales matados - Campeón de la Luz (Nivel 43)</li>
    </ul>

    <h6>Por cada rango que subamos recibiremos una mejor armadura faccionaria.</h6>

    <br>
    <hr>
    <br>

    <h3>Legion del Caos</h3>
    <img src="@/assets/img/wiki/legion-caos.png"/>

    <p>
      Para enlistarnos en la Armada del Caos necesitamos tener al menos 25 ciudadanos matadados y ser nivel 25 para el primer rango, no haber pertenecido a la facción contraria o tener el perdón del concilio. Nos dirigimos hacia el Dictador de Arkhein que se encuentra en el palacio en el mapa 295. Lo clickeamos y tipeamos /ENLISTAR
    </p>

    <ul>
      <li>1er Rango: 25 ciudadanos matados - Acólito (Nivel 25)</li>
      <li>2do Rango: 350 ciudadanos matados - Emisario del Caos (Nivel 30)</li>
      <li>3er Rango: 700 ciudadanos matados - Sanguinario (Nivel 35)</li>
      <li>4to Rango: 1050 ciudadanos matados - Caballero de la Oscuridad (Nivel 40)</li>
      <li>5to Rango: 2000 ciudadanos matados - Devorador de Almas (Nivel 43)</li>
    </ul>

    <h6>Por cada rango que subamos recibiremos una mejor armadura faccionaria.</h6>
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
      title: "Wiki - Facciones",
    };
  },
};
</script>

<style>
</style>
