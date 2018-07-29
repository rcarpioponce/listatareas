<template>
	<div class="input-group">
		<input type="text" placeholder="Escriba una nueva tarea" v-model="nuevaTarea"  class="form-control" v-on:keyup.enter="agregarTarea">
		<span class="input-group-btn">
			<button type="button" v-on:click="agregarTarea" class="btn btn-primary">Agregar</button>
		</span>
	</div>		
</template>
<script>
import { bus } from './main.js'	
export default {
	data(){
		return {
			nuevaTarea:'',
		}
	},
	props:['tareas','actualizarContador'],
	methods: {
		agregarTarea(){
			let texto = this.nuevaTarea.trim();
			if(texto){
				this.tareas.push({
					texto: texto,
					terminada: false
				});
				//this.actualizarContador();
				bus.$emit('actualizarContador',this.tareas.length);
			}
			this.nuevaTarea = '';

		}
	},
	created(){
		bus.$emit('actualizarContador',this.tareas.length);
	}
}	
</script>