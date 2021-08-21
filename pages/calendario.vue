<template>
  <div class="container">
    <h1 class="mb-12 text-5xl text-primary">Calendario de Eventos</h1>

    <section v-if="calendar.events.length" class="space-y-8">
      <div v-for="(event, i) in calendar.events" :key="event.title + i">
        <h2 class="mb-2 text-3xl">{{ event.title }}</h2>
        <time>{{ $dayjs(event.start).format("DD [de] MMMM [a las] HH:mm") }}</time>
      </div>
    </section>

    <section v-else>Aún no hay eventos en el calendario.</section>
  </div>
</template>

<script>
import calendar from "@/assets/calendario.json";

export default {
  data() {
    return {
      calendar,
    };
  },
};
</script>

<style></style>
