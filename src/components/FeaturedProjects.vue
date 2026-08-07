<script setup lang="ts">

import ProjectCard from '@/components/ProjectCard.vue'
import uavImage from '@/assets/images/uav.jpg'
import artBotImage from '@/assets/images/artbot.jpg'


const projects = [
  {
    title: "Undead Reckoning",
    description:
      "Senior project for GPS/GNSS-denied autonomous navigation using PX4 flight software and VINS Fusion.",
    image:
      uavImage,
    technologies: [
      "PX4",
      "QGroundControl",
      "C++",
      "MATLab",
      "Gazebo",
      "Linux"
    ],
    link:
      "/projects/undeadreckoning"
  },


  {
    title: "Art Bot",
    description:
      "Electronics Desing Lab project based on mobile robot platform desingned to draw on the floor.",
    image:
      artBotImage,
    technologies: [
      "SIMetrix",
      "Circuit Design",
      "C++",
      "Arduino",
      "Lab Equipment"
    ],
    link:
      "/projects/artbot"
  },

    {
    title: "Placeholder",
    description:
      "Placeholder",
    image:
      "/images/placeholder.jpg",
    technologies: [
      "Placeholder",
    ],
    link:
      "/projects/placeholder"
  }
]

</script>

<template>

  <section>

    <h2 class="text-3xl font-bold">
      Featured Projects
    </h2>


    <div class="mt-8
    flex
    flex-col
    gap-6
    md:flex-row
    md:overflow-x-auto
    py-4">

      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />

    </div>

  </section>

</template>