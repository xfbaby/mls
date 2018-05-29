
<template>
<div>
 <section id="wrapper_main" class="wrapper">
  <topbar :title="title" :op="op" :link="link"/>
    <div class="addr_list">
        <ul class="addrShow">
            <li class="unit">
                <div class="inner"> <span class="choose_btn choose" data-addrid="568845858" data-userid="1513147992" checked="true"></span>
                    <div class="adrl_list inner_msg" data-addrid="568845858" data-userid="1513147992" data-isdefault="true" style="width:4.6rem;">
                        <p> <span class="nick_name">杨明</span> <span class="adrl_phone">175****0037</span> <span class="default_note">默认</span> </p>
                        <p class="add_detail">川沙4000号</p>
                    </div>
                    <div class="addr_msg" addr_id="568845858" pid="undefined" cid="undefined" did="undefined" style="display:none"></div> <a href="/address/edit?addr_id=568845858"><span class="edit_btn"></span></a> </div>
            </li>
        </ul>
    </div>
</section>
</div>

</template>

<script>
import topbar  from './topbar'
  export default {
    data() {
      return {
        title:"收货地址",
        op:"新增",
        link:"/address"
      };
    },

    watch: {},

    components: {topbar},

    computed: {},

    methods: {},

    mounted: function () {}
  }

</script>

<style>
  body{background:#f4f4f4}.addrShow{margin-top:.16rem}.addrShow .unit{background:#fff}.addrShow .unit:first-child .inner,.addrShow .unit:last-child .inner{border-bottom:none}.addrShow .unit:first-child{margin-bottom:.16rem}.addrShow .inner{padding:.3rem 0;margin:0 .3rem;border-bottom:1px solid rgba(51,51,100,.15);font-size:0}.addrShow .inner_msg{display:inline-block;vertical-align:middle;margin:0 .2rem;border-right:1px solid #e6e6e6}.addrShow p{font-size:0}.addrShow .nick_name{font-size:.28rem;color:#000}.addrShow .adrl_phone{font-size:.24rem;color:#000;margin-left:.28rem}.addrShow .add_detail{line-height:.26rem;font-size:.24rem;color:#999;padding-top:.2rem}.addrShow .choose_btn{width:.42rem;height:.42rem;box-sizing:border-box;display:inline-block;vertical-align:middle}.addrShow .edit_btn{width:.3rem;height:.3rem;display:inline-block;background:url(http://d01.res.meilishuo.net/pic/_o/4a/66/79cf7aceec345f584fde84e2b605_30_31.ch.png) no-repeat center;vertical-align:middle;background-size:contain}.addrShow .unchoose{border:1px solid #979797;border-radius:.23rem}.addrShow .choose{background:url(http://d02.res.meilishuo.net/pic/_o/52/6d/2c84d71dbaf4e2f4cfc30d48bef9_45_45.cg.png) no-repeat center;background-size:contain}.addrShow .default_note{background:#ffab33;font-size:.22rem;margin-left:.46rem;color:#fff;padding:.02rem;border-radius:.04rem}.page_head{height:.92rem;width:100%;background-color:#fff;overflow:hidden;text-align:center;color:#333;line-height:.92rem;border-bottom:1px solid rgba(51,51,51,.15)}.page_head .back_icon{z-index:5;float:left;text-align:left;vertical-align:middle;width:.8rem;padding-left:.3rem}.page_head .back_icon img{width:.2rem;display:inline-block;margin-top:.28rem}.page_head .right_btn{z-index:5;font-size:.35rem;float:right;padding-right:.3rem;height:.88rem}.page_head .title{z-index:1;text-align:center}.page_head .title a{font-size:.35rem};

</style>