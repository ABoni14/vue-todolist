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
    ],

    stringToDo: 
    {
      frase: "",
      isUnderscore: false,
    },
    errorMsg: false,
  },

  methods: {
    removeItem(index){
      this.todoList.splice(index, 1);
    },

    insertItem(){
      if(this.stringToDo.frase.length < 2) {
        this.errorMsg = true;
        setTimeout(() =>{
          this.errorMsg = false;
        },5000);
      }else{
        this.todoList.push(this.stringToDo);
        this.stringToDo = 
        {
          frase: "",
          isUnderscore: false,
        };
        this.errorMsg = false;
        console.log(this.todoList);
        console.log(this.toDoList);
      }
    },

    }
  }
)