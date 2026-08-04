<script setup lang="ts">
  import { ref } from 'vue'
  const menuOpen = ref(false)
</script>

<template>
  <nav class="bg-linear-to-r from-indigo-950 to-blue-400 text-white">

  <!-- Top row -->
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    <RouterLink 
      to="/" 
      class="text-xl font-bold transition-colors hover:text-pink-200"
    >
      Ricardo Zapata
    </RouterLink>


    <!-- Mobile menu button -->
    <button
      @click="menuOpen = !menuOpen"
      :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      class="
        cursor-pointer
        rounded
        border
        border-white
        px-3
        py-2
        transition-colors
        hover:bg-white/20
        hover:text-pink-200
        lg:hidden
      "
    >

    <svg 
      v-if="!menuOpen"
      class="h-5 w-5 fill-current"
      viewBox="0 0 20 20"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
    </svg>

    <svg
      v-else
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>


    </button>


    <!-- Desktop links -->
    <div class="hidden gap-6 lg:flex">

      <RouterLink to="/projects" class="hover:text-pink-200">
        Projects
      </RouterLink>

      <RouterLink to="/experience" class="hover:text-pink-200">
        Experience
      </RouterLink>

      <RouterLink to="/about" class="hover:text-pink-200">
        About
      </RouterLink>

      <RouterLink to="/contact" class="hover:text-pink-200">
        Contact
      </RouterLink>

    </div>

  </div>


  <!-- Mobile dropdown -->
  <Transition name="slide">

    <div
      v-if="menuOpen"
      class="overflow-hidden bg-indigo-950 lg:hidden"
    >

      <div class="flex flex-col gap-4 px-6 py-6">

        <RouterLink to="/projects">
          Projects
        </RouterLink>

        <RouterLink to="/experience">
          Experience
        </RouterLink>

        <RouterLink to="/about">
          About
        </RouterLink>

        <RouterLink to="/contact">
          Contact
        </RouterLink>

      </div>

    </div>

  </Transition>

</nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>