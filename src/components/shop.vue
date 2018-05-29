<!--  -->
<style>
  

</style>
<template>

<div class="detail-plus" id="DetailPlus"> <a href="javascript:;" @click="()=>{this.$router.push('/cart')}" class="cart"> <i class="cart-num" id="cart-num" data-cart="0"><!-- {{cartProductData?JSON.parse(this.cartProductData).num:0}} -->
  {{total}}
</i> </a>
    </div>
  </div>
</template>

<script>
 import {
    mapGetters,
    mapMutations
  } from 'vuex';
     import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
  } from '@/utils/mixin';
import foot from './foot';
  export default {
    data() {
      return {
        total:0

      };
    },

    watch: {
      newdata(v){
         this.total = 0;
        v.map(item=>{
         this.total+= item.num;
        });
        setSessionStorage("GoodItem",v);
      }
    },

    components: {foot},

    computed: {
     ...mapGetters([
        'cartProductData',
        'newdata'
      ])
   },

    methods: {},

    mounted: function () {
    }
  }

</script>