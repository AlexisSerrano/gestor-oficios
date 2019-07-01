<template>
	<b-nav vertical class="sidebar">
		<a id="logo-container" href="/">
			<b-img id="logo" :src="require('#img/only-escudo-ver.png')"/>
			<span id="fge-text">FGE | VERACRUZ</span>
		</a>
		<b-nav-item active>Solicitudes asignadas</b-nav-item>
		<b-nav-item>Solicitudes pendientes</b-nav-item>
		<b-nav-item>Solicitudes en tramite</b-nav-item>
	</b-nav>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.sidebar {
		background: #1b1b1b;
		position: fixed;
		height: 100%;
		color: white !important;
	}
	a{
		color: white;
		margin: 5px 15px;
		font-size: 14px;
	}
	a:hover{
		color: gray;
		text-decoration: none;
	}
	#logo{
		width: 45px;
	}
	#logo-container{
		margin-left: 10px;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		padding-bottom: 15px;
		border-bottom: 2px solid #424242;
	}
	#fge-text{
		font-size: 17px;
		margin-left: 5px;
	}
	.active{
		background-color: #424242;
		border-radius: 5px;
	}
</style>