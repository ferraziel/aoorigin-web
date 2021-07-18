<template>
  <div class='app'>
    <FullCalendar :options='calendarOptions' />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid';

// const calendario = await $axios.$get("https://raw.githubusercontent.com/ao-org/ao20-calendario-eventos/master/calendario.json");

//Obtenemos informacion de los eventos en el archivo json
// const calendario = JSON.parse(fs.readFileSync('./static/calendario.json', 'utf-8'))
let eventos;

export default {
  async asyncData({ $axios }) {
    eventos = await this.$axios.$get("https://raw.githubusercontent.com/ao-org/ao20-calendario-eventos/master/calendario.json");
    console.log(123123)
    return { eventos };
  },

  components: {
    FullCalendar
  },

  data() {
    return {
      calendarOptions: {
        locale: 'es',
        height: 650, 
        timeZone: "UTC",
        plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin],
        initialView: 'dayGridMonth',
        nowIndicator: true,
        editable: true,
        initialEvents: eventos
      }
    }
  }
}
</script>

<style scoped>
  .app {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }
</style>