<script setup lang="ts">

import ProjectCard from '@/components/ProjectCard.vue'
import uavImage from '@/assets/images/uav.jpg'


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
    ],
    link:
      "/projects/gps-uav"
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


    <div class="mt-8 flex gap-6 overflow-x-auto py-4">

      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />

    </div>

  </section>

</template>