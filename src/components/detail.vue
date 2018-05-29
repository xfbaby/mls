
<template>

<div class="module_row module_row_131294 MOD_ID_116899">
<div class="primary-swiper">
  <swiper :options="swiperOption" ref="mySwiper" >
    <swiper-slide v-for="item in slideimg"><img :src="item.url" alt=""></swiper-slide>
   
  </swiper>
</div>
<!-- 基本信息 -->
<div class="primary-info">
    <div class="info-title break"> <span>短袖花边T恤女爱心玫瑰亮丝短款圆领粉色上衣2018春夏季新款韩版时尚气质百搭体恤潮</span> </div>
    <div class="info-price flex J_InfoPrice"> <span class="flex">   <span class="now">¥158.00</span>
        <!-- 价格后面的标志 -->
        </span>
    </div>
    <!-- 其他（如存在商品banner 或 非大促时，不显示上边框） -->
    <div class="info-other info-other-notopbor"> <span class="item">销量 3409</span> <span class="item">收藏1人</span> <span class="item">72小时发货</span> </div>
    <div class="services-container">
        <div class="info-services" id="J_Services" @click='()=>{isshow=!isshow}'>
            <div class="flex service-list"> <span class="service-item"> <img class="service-icon" src="//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"> <span class="service-name">7天无理由退货</span> </span> <span class="service-item"> <img class="service-icon" src="//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"> <span class="service-name">72小时发货</span> </span> <span class="service-item"> <img class="service-icon" src="//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"> <span class="service-name">退货补运费</span> </span>
            </div> <img class="service-arrow" src="https://s10.mogucdn.com/mlcdn/c45406/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" alt=""></div>
        <div :class="[isshow==true?'model-services show':'model-services']">
            <div class="model-services-title">服务说明</div>
            <div class="model-services-content">
                <ul class="service-list">
                    <li class="service-item">
                        <div> <img class="service-icon" src="//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"> <span class="service-name">7天无理由退货</span> </div>
                    </li>
                    <li class="service-item">
                        <div> <img class="service-icon" src="//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"> <span class="service-name">72小时发货</span> </div>
                    </li>
                    <li class="service-item">
                        <div> <img class="service-icon" src="//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"> <span class="service-name">退货补运费</span> </div>
                    </li>
                </ul>
            </div>
            <div class="model-services-footer" @click="()=>{isshow=!isshow}">完成</div>
        </div>
    </div>
</div>


<!-- 商品详情-店铺 -->
<detail-shop/>
<good-bar/>




  <shop/>

  <div id="M_Mask" class="ui-mask" v-if="isshow" @click="()=>{isshow=!isshow}"></div>
  </div>
</template>

<script> 

import '../css/goodifo.css' /*引入公共样式*/
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
import shop from './shop';
import goodBar from './goodbar';
import detailShop from './detailshop';

  export default {
    data() {
      return {
        isshow:false,
        swiperOption: {
       notNextTick: true,
       autoplay: 3000,
       effect:"coverflow",
       grabCursor : true,
       setWrapperSize :true,
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
      
       observeParents:true,
       
     },
    slideimg:[{"url":"../../image/good1.jpg"},{"url":"../../image/good2.jpg"},{"url":"../../image/good3.jpg"},{"url":"../../image/good4.jpg"}]
     
    }},
    watch: {},
    components: {
      shop,
      swiper,  
      swiperSlide,
      detailShop ,
      goodBar 
    },
    created(){
      let id = this.$route.query.id;
       
    },

    computed: {
        swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    methods: {},

    mounted: function () {
      





    }
  }

</script>