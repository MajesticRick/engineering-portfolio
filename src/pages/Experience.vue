<script setup lang="ts">
import WorkExperience from '@/components/WorkExperience.vue';
import EducationExperience from '@/components/EducationExperience.vue';
</script>

<template>
  <main class="mx-auto max-w-7xl px-6 py-12">
    <a href="/Ricardo_Zapata_Resume.pdf" download class="flex justify-center rounded-lg 
    bg-sky-400 py-3 font-semibold text-slate-950
    hover:bg-sky-300 transition-colors">
    Download Resume
  </a>
  <EducationExperience />
  <WorkExperience />

  </main>
</template>