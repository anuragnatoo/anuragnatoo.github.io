<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <router-link
      to="/"
      class="home-link"
    >
      ← Go back home
    </router-link>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 1rem;
}

h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #42d392;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.home-link {
  color: #42b883;
  text-decoration: underline;
  font-weight: 500;
}
</style>
