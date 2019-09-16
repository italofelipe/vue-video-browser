<template>
  <div class="search-bar-container">
    <input type="text" class="video-input" @input="onInput" placeholder="You can search anything!" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(e) {
      this.$emit("termChange", e.target.value);
    }
  }
};
</script>

<style>
body {
  font-family: Consolas, sans-serif;
}
.search-bar-container {
  border: 1px solid #ccc;
  padding: 10px 20px;
  box-shadow: 3px 3px 3px #ababab;
  width: 60vw;
  text-align: center;
  display: flex;
  align-items: flex-end;
}
.video-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #999;
  padding: 10px 5px;
  width: 85%;
}
</style>