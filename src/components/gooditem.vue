<template>
       
                    <div class="pdd-index-glist" avalonctrl="cat-clothes">
                        <div class="glist-banner-wrapper">
                            <img alt="banner" :src="list.banner">
                        </div>
                        <ul>
                            <li class="pi-glist-item" v-for="item in list.sub">
                                <img alt="goods" :src="item.url"/>
                                <p class="index-goods-name">{{item.dec}}</p>
                                <span class="index-goods-price">￥<span>{{item.minPr}}</span></span>
                                <span class="index-goods-mprice">￥<span>{{item.maxPr}}</span></span>
                            </li>
                        </ul>
                    </div>
            
</template>

<script>

export default {
  name: 'app',
    props: {
    list:{
        type: Object,
    }
   },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
