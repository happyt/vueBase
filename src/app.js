import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hello there 5'
  },
  template: '<div id="app">abc {{ hello }}</div>'
})

export { app }
