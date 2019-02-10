<template>
  <div class="card" v-on:click="_openCategory(categoryId)">
    <div :class="'card-image'">
      <figure class="image is-2by1">
        <img :src="backgroundimage" class="image">
      </figure>
    </div>
    <div class="card-content is-flex is-horizontal-center">
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <p class="title is-4">{{title}}</p>
          <p class="subtitle is-6">{{subtitle}}</p>
        </div>
      </div>

      <div class="content">
        <br>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router";

@Component
export default class CategoryCard extends Vue {
  @Prop(String) public title!: string;
  @Prop(String) public subtitle!: string;
  @Prop(String) public backgroundimage!: string;
  @Prop(Number) public categoryId!: number;

  private _openCategory(categoryId: number) {
    this.$router.push({ name: "petitions", params: { categoryId, title: this.title } as Dictionary<any> });
  }
}
</script>

<style scoped lang="scss">
  .card {
    cursor: pointer;
  }
</style>
