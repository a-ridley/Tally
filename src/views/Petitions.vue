<template>
  <div>
    <Navbar/>
    <div class="columns">
      <div class="column is-7 is-offset-1">
        <PetitionAdder :categoryId="categoryId"/>
      </div>
      <div class="column is-3">
        <CategoryCard title="Trending Now!" subtitle="Highest Voted"/>
        <font-awesome-icon :icon="['far', 'star']" fixed-width/>
      </div>
    </div>

    <div class="columns">
      <div class="column is-7 is-offset-1">
        <PetitionCard title="WOOO"/>
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

@Component({
  components: {
    CategoryCard,
    Navbar,
    PetitionCard,
    PetitionAdder,
  },
})
export default class Petitions extends Vue {
  private categoryId!: number;

  private created() {
    this.categoryId = this.$route.params.categoryId as any;
  }
}
</script>