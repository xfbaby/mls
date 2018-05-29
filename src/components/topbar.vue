<template>
    <header class="meili-all-vue-base-head head" >
        <div class="head-content is-fixed">
            <div class="head-left"><a  href="javascript:void(history.back());" class="head-left--back back"><</a>
                <div  class="head-left--part"></div>
            </div>
            <div  class="head-title">
                {{title}}
            </div>
            <div  class="head-right">
                <!---->
                <div class="head-right--part"><a  href="javascript:;" @click="()=>{$router.push(link)}">{{op}}</a></div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
   props: {
    title:{
        type: String,
    },
    op:{
     type: String,
   },
   link:{
     type: String,
    }
  },
    data() {
        return {

        };
    },

    watch: {},

    components: {},

    computed: {},

    methods: {},

    mounted: function() {}
}
</script>
<style>

.m-icon-arrow-left:before {
    content: "\e602";
}
.head {
  height: 0.9rem;
  line-height: 0.9rem;
  width: 100%;
}
.head-content{
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #c9c7c8;
  height: 0.9rem;
  line-height: 0.9rem;
  width: 100%;
  background-color: #fafafa;
}
.head-content.is-fixed{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.head-left {
  position: relative;
  width: 0.9rem;
  text-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.head-left--back {
  display: block;
  color: #5e5e5e;
  font-size: 0.2rem;
}
.head-left--part {
  position: absolute;
  left: 0;
  top: 0;
  width: 1.4rem;
}
.head-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 0.36rem;
  color: #5e5e5e;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.head-right {
  position: relative;
  width: 0.9rem;
  text-align: center;
  font-size: 0.26rem;
  color: #727272;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.head-right--cart{
  display: block;
}
.head-right--part{
  position: absolute;
  right: 0;
  top: 0;
  width: 1.4rem;
}
.back {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.cart {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.icon-base{
  background-size: 100% 100%;
  width: 0.44rem;
  height: 0.44rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: -0.05rem;
}
.m-icon{
  font-size: .35rem;
}
.head-left--back{
font-size: 28px;
    font-weight: 100;
}
</style>