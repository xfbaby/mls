<template>
           <div class="mpdd-head-wrapper">
            <ul class="mph-tab">
                <li>
                    <router-link :to="'index'"> <span class="mph-tab-item red-color-font">首页</span></router-link>
                    <router-link :to="'registerinfo'"> <span class="mph-tab-item">商家入驻</span></router-link>
                     <router-link :to="'help'">   <span class="mph-tab-item">帮助中心</span></router-link>
                
                </li>
            </ul>
        </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
