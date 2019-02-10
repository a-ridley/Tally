<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Title</p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer class="card-footer">
        <div>
      <font-awesome-icon :icon="['far', 'star']" fixed-width/>
        <font-awesome-icon :icon="['far', 'thumbs-up']"/>
        <font-awesome-icon :icon="['far', 'thumbs-down']"/>
      </div>
    </footer>
    <footer class="card-footer">
      <p class="card-footer-item">
        <a href="https://twitter.com/codinghorror/status/506010907021828096">
          <span>Share on
            <font-awesome-icon :icon="['fab', 'twitter']" fixed-width/>
          </span>
        </a>
      </p>

      <p class="card-footer-item">
        <a href="https://facebook.com">
          <span>Share on
            <font-awesome-icon :icon="['fab', 'facebook-square']" fixed-width/>
          </span>
        </a>
      </p>
    </footer>
  </div>
</template>


<script lang ="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";

@Component
export default class PetitionCard extends Vue {
  private created() {
    console.log(this.$route.params);
  }
}
</script>