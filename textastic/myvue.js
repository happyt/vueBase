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
 alert("go")

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


Vue.component('score-item', {
  props: { score: 77 },
  template: '<div>counter {{score}}</div>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

