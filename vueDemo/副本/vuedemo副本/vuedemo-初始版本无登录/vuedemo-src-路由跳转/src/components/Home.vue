<template>
	<!-- 组件只能有一个根对象 -->
	<div>
	<h1>this is home page</h1>
	<router-link id="FirstPart" to="/Home">FirstPart</router-link>
	<router-link id="SecondPart" to="/Home/SecondPart">SecondPart</router-link>
	<hr>
    <router-view></router-view>
    </div>
</template>