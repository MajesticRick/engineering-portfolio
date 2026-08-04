<script setup lang="ts">

interface ExperienceEntry {
  company: string
  position: string
  location: string
  date: string
  description: string
  skills: string[]
}

defineProps<{
  experience: ExperienceEntry
}>()

</script>

<template>
  <div
    class="
      w-full
      rounded-xl
      border
      border-slate-800
      bg-slate-900
      shadow-lg
      transition-transform
      hover:-translate-y-2
    "
  >

    <div class="p-6 w-full">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start">

        <!-- Company + Position -->
        <div>
          <h2 class="text-2xl font-bold text-white">
            {{ experience.company }}
          </h2>

          <h3 class="mt-1 text-lg text-sky-300">
            {{ experience.position }}
          </h3>
        </div>


        <!-- Date + Location -->
        <div class="mt-2 text-sm text-slate-400 md:mt-0 md:text-right">

          <p>
            {{ experience.date }}
          </p>

          <p>
            {{ experience.location }}
          </p>

        </div>

      </div>


      <!-- Description -->
      <p class="mt-6 text-slate-300">
        {{ experience.description }}
      </p>


      <!-- Technologies -->
      <div class="mt-4 flex flex-wrap gap-2">

        <span
          v-for="tech in experience.skills"
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

    </div>

  </div>
</template>