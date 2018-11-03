<template>
	<div id="TheHead" class="lu-flex">
		<div class="logo"></div>
		<div class="msg">
			<div>{{ title }}</div>
			<div>作者{{ author }}</div>
		</div>
		<div class="box"></div>
	</div>
</template>


<script >
export default {
	name: 'TheHead',
	data(){
		return {
			title: 'xing-se.com.cn',
			author: 'lulehe',
		}
	}
}
</script>


<style scoped>
	#TheHead {
		width: 100%;
		height: 80px;
		padding: 10px;
		align-items: center;
		color: #fff;
		background-color: #333;
	}
	#TheHead .logo {
		width: 60px;
		height: 60px;
		border-radius: 100%;
		background-color: #999;
	}
	#TheHead .box{
		flex: 0 0 200px;
		height: 100%;
		background-color: rgba(0,0,0,0.2);
	}
</style>