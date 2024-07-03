<template>
    <div class="projects">
      <h1>Projects</h1>

      <ul id="project-list">
        <li>
          <PotatoCopListing />
          <PotatoCopGlossaryListing />
          <ThePenguinInvasionListing />
          <MLTTListing />
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">
import PotatoCopListing from '@/components/project/potato-cop/Listing.vue'
import PotatoCopGlossaryListing from '@/components/project/tatodex/Listing.vue'
import ThePenguinInvasionListing from '@/components/project/penguin-invasion/Listing.vue'
import MLTTListing from '@/components/project/mltt/Listing.vue'

</script>

<style scoped lang="scss">
h1 {
  background-color: #1a1927;
  font-size: 5rem;
  padding: 2rem 5rem 0;
  margin: 0;
  color: #f0f0f0;
}

#project-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>