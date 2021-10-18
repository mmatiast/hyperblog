const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Practica con vue.js',
        tareas:[],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false 
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
<<<<<<< HEAD
            this.tareas[index].estado = !this.tareas[index].estado;
=======
            this.tareas[index].estado =!  this.tareas[index].estado;
>>>>>>> e79a73b8815da75161cc0c6245b56b0f14d10cdf
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminar: function (index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB =  JSON.parse(localStorage.getItem('gym-vue'));
        if  (datosDB === null){
            this.tareas = [];
        }else {
            this.tareas = datosDB;
        }
    }

    
})