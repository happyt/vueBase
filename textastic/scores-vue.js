var data = {
   a : 0,
   b : 0,
   message: 'Hello Vue central!'
}

var vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    addOneA: function () {
      data.a += 1
    },

    minusOneA: function () {
      data.a -= 1
    },

    addOneB: function () {
      data.b += 1
    },

    minusOneB: function () {
      data.b -= 1
    }
  }
})

Vue.component('score-item', {
  props: { score: 77 },
  template: '<div class="bigdigits">counter {{score}}</div>'
})

Vue.component('scoreblock', {
  template: '<div class="card">aaa</div>'
})

