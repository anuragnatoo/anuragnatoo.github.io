<template>
  <section class="skills">
    <h1>Skills</h1>

    <ul class="skills-list">
      <li>
        <p><strong>Programming Languages:</strong></p>
          <ul class="category-title">
            <li>C, C++, Python, JavaScript, TypeScript, Apex</li>
          </ul>
      </li>
      <li>
        <p><strong>Libraries & Frameworks:</strong></p>
          <ul class="category-title">
            <li>Vue, FastAPI, TensorFlow, Keras, NumPy, Matplotlib</li>
          </ul>
      </li>
      <li>
        <p><strong>Development Tools:</strong></p>
          <ul class="category-title">
            <li>Visual Studio Code, Sublime Text, Git, Github, Bitbucket, Postman</li>
          </ul>
      </li>
    </ul>

    <h1>Certifications</h1>
    <ul class="cert-list">
      <li>Azure AI Fundamentals</li>
      <li>Problem Solving(Basic) by Hackerrank</li>
      <li>Neural Networks and Deep Learning, Coursera</li>
      <li>Machine Learning, Coursera</li>
      <li>Introduction to Tensorflow, Coursera</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.skills {
  padding: 20px;
  min-height: 80vh;
  margin: 0 auto;
}

.skills-list {
  list-style-type: square;
  
}

.category-title{
  list-style-type: circle;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #42d392;
}


.cert-list {
  list-style-type: square;
  margin-bottom: 2rem;
}

.cert-list li {
  margin-bottom: 0.5rem;
}
</style>
