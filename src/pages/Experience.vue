<script setup lang="ts">
import WorkExperience from '@/components/WorkExperience.vue';
</script>

<template>
  <main class="mx-auto max-w-7xl px-6 py-12">
    <h1 class="text-5xl font-bold">
      Welcome!
    </h1>

    <p class="mt-4 text-lg text-slate-600">
      This is my portfolio experience page.
    </p>
    <a href="/Ricardo_Zapata_Resume.pdf" download class="flex justify-center rounded-lg 
    bg-sky-400 py-3 font-semibold text-slate-950
    hover:bg-sky-300 transition-colors">
    Download Resume
  </a>
  <WorkExperience />
  </main>
</template>