<template>
  <header class="navbar">
    <div class="container">
      <div class="left-section">
        <button @click="toggleTheme" class="theme-toggle-btn">
          {{ theme === 'dark' ? '🌙' : '🌞' }}
        </button>
        <router-link to="/" class="logo">
          Anurag Natoo
        </router-link>
      </div>
      <nav class="nav-links">
        <router-link to="/about" class="nav-item">About</router-link>
        <router-link to="/projects" class="nav-item">Projects</router-link>
        <router-link to="/education" class="nav-item">Education</router-link>
        <router-link to="/skills" class="nav-item">Skills & Certifications</router-link>
        <router-link to="/blog" class="nav-item">More</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue';
const toggleTheme = inject('toggleTheme') as () => void;
const theme = inject('theme') as any;
</script>

<style scoped>
.navbar {
  background-color: var(--bg-color, #1e1e1e);
  border-bottom: 1px solid #333;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  font-weight: 600;
  font-size: 1.2rem;
  color: #42d392;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  color: #e5e7eb;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: #42d392;
}

.theme-toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #42d392;
  font-weight: bold;
  padding: 0;
}
</style>
