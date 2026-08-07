<script setup lang="ts">

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

defineProps<{
  project: Project
}>()

</script>


<template>
  <div
    class="
      w-full
      overflow-hidden
      rounded-xl
      border
      border-slate-800
      bg-slate-900
      shadow-lg
      transition-transform
      hover:-translate-y-2
    "
  >

    <!-- Image -->
    <img
      :src="project.image"
      :alt="project.title"
      class="h-48 w-full object-cover"
    />


    <!-- Content -->
    <div class="p-6">

      <h3 class="text-xl font-bold">
        {{ project.title }}
      </h3>


      <p class="mt-3 text-slate-300">
        {{ project.description }}
      </p>


      <!-- Technologies -->
      <div class="mt-4 flex flex-wrap gap-2">

        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="
            rounded-full
            bg-slate-800
            px-3
            py-1
            text-sm
            text-sky-300
          "
        >
          {{ tech }}
        </span>

      </div>


      <!-- Button -->
      <RouterLink
        :to="project.link"
        class="
          mt-6
          inline-block
          text-sky-400
          hover:text-sky-300
        "
      >
        View Project →
      </RouterLink>

    </div>

  </div>
</template>