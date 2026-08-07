<script setup lang="ts">

import ExperienceEntryCard from '@/components/ExperienceEntryCard.vue'

const ExperienceEntries = [
  {
    company: "University of Colorado Boulder",
    position: "B.S. Aerospace Engineering Sciences",
    description: [
      `Dual Minors - Computer Science & Electrical Engineering`,
      `Senior Project - Undead Reckoning GPS/GNSS denied autonomous navigation`,
      `Deans list (Spring 2026)`,
    ],
    location: "Boulder, CO",
    date: "Aug 2020 - May 2026",
    skills: [
    ],
  },

  {
    company: "Community College of Aurora",
    position: "A.A General Studies",
    description: [
        `Dual enrollment in high school`
    ],
    location: "Aurora, CO",
    date: "Aug 2017 - May 2020",
    skills: [
    ],
  }
]

</script>

<template>

  <section>

    <h2 class="text-3xl font-bold mt-8">
      Education Experience 
    </h2>


    <div class="x-auto flex max-w-4xl flex-col gap-8 py-4">

      <ExperienceEntryCard
        v-for="experience in ExperienceEntries"
        :key="experience.position"
        :experience="experience"
      />

    </div>

  </section>

</template>