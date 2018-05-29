<!-- footer -->

<template>

<div class="module_row module_row_131294 MOD_ID_116899">
    <div class="mod_row MCUBE_MOD_ID_116899">
        <div class="nav-bottom">

            <a :class="[$route.name==='index'?'nav-bottom-item active':'nav-bottom-item']"  @click.prevent="$router.push('/index')">
            <i class="bottom-icon icon-index"></i>
            <span class="bottom-text" >首页</span>
        </a>
            <a :class="['nav-bottom-item',$route.name==='maincategory'?'active':'']"  @click.prevent="$router.push('/maincategory')" class="nav-bottom-item 
             ">
            <i class="bottom-icon icon-cate" ></i>
            <span class="bottom-text" >分类</span>
        </a>
            <a  :class="['nav-bottom-item',$route.name==='cart'?'active':'']"  @click.prevent="$router.push('/cart')" class="nav-bottom-item 
             ">
            <i class="bottom-icon icon-cart " ></i>
            <span class="bottom-text" >购物车</span>
        </a>
            <a  :class="['nav-bottom-item',$route.name==='myCenter'?'active':'']"   @click.prevent="$router.push('/myCenter')" class="nav-bottom-item 
             ">
            <i class="bottom-icon icon-me"></i>
            <span class="bottom-text">我</span>
        </a>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {},

    mounted: function () {}
  }

</script>
<style>
  .nav-bottom .active .bottom-text {
    color: #ff3366;
}
.nav-bottom  .icon-index{ background-image:url(../../image/index.png);}
.nav-bottom .active  .icon-index{ background-image:url(../../image/indexa.png);}
.nav-bottom  .icon-cate{ background-image:url(../../image/cate.png);}
.nav-bottom .active  .icon-cate{ background-image:url(../../image/catea.png);}
.nav-bottom  .icon-cart{ background-image:url(../../image/cart.png);}
.nav-bottom .active  .icon-cart{ background-image:url(../../image/carta.png);}
.nav-bottom  .icon-me{ background-image:url(../../image/me.png);}
.nav-bottom .active  .icon-me{ background-image:url(../../image/me.png);}
</style>
