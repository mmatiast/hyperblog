Vue.component('saludo',{
    template: //html
    `
    <div>
    <h1>{{saludo}}</h1>
    <h3>este es una prieve ve</h3>
    </div>
    `,
    data(){
        return{
            saludo: 'hola desde vue'
        }
    }

});