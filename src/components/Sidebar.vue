<template>
	<b-nav vertical class="sidebar">
		<a id="logo-container" href="/">
			<b-img id="logo" :src="require('#img/only-escudo-ver.png')"/>
			<span id="fge-text">FGE | VERACRUZ</span>
		</a>
		<b-nav-item active>
			<font-awesome-icon size="lg" class="iconos" icon="phone"/>
			<span class="ml-2">Solicitudes asignadas</span>
		</b-nav-item>
		<b-nav-item>
			<font-awesome-icon size="lg" class="iconos" icon="calendar-check"/>
			<span class="ml-2">Solicitudes pendientes</span>
		</b-nav-item>
		<b-nav-item>
			<font-awesome-icon size="lg" class="iconos" icon="envelope"/>
			<span class="ml-2">Solicitudes en tramite</span>
		</b-nav-item>
	</b-nav>
</template>

<style lang="scss" scoped>
	.sidebar {
		background: #1b1b1b;
		position: fixed;
		height: 100%;
		color: white !important;
		transition: width 1s;
		width: 230px;
	}
	.sidebar:hover{
		width: 150px;
	}
	a{
		color: white;
		margin: 5px 5px;
		font-size: 14px;
	}
	a:hover{
		color: gray;
		text-decoration: none;
	}
	#logo{
		width: 45px;
		margin-right: 4px;
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
	}
	.active{
		background-color: #424242;
		border-radius: 5px;
	}
</style>