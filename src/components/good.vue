<template>
<div class="item-wrap waterfall-frame-1 waterfall-box waterfall-optimise-show">
    <a class="iwf" href="javascript:;" @click.prevent="$router.push({ path:'detail', query:{id:id}})">
        <div class="img-wrap J_dynamic_imagebox"> <img class="J_dynamic_img fill_img" src="" v-lazy="item.url" alt=""></div>
        <p class="title"> {{item.text}} </p>
        <div class="goods_info">
            <span class="price_info">{{parseFloat(item.price).toFixed(2)}}</span> <span class="fav_num"><em class="no_collect_icon"></em>{{item.fav_num}}</span> </div>
    </a>
</div>
</template>
<script>
export default {
    name: 'app',
    props: {
         id: {
            type: Number,
        },
        item: {
            type: Object,
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