<template>
  <section class="projects">
    <h1>Projects</h1>
    <ul class="project-list">
      <li
        v-for="(project, index) in projects"
        :key="index"
      >
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
        >View Project</a>
      </li>
    </ul>
    <p class="github-link">
      See full list of projects on <a
        href="https://github.com/anuragnatoo"
        target="_blank"
      >GitHub</a>.
    </p>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { title: 'English Alphabet Classifications using Hand Signs', description: 'Developed a convolutional neural network model to classify alphabet from image of hand signs.This model was developed on American Sign Language Dataset.This model was developed as part of Pattern Recognition course project.', link: 'https://github.com/anuragnatoo/PR_Projects/blob/main/AmericanSignLanguage_AlphabetClassification.ipynb' },
  { title: 'Circuit Activity Factor Calculator', description: 'Developed an application which calculates the activity factor of all the components of a circuit in python as part of VLSI System Design course project.Given the circuit verilog module(.v file) the application calculated the activity factor of all the components and also gave the structure of the input circuit. The application works for all the ISCAS85 benchmark files.', link: 'https://github.com/anuragnatoo/ELE301P/tree/master/ActivityFactorCalculator' },
  { title: 'Word Count Chrome Extension', description: 'A simple chrome extension to count the number of words in the selected text.', link: 'https://github.com/anuragnatoo/Word-Count-Chrome-Extension' }
]
</script>

<style scoped>
.projects {
  padding-top: 2rem;
  min-height: 80vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #42d392;
}

.project-list {
  list-style: none;
  padding: 0;
}

.project-list li {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
}

h2 {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

a {
  color: #42b883;
  font-weight: 500;
}

.github-link {
  margin-top: 1rem;
}
</style>
