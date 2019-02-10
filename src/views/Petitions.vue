<template>
  <div>
    <Navbar/>

    <div class="columns">
      <div class="column is-7 is-offset-1">
        <h1 class="title">{{ title }} Petitions</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-7 is-offset-1">
        <PetitionAdder :categoryId="categoryId"/>
      </div>
    </div>

    <div class="columns" v-for="petition in petitions" :key="petition.id">
      <div class="column is-7 is-offset-1">
        <PetitionCard :petition="petition"/>
      </div>
    </div>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoryCard from "@/components/CategoryCard.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import PetitionCard from "@/components/PetitionCard.vue";
import PetitionAdder from "@/components/PetitionAdder.vue";
import { Route } from "vue-router";
import { TallyBackend } from "../services/tally-backend";

@Component({
  components: {
    CategoryCard,
    Navbar,
    PetitionCard,
    PetitionAdder,
  },
})
export default class Petitions extends Vue {
  public client!: TallyBackend.Client;
  private title!: string;
  private categoryId!: number;
  private petitions: void | TallyBackend.PetitionEntity[] = [];

  private async beforeCreate() {
    this.client = new TallyBackend.Client("http://tallyapi.abicastro.com");
    this.title = this.$route.params.title as any;
    this.categoryId = this.$route.params.categoryId as any;
    this.petitions = await this.client.getAllPetitions(this.categoryId).catch((err) => console.error(err));
  }
}
</script>