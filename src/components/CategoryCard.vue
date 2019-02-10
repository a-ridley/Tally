<template>
<div class="card">
  <div :class="'card-image'">
    <figure class="image is-2by1">
      <img :src="backgroundimage" class="image">
    </figure>
  </div>
  <div class="card-content is-flex is-horizontal-center">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content ">
        <p class="title is-4">{{title}}</p>
        <p class="subtitle is-6">{{subtitle}}</p>
      </div>
    </div>

    <div class="content">
      <br>
    </div>
  </div>
</div>


  <!-- <div :class="'card ' + background_image">
  <div class="card-content">
    <p class="title">
      {{ title }}
    </p>
    <p class="subtitle">
      {{subtitle}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryCard extends Vue {
  @Prop(String) public title!: string;
  @Prop(String) public subtitle!: string;
  @Prop(String) public backgroundimage!: string;
}
</script>
