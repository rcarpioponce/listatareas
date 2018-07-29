<template>
	<div>
		<h2>{{ tituloMayusculas() }}</h2>
		<h3>Tareas por hacer:</h3>
	</div>
</template>
<script>
export default {
	props:{
		titulo:{
			required:true,
			type: String,
			default: 'Tareas',
		}
	},
	methods:{
		tituloMayusculas(){
			return this.titulo.toUpperCase();
		}
	}
}	
</script>