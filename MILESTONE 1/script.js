const app = new Vue({
  el:'#app',

  data: {
    todoList: [
      'Andare a fare la spesa',
      'Studiare per il corso Boolean',
      'Pagare affitto casa',
      'Andare dal dentista',
      
    ],

    todoList2:
    [
      {
        frase: 'Andare a fare la spesa',
        isUnderscore: false
      },
      {
        frase: 'Studiare per il corso Boolean',
        isUnderscore: false
      },
      {
        frase: 'Pagare affitto casa',
        isUnderscore: false
      },
      {
        frase: 'Andare a fare la spesa',
        isUnderscore: false
      },
      {
        frase: 'Andare a fare la spesa',
        isUnderscore: false
      },
    ],

    stringToDo: "",

    
  },
  methods: {

    }

  }
)