<template>
    <div class="projects">
      <h1>Projects</h1>

      <ul id="project-list">
        <li v-for="project in projects" :key="project.title">
          <ProjectListItem :project="project"/>
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">
import PotatoCopListingData from '@/data/potato-cop/Listing'
import PotatoCopGlossaryListingData from '@/data/tatodex/Listing'
import ThePenguinInvasionListingData from '@/data/penguin-invasion/Listing'
import MLTTListingData from '@/data/mltt/Listing'
import ProjectListItem from '@/components/ProjectListItem.vue'

const projects = [
  PotatoCopListingData,
  PotatoCopGlossaryListingData,
  ThePenguinInvasionListingData,
  MLTTListingData
]
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