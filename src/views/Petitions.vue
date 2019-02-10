<template>
  <div>
    <Navbar/>
    <div class="columns">
      <div class="column">
          <div class="column is-6 is-offset-3">
            <PetitionCard/>
            <div class="column">
              <PetitionCard/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoryCard from "@/components/CategoryCard.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import PetitionCard from "@/components/PetitionCard.vue";

@Component({
  components: {
    CategoryCard,
    Navbar,
    PetitionCard,
  },
})
export default class Petitions extends Vue {}
</script>