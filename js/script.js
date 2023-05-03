const { createApp } = Vue;

createApp({

  data() {
    return {
      todos: [],

      newToDo: '',
    }
  },

  methods: {
    getTodos() {

      axios.get('./server.php').then(response => {

        // console.log(response.data);
        this.todos = response.data;

      });
    },

    addToDo() {

      let data = {
        newToDo: '',
      }

      data.newToDo = this.newToDo;

      axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {

        console.log(response);

        this.getTodos();
      });

      this.newToDo = "";
    },
  },

  mounted() {
    this.getTodos();
  },

}).mount('#app');