<template>
  <div class="container">
    <h3>YouTube Made With Vue</h3>
    <SearchBar @termChange="onTermChange"></SearchBar>

    <VideoList v-bind:videos="videos" />
    <!-- <VideoList :videos="videos" />  - Essa Sintaxe sem o v-bind, significa exatamente a mesma coisa que a linha de cima.-->
    <span class="counter">{{videos.length}} videos matching this term</span>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
const API_KEY = "AIzaSyDTAQKEaJr-ww5OctDk7MuCaAR6jkHdYfM";
export default {
  name: "App",
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return { videos: [], term: "" };
  },
  methods: {
    onTermChange(searchTerm) {
      this.term = searchTerm;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(res => {
          // Aqui estou fazendo o equivalente ao this.setState()
          this.videos = res.data.items;
          console.log(`State do Vue: ${this.term}`);
        });
    }
  }
};
</script>

<style scoped>
.counter {
  font-weight: bold;
  font-size: 1em;
}
</style>