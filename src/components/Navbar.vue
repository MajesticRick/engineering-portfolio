<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <nav class="bg-linear-to-r from-indigo-950 to-blue-400 text-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      <!-- Logo / Name -->
      <RouterLink to="/" class="text-xl font-bold hover:text-pink-200 transition-colors">
        Ricardo Zapata
      </RouterLink>


      <!-- Mobile menu button -->
      <button @click="menuOpen = !menuOpen" class="lg:hidden rounded border border-white px-3 py-2 
       hover:bg-white/20 hover:text-pink-200 transition-colors">
        <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>


      <!-- Navigation links -->
      <div :class="['absolute left-0 top-16 w-full lg:static lg:flex lg:w-auto', menuOpen ? 'block' : 'hidden']">
        <div class="flex flex-col gap-4 bg-indigo-950 p-6 lg:flex-row lg:bg-transparent lg:p-0">

          <RouterLink to="/projects" class="hover:text-pink-200 transition-colors">
            Projects
          </RouterLink>

          <RouterLink to="/experience" class="hover:text-pink-200 transition-colors">
            Experience
          </RouterLink>

          <RouterLink to="/resume" class="hover:text-pink-200 transition-colors">
            Resume
          </RouterLink>

          <RouterLink to="/about" class="hover:text-pink-200 transition-colors">
            About
          </RouterLink>

          <RouterLink to="/contact" class="hover:text-pink-200 transition-colors">
            Contact
          </RouterLink>

        </div>
      </div>
    </div>
  </nav>
</template>