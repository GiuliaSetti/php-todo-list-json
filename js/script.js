const { createApp } = Vue;

createApp({

  data() {
    return {
      todos: [],

      newTodo: '',
    }
  },

  methods: {
    getTodos() {

      axios.get('./server.php').then(response => {

        // console.log(response.data);
        this.todos = response.data;

      });
    },

    addTodo() {
      this.newTodo = "";

      let data = {
        newTodo: '',
      }

      data.newTodo = this.newTodo;

      axios.post('./server.php', data, {header: {'Content-Type': 'multipart/form-data'}}).then(response => {

        console.log(response);

        this.getTodos();
      });
    },
  },

  mounted() {
    this.getTodos();
  },

}).mount('#app');