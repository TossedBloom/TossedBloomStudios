<template>
  <nav v-if="$route.name !== 'home'">
    <router-link to="/"><img :src="logo" /></router-link>
    <router-link to="/projects">Projects</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import logo from '@/assets/images/logo.jpg'

</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  padding: 30px 5rem;
  background: black;
  border-bottom: 2px solid #1c1c1c;

  img {
    width: 45px;
    height: 45px
  }

  a {
    height: 45px;
    line-height: 45px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #f0f0f0;
    margin-right: 1.5rem;

    &.router-link-exact-active {
      color: #f0f0f0;
    }
  }
}

@media only screen and (max-width: 774px) {
  nav {
    padding: 30px 2.5rem;
  }
}
</style>
