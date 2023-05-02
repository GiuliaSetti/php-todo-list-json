const { createApp } = Vue

createApp({
  data() {
    return {
        todos:[]
    }
  },

  methods: {
    getTodos() {
      axios.get('./server.php').then(response => {

        console.log(response.data);

        this.todos = response.data;

      });
    }
  },

  mounted(){
    this.getTodos();
  }

 


}).mount('#app')