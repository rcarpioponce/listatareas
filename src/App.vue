<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>   
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
export default {
  components:{
    Titulo,
    NuevaTarea
  },
  data(){
    return {
      titulo: 'Lista de tareas',
      tareas: [
        {
          texto: 'Aprender Vue.js',
          terminada: false
        },
        {
          texto: 'Aprender Angular 2',
          terminada: false
        },
        {
          texto: 'Aprender Ionic 2',
          terminada: false
        }                
      ]
    }
  }
}
</script>

<style>

</style>
