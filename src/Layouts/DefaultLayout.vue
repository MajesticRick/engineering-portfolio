<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>

  <div class="flex min-h-screen flex-col bg-slate-950 text-white">

    <Navbar />

    <main class="grow">
      <RouterView />
    </main>

    <Footer />

  </div>

</template>