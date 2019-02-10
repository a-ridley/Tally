<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Add Petition</p>
    </header>
    <div class="card-content">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Save the world!" v-model="title">
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" placeholder="Desciption of how we'll do it" v-model="description"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button v-on:click="createPetition()" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang ="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import { TallyBackend } from "../services/tally-backend";

@Component
export default class PetitionAdder extends Vue {
  @Prop(Number) private categoryId!: number;
  private client!: TallyBackend.Client;
  private title: string = "";
  private description: string = "";

  private beforeCreate() {
    this.client = new TallyBackend.Client("http://tallyapi.abicastro.com");
  }

  private async createPetition() {
    const model = new TallyBackend.CreatePetitionModel({
      title: this.title,
      description: this.description,
      category: this.categoryId,
    });

    await this.client.createPetition(model).catch((err) => console.error(err));
  }
}
</script>