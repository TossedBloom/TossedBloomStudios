<template>
    <div>
      <!-- Pagination Icons -->
      <div class="pagination">
        <div
          class="potato-icon"
          v-for="(potato, index) in potatoes"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: currentSlide === index }"
        >
          {{ potato.name }}
        </div>
      </div>
  
      <swiper
        :slides-per-view="1"
        space-between="50"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        ref="swiperRef"
        :modules="[Navigation, Pagination]"
      >
        <swiper-slide v-for="(potato, index) in potatoes" :key="index">
          <div class="potato-slide">
            <video :src="potato.video" muted autoplay loop></video>
            <div>
              {{ potato.name }}
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import 'swiper/swiper-bundle.css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination } from 'swiper/modules';
  import { potatoes } from './data/Potatoes';
  
  const currentSlide = ref(0);
  const swiperRef = ref(null);
  
  const goToSlide = (index) => {
    if (swiperRef.value) {
      swiperRef.value.slideTo(index);
    }
    currentSlide.value = index;
  };
  
  const onSlideChange = (swiper) => {
    currentSlide.value = swiper.activeIndex;
  };
  
  const onSwiper = (swiper) => {
    swiperRef.value = swiper;
  };
  </script>

<style>
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

.potato-slide {
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}

.potato-slide > video {
width: 100%;
max-width: 600px;
margin-bottom: 10px;
}
</style>