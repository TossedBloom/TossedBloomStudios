<template>
    <h1>PotatoDex</h1>
  
      <main>
        <swiper
          :slides-per-view="1"
          space-between="50"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
          :modules="[Navigation, Pagination]"
        >
          <swiper-slide v-for="(potato, index) in potatoes" :key="index">
            <div class="potato-slide">
              <video :src="potato.video" muted autoplay loop></video>
              <div class="potato-slide-text">
                <h2>{{ potato.name }}</h2>
                <div v-html="potato.description"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
  
        <div class="pagination">
          <div
              class="potato-icon"
              v-for="(potato, index) in potatoes"
              :key="index"
              @click="goToSlide(index)"
              :class="{ active: currentSlide === index }"
              >
              <img :src="potato.icon" />
          </div>
        </div>
      </main>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import 'swiper/swiper-bundle.css';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination } from 'swiper/modules';
    import { potatoes } from './data/Potatoes';
    
    const currentSlide = ref(0);
    const swiperInstance = ref(null);
    
    const goToSlide = (index) => {
      if (swiperInstance.value) {
        swiperInstance.value.slideTo(index);
      }
      currentSlide.value = index;
    };
    
    const onSlideChange = (swiper) => {
      currentSlide.value = swiper.activeIndex;
    };
    
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
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
    background-color: #F5CB5C;
  
      padding: 0 5rem;
      min-height: calc(100vh - 80px - 2rem);
  }
  
  .pagination {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
  }
  
  .potato-icon {
      padding: 5px 10px;
      cursor: pointer;
  }
  
  .potato-icon.active {
      font-weight: bold;
  }
  
  .potato-icon img {
      width: 90px;
      filter: grayscale();
  }
  
  .potato-icon.active img {
      filter: none;
  }
  
  .potato-slide {
      width: 100%;
      display: flex;
      align-items: center;
  }
  
  .potato-slide-text {
      color: #F1F1F1;
  }
  
  .potato-slide > video {
  width: 100%;
  max-width: 480px;
  margin-bottom: 10px;
  border: 3px solid #1a1927;
  }
  </style>