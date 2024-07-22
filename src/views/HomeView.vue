<template>
  <div class="home">
    <video muted autoplay loop>
      <source src="../assets/videos/potatocop-demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video> 

    <div id="home-content">
      <h1>TossedBloom Studio</h1>
      <ul>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="#" style="text-decoration: line-through;">Shop (Coming Soon)</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}

li {
  margin-bottom: 1rem;
}

a {
  color: white;
  font-size: 1.5rem;
}

#home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0 5rem;
}

h1 {
  color: #F1F1F1;
  font-size: 5rem;
  margin-top: -3rem;
}

@media only screen and (max-width: 774px) {
  h1 {
    color: #F1F1F1;
    font-size: 3rem;
    margin-top: -1.5rem;
  }

  #home-content {
    padding: 0 2.5rem;
  }
}
</style>
