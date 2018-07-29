<template>
	<div>
		<h2>{{ tituloMayusculas() }}</h2>
		<h3>Tareas por hacer: {{numTareas}}</h3>
	</div>
</template>
<script>
export default {
	props:['titulo','numTareas'],
	methods:{
		tituloMayusculas(){
			return this.titulo.toUpperCase();
		}
	}
}	
</script>