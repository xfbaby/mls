<template>
<div> 
<ul class="prompt-list">
    <li v-for="item in result" class="item" data-action="jump2search">
    <span class="left" data-action="jump2search" >{{item.name}}</span> 
    <span class="right" v-if="item.tag">  
     <i v-for="sub in item.tag" class="tags" data-action="jump2search" >{{sub}}</i> 
   </span>
   </li>
</ul>
</div>
</template>
<script>
export default {
    name: 'app',
     props: {
        result:{
        type: Array,
    }
  },
    data() {
        return {

        }
    }
}
</script>
<style>
</style>