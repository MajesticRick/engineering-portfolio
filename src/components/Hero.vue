<script setup lang="ts">
</script>

<template>
  <section class="bg-slate-950 text-white">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row">

      <!-- Text -->
      <div class="flex-1">

        <h1 class="text-5xl font-bold tracking-tight md:text-6xl">
          Ricardo Zapata
        </h1>

        <h2 class="mt-4 text-2xl text-sky-300 md:text-3xl">
          Aerospace Engineer
        </h2>

        <p class="mt-6 max-w-xl text-lg text-slate-300">
          Technically and creatively minded engineer designing and building UAVs, 
          software, and embedded systems
        </p>


        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">

          <RouterLink
            to="/projects"
            class="rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950
                   hover:bg-sky-300 transition-colors"
          >
            View Projects
          </RouterLink>


          <RouterLink
            to="/resume"
            class="rounded-lg border border-white px-6 py-3 font-semibold
                   hover:bg-white hover:text-slate-950 transition-colors"
          >
            Resume
          </RouterLink>

        </div>

      </div>


      <!-- Image -->
      <div class="flex-1 flex justify-center">

        <img
          src="@/assets/images/ProfileImage.jpg"
          alt="Ricardo Zapata"
          class="h-72 w-72 rounded-full object-cover shadow-xl"
        />

      </div>

    </div>
  </section>
</template>