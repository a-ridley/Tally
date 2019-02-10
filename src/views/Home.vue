<template>
  <div>
    <Navbar/>
    <div class="columns">
      <div class="column is-7 is-offset-1">
        <div class="columns">
          <div class="column">
            <CategoryCard
              title="Traffic"
              subtitle="Why couldn’t the toilet paper cross the road? Because it was stuck in a crack."
              backgroundimage="https://www.sibfl.net/wp-content/uploads/2018/11/Safety-Web-Featured-Image.jpg"
              :categoryId="0"
            />
          </div>

          <div class="column">
            <CategoryCard
              title="School Safety"
              subtitle="Why can't you do your calculus homework on a Friday night? Because you can't drink and derive."
              backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwxXC7GMkgy6gdeOmI555b4WPZsKqB6NllXxK0k3hGHhHmnuyEg"
              :categoryId="1"
            />
          </div>

          <div class="column">
            <CategoryCard
              title="Wildlife"
              subtitle="Whats the best way to call a skunk? - Long distance!"
              backgroundimage="https://images.campgroundsigns.com/img/dp/lg/campground-safety-sign.png"
              :categoryId="5"
            />
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <CategoryCard
              title="Laws and Regulations"
              subtitle="The fly-over or landing or takeoff, on public property, of a flying saucer, of whatever nationality, is prohibited."
              backgroundimage="data:image/jpeg;base64,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"
              :categoryId="3"
            />
          </div>

          <div class="column">
            <CategoryCard
              title="Education"
              subtitle='"Develop a passion for learning. If you do, you will never cease to grow." -Anthony J D`Angelo '
              backgroundimage="https://www.roundsconsulting.com/wp-content/uploads/2018/09/education.jpg"
              :categoryId="2"
            />
          </div>

          <div class="column">
            <CategoryCard
              title="Local Events"
              subtitle='"Social media is not about the exploitation of technology but service to community" -Simon Mainwaring'
              backgroundimage="https://new.linguistlist.org/static/img/LocalEvents.png"
              :categoryId="4"
            />
          </div>
        </div>
      </div>
      <div class="column is-3">
        <CategoryCard title="Trending Now!" subtitle="Highest Voted"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoryCard from "@/components/CategoryCard.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    CategoryCard,
    Navbar,
  },
})
export default class Home extends Vue {
}
</script>
