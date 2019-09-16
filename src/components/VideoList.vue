<template>
  <div>
    <ul class="list-group m-5">
      <VideoListItem
        v-bind:item="singleVideo"
        v-for="singleVideo in videos"
        :key="singleVideo.etag"
      ></VideoListItem>
    </ul>
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  props: {
    videos: Array
  },
  components: {
    VideoListItem
  }
};
</script>

<style>
</style>