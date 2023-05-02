const { createApp } = Vue

createApp({
  data() {
    return {
        todos:[],
        newToDo: '',
    }
  },

  methods: {
    getTodos() {
      axios.get('./server.php').then(response => {

        console.log(response.data);

        this.todos = response.data;

      });
    },

    addToDo(){
      this.todos.push(this.newToDo);
      this.newToDo = '';
    }
  },

  mounted(){
    this.getTodos();
  }

 


}).mount('#app')