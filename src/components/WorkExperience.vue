<script setup lang="ts">

import ExperienceEntryCard from '@/components/ExperienceEntryCard.vue'

const ExperienceEntries = [
  {
    company: "Frontier Airlines",
    position: "Software Developer Intern",
    description: "Placeholder",
    location: "Denver, CO",
    date: "May 2019 - Feb. 2022",
    skills: [
      "PX4",
      "QGroundControl",
      "C++",
      "MATLab",
      "Gazebo",
    ],
  },


]

</script>

<template>

  <section>

    <h2 class="text-3xl font-bold">
      WorkExperience
    </h2>


    <div class="x-auto mt-8 flex max-w-4xl flex-col gap-8 py-4">

      <ExperienceEntryCard
        v-for="experience in ExperienceEntries"
        :key="experience.position"
        :experience="experience"
      />

    </div>

  </section>

</template>