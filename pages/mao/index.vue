<template>
  <section class="container">
    <h1 class="section-title uppercase text-center mb-24">Mercado de Personajes</h1>

    <section class="grid grid-cols-12 gap-6">
      <aside class="col-span-3 bg-gray-900 border-window self-start p-6"></aside>
      <main class="col-span-9 bg-gray-900 border-window p-6">
        <ul>
          <li v-for="character in characters" :key="character.name">
            <NuxtLink
              :to="`/mao/pj/${character.slug}`"
              class="flex items-center justify-between p-4 group hover:bg-gray-800 transition-colors duration-200 ease-out w-full first:border-b border-gray-700 uppercase"
            >
              <div class="flex items-center">
                <div
                  class="w-16 h-16 relative bg-gray-1000 rounded-full border border-silver group-hover:border-primary overflow-hidden shadow-inner mr-6"
                >
                  <div class="absolute w-full h-full flex justify-center items-center">
                    <CharacterHead
                      :x="character.head.x"
                      :y="character.head.y"
                      :w="character.head.w"
                      :h="character.head.h"
                    />
                  </div>
                </div>
                <p class="font-serif w-32 leading-tight">{{ character.name }}</p>
              </div>

              <div class="font-serif">
                <p class="text-4xl leading-none">
                  {{ character.level }}
                  <span
                    class="leading-none"
                    :class="{
                      'text-green-health': isPositive(character.average),
                      'text-red-health': !isPositive(character.average) && character.average != 0,
                      'text-gray-500': character.average === 0,
                    }"
                  >
                    (<span v-if="isPositive(character.average)">+</span>{{ character.average }})</span
                  >
                </p>
              </div>

              <p class="font-serif leading-tight w-40">{{ character.class }} {{ character.race }}</p>
              <p class="text-4xl font-serif leading-none">{{ character.punishments }}</p>
              <p class="font-serif leading-tight">Cambio</p>
            </NuxtLink>
          </li>
        </ul>
      </main>
    </section>
  </section>
</template>

<script>
import data from "@/assets/coords.json";

export default {
  data() {
    return {
      heads: data,
      characters: [
        {
          name: "El Gordo Revoleador de Apoka",
          slug: "el-gordo-revoleador-de-apoka",
          level: 39,
          average: 5,
          class: "Mago",
          race: "Humano",
          punishments: 2,
          condition: 0,
          head: {
            x: data[0].x,
            y: data[0].y,
            w: data[0].width,
            h: data[0].height,
          },
        },
        {
          name: "SimP",
          slug: "simp",
          level: 22,
          average: -3,
          class: "Druida",
          race: "Elfo",
          punishments: 0,
          condition: 1,
          gold: 2000000,
          head: {
            x: data[90].x,
            y: data[90].y,
            w: data[90].width,
            h: data[90].height,
          },
        },
      ],
    };
  },
  methods: {
    isPositive(x) {
      return x > 0;
    },
  },
};
</script>

<style></style>
