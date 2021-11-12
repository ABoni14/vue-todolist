const app = new Vue({
  el:'#app',

  data: {

    todoList:
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
    removeItem(index){
      this.todoList.splice(index, 1);
    },
    }

  }
)