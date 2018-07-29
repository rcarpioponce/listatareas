<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      {{numTareas}}
      <nueva-tarea :tareas="tareas" v-on:incrementarContador="numTareas += $event"></nueva-tarea>   
      <lista-tareas :tareas="tareas"></lista-tareas>   
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'
export default {
  components:{
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data(){
    return {
      titulo: 'Lista de tareas',
      numTareas: 3,
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
