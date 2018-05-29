<template>
    <div class="MCUBE_MOD_ID_117244">
         <div class="page_activity page_type_h5  ">
          <SearchBar  @showCityName="showis"/> 
        </div>
        <div :class="[pr?'box-wrap pr':'box-wrap']">
            <div class="list silde_box">
                 <div class="show-log-item l-item"><anchor v-for="item  in info" :box="item" /></div>
        </div>
        
        </div>
        <div class="primary-swiper">
     <swiper :options="swiperOption" ref="mySwiper"  v-show="pr">
    <swiper-slide v-for="items in slideimg"><img :src="items.url" :alt="items.text"> </swiper-slide>
   <div class="swiper-pagination"  slot="pagination"></div>
 
  </swiper>
</div>
        <div class="margin-block-box" style="margin-top: 0.1rem; margin-bottom: 0.1rem;" v-show="pr">

        
                <div class="bg_imgbox J_dynamic_imagebox" ><img class="J_dynamic_img fill_img pr" src="https://s10.mogucdn.com/mlcdn/c45406/171030_6ja2gfl82cl093768ilk7g0fb2fj1_740x543.jpg_1300x9999.v1c7E.70.webp" alt=""></div>
                        </div>
                       <!--  <tab class="pr"/> -->
                       <div  v-show="pr" class="module_row module_row_123585 MOD_ID_116894" data-mid="123585" data-versionid="1208234" id="m123585" data-editable="0" data-acm="3.mf.1_0_0.0.0.0.mf_11248_123585"><div class="mod_row MCUBE_MOD_ID_116894">
    <div class="fake-nav" style="height: 0px;"></div>
        
<div class="nav-wrap clearfix pr">
    <a class="nav-item fl" :class="[active==1?'active':'']" @click="()=>{active=1}">
                 <span>流行</span>
             </a>
    <a class="nav-item fl" :class="[active==2?'active':'']" href="javascript:void(0);"  @click="()=>{active=2}">
                 <span>新款</span>
             </a>
    <a class="nav-item fl" :class="[active==3?'active':'']"  href="javascript:void(0);"  @click="()=>{active=3}">
                 <span>精选</span>
     </a>
</div>
</div></div>
        <div v-show="pr" class="module_row module_row_116980 MOD_ID_116891">
    <div class="mod_row MCUBE_MOD_ID_116891">
    <div  class="wall-wrap waterfall-container">
      <good v-for="(it,index) in goodlist" :id='index' :item='it'/>
</div>

    </div></div>
    <foot v-show="pr"/>
    </div>
     
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
import foot from './foot';
import SearchBar from './searchBar';
import anchor from './anchor';
import good from './good';

import {all} from '../service/getData';
export default {
  name: 'app',

  data () {
    return {
        info:[],
        pr:true,
        goodlist:[],
        alllist:[],
        active:1,
        isshow:false,
        swiperOption: {
        loop: true,
       pagination: { el: ".swiper-pagination"},
        
        speed:500,
        paginationClickable: true,
        autoplay: {
       disableOnInteraction: false,
        delay:1000
        }
       
     },
     slideimg:[]
     
    }
  },
   methods:{
    showis(v){
      this.pr = !v;


    }

   },
   watch:{
    active(v){
      v--;
    this.goodlist = this.alllist.slice(v,v+6);

    }


   },
  created(){
   
    if(all.code==0){
       this.info = all.data.info;
       this.slideimg = all.data.banner;
       this.alllist = all.data.good;
       this.goodlist = this.alllist.slice(0,6);

    }
    else{
      alert("网络不给力")
    }
  },
   components: {
      swiper,  
      swiperSlide,
       SearchBar,
       anchor,
       good,
       foot
    },
     computed: {
        swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style>
.pr{
   position: relative;
   z-index: 999;
}  
.MCUBE_MOD_ID_117244 .list .l-item{
    display: flex;
}
.MCUBE_MOD_ID_117244 .list .l-item a{
    width: 25%;
        padding-right: 0.2rem;
}
.MCUBE_MOD_ID_118074 .prompt-panel{
      z-index: auto;
}
.MCUBE_MOD_ID_116891 .item-wrap{width: 50%;float: left;}
.MCUBE_MOD_ID_116891 .iwf .img-wrap img{height: 200px;}
 .MCUBE_MOD_ID_116891 .iwf .img-wrap{height: auto}
 .MCUBE_MOD_ID_116891 {
    height: auto;
    overflow: hidden;
}
.nav-wrap {display: flex;}
.nav-wrap  a{flex:1;}
.primary-swiper{height: 180px;}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{bottom: 40px;}
.primary-swiper{
      position: relative;
    overflow: hidden;
    clear: both;
}
.primary-swiper img{padding: 0;vertical-align: top;min-height:180px;}
.swiper-slide{padding: 0;}
</style>
