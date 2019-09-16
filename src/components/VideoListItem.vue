<template>
  <li class="list-group-item lista">
    <img v-bind:src="item.snippet.thumbnails.default.url" />

    <p>{{item.snippet.title}}</p>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["item"]
};
</script>
<style scoped>
.lista {
  display: flex;
  flex-flow: row;
}
p {
  align-self: center;
  margin-left: 20px;
}
</style>