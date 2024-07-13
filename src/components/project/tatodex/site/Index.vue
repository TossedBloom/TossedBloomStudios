<template>
  <h1>PotatoDex</h1>
    <ul id="potato-list">
      <li v-for="(potato, index) in potatoes" :key="potato.name + index">
        <img class="potato-icon" :class="{ 'potato-icon--active': currentIndex === index }" :src="potato.icon" @click="currentIndex = index">
      </li>
    </ul>

    <main>
      <video :src="currentVideo"></video>
    </main>
  </template>
  
<script setup>
import { ref, computed } from 'vue';
import { potatoes } from './data/Potatoes';
const currentIndex = ref(0);

const currentVideo = computed(() => {
  return potatoes[currentIndex.value].video
});
</script>

<style>
h1 {
  background-color: #F5CB5C;
  font-size: 5rem;
  padding: 2rem 5rem 0;
  margin: 0;
  color: #f0f0f0;
}

main {
  position: relative;
  height: 500px;
}

main video {
  position: absolute;
  height: 100%;
  width: 100%;
}

.potato-icon {
  width: 90px;
  filter: grayscale();
  transition: 0.3s;
}

.potato-icon:hover {
  filter: none;
  transform: scale(1.1);
  cursor: pointer;
}

.potato-icon--active {
  filter: none;
  transform: scale(1.1);
}

#potato-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}

</style>