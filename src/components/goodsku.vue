
<template>
<div>
<div id="M_Mask" class="ui-mask"  ></div>
<section id="J_GoodsSku" class="goods-sku" >
    <div class="content">
        <div class="sku-title">
            <div class="sku-title-img"> <img src="//s11.mogucdn.com/mlcdn/c45406/170607_4lcg611jg1330k297kk78g30h183a_640x960.jpg_160x240.v1cAC.jpg" alt=""> </div>
            <div class="sku-title-desc"> <span class="sku-title-text">夏季新款纯色白色t恤短袖女2018韩版四色V领百搭简约小清新宽松体恤女上衣</span> <span class="sku-title-price"> <span class="price">¥39.90</span> <span class="sku-stock">库存<span class="stock">39990</span>件</span>
                </span> <span class="sku-title-addon">请选择颜色、尺码</span> </div> <span class="close" @click="close()">╳</span> </div>
        <div class="scroll">
            <div class="sku-list">
                <dl class="style clearfix">
                    <dt>颜色：</dt>
                    <dd>
                        <ol class="J_StyleList style-list clearfix" style="">
                            <li :class="[color==1?'c':'']"  title="冰海蓝" @click="()=>{color==1?color=0:color=1}"> 冰海蓝</li>
                            <li :class="[color==2?'c':'']"  title="自然白"  @click="()=>{color==2?color=0:color=2}"> 自然白</li>
                            <li :class="[color==3?'c':'']" title="奶茶色"  @click="()=>{color==3?color=0:color=3}"> 奶茶色</li>
                        </ol>
                    </dd>
                </dl>
                <dl class="size clearfix">
                    <dt>尺码：</dt>
                    <dd>
                        <ol class="J_SizeList size-list clearfix" style="">
                            <li :class="[size==1?'c':'']" title="S" @click="()=>{size==1?size=0:size=1}"> S</li>
                            <li :class="[size==2?'c':'']" data-id="101" title="M"  @click="()=>{size==2?size=0:size=2}"> M</li>
                            <li :class="[size==3?'c':'']" data-id="102" title="L"  @click="()=>{size==3?size=0:size=3}"> L</li>
                            <li :class="[size==4?'c':'']" data-id="103" title="XL"  @click="()=>{size==4?size=0:size=4}"> XL</li>
                        </ol>
                    </dd>
                </dl>
            </div>
            <div class="sku-num">
                <p class="title">数量:</p>
                <div class="clearfix">
                    <div class="sku-counter"> <span class="num-reduce num-disable"> <b class="reduce-icon" @click='()=>{num>1?--num:num=1}'>－</b> </span> <em class="num-input">{{num}}</em> <span class="num-add"> <b class="add-icon" @click='()=>{++num}'>＋</b>                         </span> </div>
                </div>
            </div>
        </div>
        <div class="action"> <span class="confirm" @click="add">确定</span> </div>
        <form style="display:none" action="http://m.meilishuo.com/order/orderConfirm" method="GET">
            <input type="hidden" name="data" id="form-data">
            <input class="go_charge js-action js-charge-num" type="submit" value="去结算"> </form>
    </div>
     <component :is="isTotal" :message="message"></component>
</section>

</div>

</template>

<script>
import total from './toast';
import {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage
} from '@/utils/mixin';
 import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
 props: {
  isend:{
    type:Boolean,
    default:true
  }
 },
    data() {
      return {
        color:0,
        size:0,
        num:1,
        isTotal:"",
        message:"",
        isshows:this.isend
      };
    },
    watch:{
    },

    components: {total},

    computed: {
       ...mapGetters([
        'cartProductData',
        'newdata',
      ])



    },

    methods: {
      close(){
         if(document.getElementById("J_GoodsSku")){
        document.getElementById("J_GoodsSku").style.display="none";
      }
       if(document.getElementById("M_Mask")){
        document.getElementById("M_Mask").style.display="none";
      }

      },
     add(){
        if(this.color==0||this.size==0){
          this.isTotal = total;
          this.message = "请选择颜色、尺码";
        }
        else{
           let islogin = this.$store.dispatch('IsLogin');
           islogin.then(()=>{
          let item = {size:this.size,color:this.color,id:1,num:this.num};
          let params = JSON.stringify(item);
          this.$store.dispatch('SelectProduct', params);
          let temp =  this.newdata;
          setSessionStorage('GoodItem', temp);

          this.close();
       
      
          
        },()=>{ this.$router.push("/login");})
        }
  

      }


    },

    mounted: function () {

    }
  }

</script>

<style>
  
.goods-sku{visibility: visible;}
</style>