
<template>
  <div class='app'>
    <br>
    <br>
    <FullCalendar :options='calendarOptions' />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid';

//Obtenemos informacion de los eventos en el archivo json
import calendario from '@/assets/calendario.json';

export default {
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
        initialEvents: calendario.events
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
