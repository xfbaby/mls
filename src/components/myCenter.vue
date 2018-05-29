
<template>
<div>
  <topbar :title="title" :op="op" :link="link"/>
</div>

</template>

<script>
import topbar  from './topbar'
import foot from './foot';
  export default {
    data() {
      return {
        title:"个人中心",
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

    },

    methods: {},

    mounted: function () {}
  }

</script>

<style>
  

</style>