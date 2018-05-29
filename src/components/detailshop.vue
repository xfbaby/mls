<!-- footer -->
<style>
</style>
<template>
    <div class="detail-wrap detail-shop" >
        <!-- 顶部 -->
        <div class="shop-top"></div>
        <!-- 信息 -->
        <div class="shop-info">
            <!-- 头像 -->
            <div class="clearfix"> <a class="info-avatar" href="http://m.meilishuo.com/shop/index/1172uah0"> <img src="//s3.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg"> </a>
                <div class="flex shop-info-container">
                    <div class="shop-info-title">
                        <p class="title"> 无邪气 </p>
                    </div>
                    <div id="J_shop-collect" :class="[mark?'shop-collect marked':'shop-collect'] "> <span v-if="mark" class="has-marked" @click="islogin">已收藏</span> <span v-if="!mark" class="not-marked" @click="islogin"> <span class="plus">+</span>收藏 </span>
                    </div>
                </div>
            </div>
            <!-- 内容 -->
            <div class="info-content">
                <div class="count">
                    <div class="sale"><span class="fz-18">4.0万</span>
                        <br>总销量</div>
                    <div class="all"><span class="fz-18">184</span>
                        <br>全部宝贝</div>
                    <!-- <span class="fans" data-fans="1466">收藏数&nbsp;1466</span> --></div>
                <!-- 评价 -->
                <div class="shop-evaluate">
                    <ul>
                        <li> <span>描述相符</span> <em>4.76</em> <i>高</i> </li>
                        <li> <span>价格合理</span> <em>5</em> <i>高</i> </li>
                        <li> <span>质量满意</span> <em>4.73</em> <i>高</i> </li>
                    </ul>
                </div>
            </div>
            <div class="info-goshop"> <a href="javascript:;">进店逛逛</a> </div>
        </div>
        <!---->
    </div>
</template>
<script>
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
    data() {
        return {
          mark:false

        };
    },

    watch: {},

    components: {  },

    computed: {},

    methods: {
      islogin(){
          let islogon = this.$store.dispatch('IsLogin');
          islogon.then(()=>{ this.mark=!this.mark;},()=>{ this.$router.push("/login");})
      }
    },
    mounted: function() {
    }
}
</script>