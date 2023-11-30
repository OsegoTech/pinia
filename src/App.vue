<script setup>
import NavBar from "./nav-bar/NavBar.vue";
</script>

<template>
  <NavBar />
  <Suspense>
    <RouterView />
  </Suspense>
</template>
