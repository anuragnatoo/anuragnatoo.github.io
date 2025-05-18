<template>
  <section class="education">
    <h1>Education</h1>
    <div class="edu-entry">
      <h2>IIITDM Kancheepuram</h2>
      <p class="degree">
        B.Tech., Computer Engineering (2017–2021)
      </p>
    </div>
    <div class="edu-entry">
      <h2>Sri Chaitanya Jr Kalasala</h2>
      <p class="degree">
        12th Standard MPC (2015-2017)
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.education {
  min-height: 80vh;
  padding-top: 2rem;
  text-align: left;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #42d392;
}

.edu-entry {
  background-color: #1a1a1a;
  padding: 1.5rem;
  border: 1px solid #2e2e2e;
  border-radius: 8px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #e0e0e0;
}

.degree{
  color: #bbb;
  font-size: 1rem;
  margin: 0.2rem 0;
}
</style>
