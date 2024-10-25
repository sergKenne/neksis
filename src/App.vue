
<template>
  <div class="app">
    <Header />
    <main class="container main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main {
    margin-bottom: auto;
  }
</style>
