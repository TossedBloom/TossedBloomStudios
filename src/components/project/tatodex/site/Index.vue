<template>
  <h1>PotatoDex</h1>
    <main>
      <div id="potato-viewer">
        <video :src="currentPotato.video" autoplay muted loop></video>
        <div class="text-content">
          <h2>{{ currentPotato.name }}</h2>
          <div v-html="currentPotato.description"></div>
        </div>
      </div>

      <ul id="potato-list">
        <li v-for="(potato, index) in potatoes" :key="potato.name + index" class="potato-list-item"  :class="{ 'potato-list-item--active': currentIndex === index }">
          <img class="potato-icon" :src="potato.icon" @click="currentIndex = index">
          <p>{{ potato.name }}</p>
        </li>
      </ul>
    </main>
  </template>
  
<script setup>
import { ref, computed } from 'vue';
import { potatoes } from './data/Potatoes';
const currentIndex = ref(0);

const currentPotato = computed(() => {
  return potatoes[currentIndex.value]
});
</script>

<style scoped>
h1 {
  background-color: #232321;
  font-size: 5rem;
  padding: 2rem 5rem 0;
  margin: 0;
  color: #f0f0f0;
}

main {
  background-color: #232321;
  padding: 2rem 5rem 0;
}

#potato-viewer {
  position: relative;
  height: 500px;
}

/**
  Video width will be 500 / 4 * 3 since video is in 3:4 format
*/
#potato-viewer video {
  position: absolute;
  height: 100%;
}

.text-content {
  width: calc(100% - 375px);
  margin-left: calc(375px + 2rem);
  padding: 0.5rem 1.5rem;
  height: 100%;
  color: white;
  font-size: 1.7rem;
}

.text-content h2 {
  font-size: 3rem;
}

#potato-list {
  padding: 2rem 0;
  margin: 0;
  list-style: none;
  display: flex;
}

.potato-list-item {
  width: calc(100% / 9);
  text-align: center;
  color: white;
  font-size: 1.2rem;
  filter: brightness(0.6) blur(0.3px);
  transition: 0.3s;
}

.potato-list-item:hover {
  filter: none;
  transform: scale(1.2);
  cursor: pointer;
}

.potato-list-item--active {
  filter: none;
  transform: scale(1.2);
}

.potato-icon {
  height: 90px;
  width: 90px;
}

@media only screen and (max-width: 991px) {
  #potato-list {
    flex-wrap: wrap;
  }

  .potato-list-item {
    width: calc(100% / 4);
  }
}
</style>