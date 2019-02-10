<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/petitions">Petitions</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~bulma/css/bulma.css";

  .fa-star{
    color: gold
  }
  .fa-thumbs-up {
    color: green
  }
  .fa-thumbs-down{
    color: maroon
  }
</style>
