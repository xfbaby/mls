<template>
  <div>
    

<div class="init-box rec-show-log"> <span class="tit-icon"></span>
        <h3 class="title">热门搜索</h3>
        <ul class="list"  >
            <li v-for="item in hot" class="show-log-item" data-log-index="0"> 
              <router-link :to="'index'"  :class="item.flage?'red a-list':'a-list' ">{{item.dec}}</a> </router-link></li>
          
        </ul>
    </div>
      </div>
</template>
<script>
export default {
    name: 'app',
    props: {
    hot:{
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