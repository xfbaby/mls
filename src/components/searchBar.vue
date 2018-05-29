<template>
  <div class="MCUBE_MOD_ID_118074">
<div class="module_row module_row_124088 MOD_ID_118074">
    <div class="mod_row MCUBE_MOD_ID_118074">
        <div class="lazyData">
            <header class="search-wrapper lazyData">
                <form id="js-form" method="post"><a href="/" class="home_btn"></a>
                    <input class="js-search-input search-input"  type="search" autocomplete="off" placeholder="套装"
                     v-model="keyword" @click="()=>{searchVisiblie=true;icon='cancel'}">
                    <div id="js-right-btn"  class="right-btn"  :data-action="icon" @click="()=>{keyword='';searchVisiblie=false;icon='jump2im'}"></div>
                </form>
            </header>

        </div>

    </div>
   
    
</div>
 <component class="prompt-panel "  v-bind:is=current :hot="hotData" :result="searchRusultData"></component> 
</div>
</template>

<script>

import {searchGoods} from '../service/getData';
import Hotsearch from './hotsearch';
import searchList from './serachList';
export default {
  name: 'app',
  data () {
    return {
      keyword:"",
      searchVisiblie: false,
      hotData:[],
      searchRusultData:[],
      icon:"jump2im",
     /* current:this.searchVisiblie?Hotsearch:searchList*/
     
    }
  },
 
     watch: {
      keyword(val) {
        this.searchRusult(val);
        this.searchVisiblie  = false;
        this.icon = "submit";
        if(val.length==0){
          this.current = Hotsearch;
           this.searchVisiblie  = !false;


        }
      },
      searchVisiblie(v){
        if(this.keyword){
          v = true;
        }
        this.$emit('showCityName',v);

      }
    },
    computed:{
      current:{
        get:function(){
            if(this.searchVisiblie){
          return Hotsearch
        }
        else {
          return searchList
        }
         },
         set:function(newValue){
          if(this.keyword.length==0){
            newValue = Hotsearch
             
          }
           return newValue
         }

      
      }

    },
  components: {
    Hotsearch,
    searchList
  },
    mounted: function () {
      try{
      /*  this.hotData = JSON.parse(getLocalStorage('hotData'));*/
      this.hotData = [{"dec":"连衣裙","flage":true},{"dec":"小白鞋","flage":false},{"dec":"省心套装","flage":true},{"dec":"碎花连衣裙","flage":true},{"dec":"明星同款","flage":true},{"dec":"高跟鞋","flage":true},{"dec":"美妆","flage":false},{"dec":"明星同款","flage":true}]
      }catch(err){}
    },
    methods:{
    searchRusult(key) {
        this.searchRusultData =searchGoods;
      },  
    }


}
</script>

<style>
.MCUBE_MOD_ID_118074 .prompt-panel{display: block}
</style>
