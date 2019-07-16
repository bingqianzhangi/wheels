<template>
	<div class="side">
		<ul>
			<li>#</li>
		</ul>
		<ul v-for="(item,index) in title" :key="index" @click="move(index)">
			<li>{{item}}</li>
		</ul>
  </div>
</template>

<script>
import Vue from 'vue';
import BSCroll from 'better-scroll';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'myList',
	props: {
		title: Array
	},
	methods: {
		// bscroll(){
		// 	this.leftSCroll=new BSCroll('.side',{
    //     click:true
    //   })
		// },
		move(ind){
			this.$emit('handleClick',ind);
		}
	},
});
</script>	

<style lang="scss">
.side{
	z-index: 99;
    position: fixed;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    padding-left: .2rem;
		ul{
			li{
				font-size: .24rem;
    		color: #666;
    		font-weight: 500;
    		padding: .02rem .1rem;
			}
		}
}
</style>
