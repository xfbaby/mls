
<template>
<div>
  <topbar :title="title" :op="op" :link="link"/>
 <div >  <div class="none_info" v-if="newdata.length==0"> <p>您的购物车还空着呢，</p> <p>美物这么多，快去看看吧～</p> <a href="javascript:;" @click="()=>{this.$router.push('index')}"  class="btn">去逛逛</a> </div> </div> 
<ul class="order_list_list"  v-for="(item,index) in newdata" v-if="newdata.length!=0">
    <li class="cart_list" >
        <div class="shop_title order_info">
    
            <div class="shop_name">
            <a href="javascript:;">店铺：一见钟情{{index}}企业店</a></div>
            <div class="fold_btn js-action" data-action="fold">展开</div>
            <div class="shop_tatol_price">合计：<span class="shop_price_text">¥0.00</span></div>
        </div>
        <ul class="order_goods_list">
            <li  class="goods" >
                  <div class="box_btn">
                    <input type="checkbox" :id="index" class="select_goods" >
                    <label :for="index"></label>
                </div>
                <div class="main"> <a class="pic_wrap lazyload-img-end" href="javascript:;" style="background-image: url(&quot;http://s3.mogucdn.com/mlcdn/55cf19/180523_66421ae2a9j9jked4cheaibfadhi0_800x800.jpg_330x440.v1cAC.70.webp&quot;); background-size: cover;">  </a>
                    <div class="middle">
                        <a href="/wap/detail/1m29j2g">
                            <p class="title">【{{index*10+25}}元两件】ins超火的2018上衣短袖街头潮人原宿BF风情侣学生</p>
                        </a>
                        <p class="prop"> <span class="first">颜色：848#{{item.color|clocolor}}</span> <span class="">尺码：{{item.size|closize}}</span> </p>
                        <div class="numBox">
                            <div class="minus disabled">-</div>
                            <input type="text" class="js-amount amount nums"  :value="item.num" readonly="">
                            <div class="add plus">+</div>
                            <div class="nums_mask"></div>
                        </div>
                    </div>
                    <div class="right">
                        <p class="goods_price" data-price="28.00">¥28.00</p>
                        <p class="origin_price"> ¥40.00</p>
                        <div class="delete_btn js-action" @click="removeSingle(index)">删除</div>
                    </div>
                </div>
            </li>
        </ul>
    </li>
</ul>

  <foot/>
</div>

</template>

<script>
 import {
    mapGetters,
    mapMutations
  } from 'vuex';
import '../css/cart.css' /*引入公共样式*/
import topbar  from './topbar'
import foot from './foot';
  export default {
    data() {
      return {
        title:"购物车",
        op:"首页",
        link:"/index"
      };
    },

    watch: {},

    components: {
      topbar,
      foot

    },

    computed: {
       ...mapGetters([
        'cartProductData',
        'newdata'
      ])


    },

    methods: {
      removeSingle(index){
        this.newdata.splice(index,1);

      }
    },

    mounted: function () {
      console.log(this.newdata);


    }
  }

</script>
<style lang="css">
  
.none_info {
    text-align: center;
    padding-top: 2rem;
}
.none_info .btn{
    text-align: center;
    padding-top: 1rem;
        display: block;
    width: 1.52rem;
    margin-left: auto;
    margin-right: auto;
    padding: .18rem 0;
    margin-top: .4rem;
    -webkit-border-radius: .03rem;
    border-radius: .03rem;
    background-color: #f66;
    color: #fff;
}
.order_goods_list .main{
      margin-left: .05rem;
}
</style>