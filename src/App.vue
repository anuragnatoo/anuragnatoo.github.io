<template>
  <div id="app">
    <div :class="['app', theme]">
      <Navbar />
      <main class="main-content">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const theme = ref('dark');
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
};

provide('theme', theme);
provide('toggleTheme', toggleTheme);
</script>

<style scoped>
.app {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark {
  background-color: #121212;
  color: #ffffff;
}

.light {
  background-color: #ffffff;
  color: #333333;
}

.main-content {
  flex-grow: 1;
  padding: 1rem;
  max-width: 64rem;
  margin: 0 auto;
}
</style>
