<template>
  <h1>PotatoDex</h1>
    <main>
      <div id="potato-viewer">
        <video ref="potatoVideo" :src="currentPotato.video" autoplay muted loop></video>
        <div class="text-content">
          <h2>{{ currentPotato.name }}</h2>
          <div v-html="currentPotato.description"></div>
        </div>
      </div>

      <ul id="potato-list">
        <li v-for="(potato, index) in potatoes" :key="potato.name + index" class="potato-list-item"  
        :class="{ 'potato-list-item--active': currentIndex === index }"
         @click="onSelectPotato(index)"
        >
          <img class="potato-icon" :src="potato.icon">
          <p>{{ potato.name }}</p>
        </li>
      </ul>
    </main>
  </template>
  
<script setup>
import { ref, computed, nextTick } from 'vue';
import { potatoes } from './data/Potatoes';
const currentIndex = ref(0);
const potatoVideo = ref()

const currentPotato = computed(() => {
  return potatoes[currentIndex.value]
});

const onSelectPotato = async (index) => {
  setSelectedIndex(index)
  await nextTick()
  scrollToVideo()
};

const setSelectedIndex = (index) => {
  currentIndex.value = index
};

const scrollToVideo = () => {
  potatoVideo.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
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
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-shadow: 8px 8px 33px black;
  margin-top: 2rem;
}

.potato-list-item {
  width: calc(100% / 6);
  flex-wrap: wrap;
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
  .text-content {
    margin-left: calc(375px + 1.5rem);
    font-size: 1.5rem;
  }

  .text-content h2 {
    font-size: 2.5rem;
  }

  .potato-list-item {
    width: calc(100% / 4);
  }
}

@media only screen and (max-width: 774px) {
  .potato-list-item {
    width: calc(100% / 3);
  }

  #potato-viewer {
    height: unset;
  }

  #potato-viewer video {
    position: unset;
    height: unset;
    width: 100%;
  }

  .text-content {
    width: 100%;
    margin-left: 0;
    padding: 0;
  }

  h1 {
    font-size: 3.5rem;
    padding: 2rem 2rem 0;
  }

  main {
    background-color: #232321;
    padding: 2rem 2rem 0;
  }
}
</style>