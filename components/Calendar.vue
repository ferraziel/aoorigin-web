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
        editable: true,
        initialEvents: [
            { 
                title: 'Torneo 1 vs 1',
                start: '2021-07-11T12:30:00' 
            },
            { 
                title: 'Guerra de Clanes',
                start: '2021-07-11T20:30:00' 
            },
            { 
                title: 'Invasiones',
                start: '2021-07-12T12:30:00' 
            },
            { 
                title: 'Invasiones',
                start: '2021-07-07T12:30:00' 
            },
            { 
                title: 'Guerra Clanes',
                start: '2021-07-07T16:30:00' 
            },
            { 
                title: 'Torneo 3 vs 3',
                start: '2021-07-17T12:30:00' 
            },
            { 
                title: 'Torneo Magicos',
                start: '2021-07-27T12:30:00' 
            },
            { 
                title: 'Torneo Guerreros',
                start: '2021-07-31T12:30:00' 
            },
        ]
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