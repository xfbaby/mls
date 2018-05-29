
<template>
<div>

  <div class="detail-wrap detail-footbar" id="DetailFootbar">
    <!-- 私聊 -->
    <div class="footbar-im" > <i class="icon"></i> <span class="text">客服</span> </div>
    <!-- 小店 -->
    <div class="footbar-shop"> <i class="icon" style=""></i> <span class="text" style="">店铺</span> </div>
    <!-- 喜欢 -->
    <div class="footbar-fav" data-id="1kdh6qi" data-type="1"> <i class="icon"></i> <span class="text">收藏</span> </div>
    <!-- 购买 -->
    <div class="footbar-buy"> <span class="buy-cart" @click="goshop" >加入购物车</span> <span @click="buy" class="buy-now">购买</span> </div>
</div>
 <component :is="current" :isend="isend"/> 
 
</div>

</template>

<script>
import goodSku from './goodsku';
  export default {
    data() {
      return {
        current:"",
        isend:true


      };
    },

    watch: {},

    components: {goodSku},

    computed: {},

    methods: {
      goshop(v){
      this.current=goodSku;
      if(document.getElementById("J_GoodsSku")){
        document.getElementById("J_GoodsSku").style.display="block";
      }
      if(document.getElementById("M_Mask")){
        document.getElementById("M_Mask").style.display="block";
      }
      },
      buy(){
        this.$router.push("/orderconfirm");

      }


    },

    mounted: function () {}
  }

</script>