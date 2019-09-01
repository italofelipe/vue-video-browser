import Vue from "vue";
import App from "./App";

new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
  }
});

// A função acima pode ser reescrita na forma de:
/*
new Vue({
    render: h => h(App)
})

Simplesmente não se sabe o porquê desse h, é uma convenção usada no Vue, só isso.
*/
