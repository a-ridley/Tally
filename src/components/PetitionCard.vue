<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ petition.title }}</p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">

      <div class="content">
        {{ petition.description }}
        <!-- <br> -->
        <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item align-left">
        <font-awesome-icon :icon="['far', 'star']" fixed-width/> &nbsp; &nbsp;
        <font-awesome-icon class="clickable" v-on:click="upVote()" :icon="['far', 'thumbs-up']"/> &nbsp; {{ petition.upVotes }} &nbsp;
        <font-awesome-icon class="clickable" v-on:click="downVote()" :icon="['far', 'thumbs-down']"/> &nbsp; {{ petition.downVotes }}
      </p>
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
            <font-awesome-icon :icon="['fab', 'facebook']" fixed-width/>
          </span>
        </a>
      </p>
    </footer>
  </div>
</template>


<script lang ="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import { TallyBackend } from "../services/tally-backend";

@Component
export default class PetitionCard extends Vue {
  private client!: TallyBackend.Client;
  @Prop(TallyBackend.PetitionEntity) private petition!: TallyBackend.PetitionEntity;
  private categoryId!: number;

  private beforeCreate() {
    this.client = new TallyBackend.Client("http://tallyapi.abicastro.com");
    this.categoryId = this.$route.params.categoryId as any;
  }

  private async upVote() {
    await this.client.upvotePetition(this.petition.id as string);

    this.petition.upVotes += 1;
  }

  private async downVote() {
    await this.client.downvotePetition(this.petition.id as string);

    this.petition.downVotes += 1;
  }
}
</script>

<style scoped>
  .align-left {
    justify-content: left;
  }

  .clickable {
    cursor: pointer;
  }
</style>
