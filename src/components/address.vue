
<template>
<section id="wrapper_main" class="wrapper">
    <div class="addr_new">
        <fieldset>
            <form id="addressForm" method="post" onsubmit="return false" action="">
                <legend>新增/编辑收货地址表单</legend>
           <!--      <header class="page_head">
               <div class="back_icon" id="back_btn"><img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png"></div>
               <div class="right_btn addressBtn" id="save_address">保存</div>
               <div class="title"><a href="javascript:;">收货地址</a></div>
           </header> -->
           <topbar :title="title" :op="op" :link="link"/>
                <div class="addressErrorMessage"></div>
                <p class="item_wrap">
                    <label for="addressUser">
                        <input type="text" placeholder="收货人" id="addressUser" name="realName" value=""> </label>
                </p>
                <p class="item_wrap">
                    <label for="validatePhoneOrMobile">
                        <input placeholder="联系电话" id="validatePhoneOrMobile" type="tel" name="mobile" value=""> </label>
                </p>
                <p class="item_wrap">
                    <label for="addressPid" class="select_box"> <span class="notice note_show">所在省份</span>
                        <select id="addressPid" name="province">
                        </select> <span class="select_btn">请选择</span> </label>
                </p>
                <p class="item_wrap">
                    <label for="addressCid" class="select_box"> <span class="notice note_show">所在城市</span>
                        <select id="addressCid" name="city">
                            <option value="0"></option>
                        </select> <span class="select_btn">请选择</span> </label>
                </p>
                <p> </p>
                <p class="item_wrap">
                    <label for="addressDid" class="select_box"> <span class="notice note_show">所在地区</span>
                        <select id="addressDid" name="area">
                            <option value="0"></option>
                        </select> <span class="select_btn">请选择</span> </label>
                </p>
                <p> </p>
                <p class="item_wrap">
                    <label for="addressStreet">
                        <input id="addressStreet" type="text" name="address" placeholder="详细地址(必填)" value=""> </label>
                </p>
                <p class="item_wrap">
                    <label for="addressPostcode">
                        <input id="addressPostcode" type="tel" name="zip" value="" placeholder="邮政编码(选填)"> </label>
                </p>
                <div class="item_wrap">
                    <div class="set_wrap"> <span>设为默认地址</span>
                        <input type="checkbox" name="isDefault" id="is_default" value="" style="display:none"> <span class="switch_btn switch_uncheck">            <i class="inner_circle"></i>          </span> </div>
                </div>
                <div class="submitBox" style="display:none">
                    <input class="addressBtn button" type="submit" value="保存地址">
                </div>
            </form>
        </fieldset>
    </div>
    <script type="text/html" id="address_select_city"></script>
    <script type="text/html" id="address_select">
        <option value="0"></option>
    </script>
</section>
</template>

<script>
import topbar  from './topbar'

  export default {
    data() {
      return {
         title:"收货地址",
        op:"保存",
        link:"/additem"

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
  html{font-size:.625rem}#goTop,.goTop{bottom:100px;right:0;position:fixed;z-index:450}#goTop li,.goTop li{padding-top:8px;padding-bottom:4px;text-align:center;padding-right:4px}#goTop li .icon-cart,.goTop li .icon-cart{height:40px;width:40px;display:inline-block;-webkit-border-radius:40px;border-radius:40px;position:relative}#goTop li .icon-cart span,.goTop li .icon-cart span{color:#592d4a;position:absolute;min-width:1em;height:1em;right:-3px;background-color:#ffe814;padding:3px;-webkit-border-radius:1em;border-radius:1em}#goTop li .icon-gotop,.goTop li .icon-gotop{background:url(http://s16.mogucdn.com/p1/161104/idid_ifrwmmrrmyywinjqmmzdambqhayde_90x90.png) no-repeat center center;background-size:100%}#goTop li .icon-gohome,#goTop li .icon-gotop,.goTop li .icon-gohome,.goTop li .icon-gotop{height:40px;width:40px;display:inline-block;-webkit-border-radius:40px;border-radius:40px}.exposure-num{position:relative;border-radius:50%;background-color:rgba(0,0,0,.8);color:#fff;font-size:.2rem}.exposure-num:after,.exposure-num:before{position:absolute;left:0;width:100%;text-align:center}.exposure-num:before{top:17%;content:attr(data-cur)}.exposure-num:after{content:attr(data-total);bottom:14%}.exposure-num .bar{position:absolute;width:70%;height:1px;background:#fff;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}#goTop .show-exposure .exposure-num,.nav_ban h1,.nav_ban h1 .logo{display:inline-block}#goTop .exposure-num,#goTop .show-exposure .icon-gotop{display:none}.nav_ban{text-align:center;background-color:#fff;border-bottom:1px solid #c6c5c5;height:44px;overflow:hidden}.nav_ban h1{font-weight:400;height:44px;position:relative;line-height:44px;font-size:18px;color:#80737b}.nav_ban h1 .logo{width:59px;padding-top:44px}.nav_ban .icon-back,.nav_ban .icon-person{height:44px;width:44px;position:absolute;top:0}.nav_ban .icon-person{right:0}.nav_ban .icon-back{left:0;padding-right:5px;margin-left:15px}.nav_ban .icon-back:before{position:absolute;right:0;content:"";width:1px;height:100%}.nav_ban .icon-home,.nav_ban .icon-right{height:44px;width:44px;position:absolute;right:0;top:0}.nav_ban .icon-right{line-height:44px;font-size:16px;margin-right:10px;color:#80737b}.nav_ban .icon-right:hover,.nav_ban h1 a,.nav_ban h1 a:hover{color:#80737b}.guang_nav{border:0}.personArea{position:absolute;width:100%;font-size:140%;z-index:20}.personArea .userInfo{background-color:#fff;line-height:30px;padding-top:5px;padding-bottom:5px}.personArea .userInfo img{-webkit-border-radius:30px;border-radius:30px;width:30px;height:30px;float:left}.personArea .userInfo span{margin-left:10px}.personArea ul{box-shadow:0 1px 1px rgba(0,0,0,.1);margin-bottom:2px;background-color:#fff;line-height:2.8}.personArea .userInfo,.personArea ul li{border-bottom:1px solid #d2d0cf;padding-left:10px}.personArea ul li a{display:block}.personArea[isShow="0"]{display:none}body{background:#f4f4f4}.page_head{height:.92rem;width:100%;background-color:#fff;overflow:hidden;text-align:center;color:#333;line-height:.92rem;border-bottom:1px solid rgba(51,51,51,.15)}.page_head .back_icon{z-index:5;float:left;text-align:left;vertical-align:middle;width:.8rem;padding-left:.3rem}.page_head .back_icon img{width:.2rem;display:inline-block;margin-top:.28rem}.page_head .right_btn{z-index:5;font-size:.35rem;float:right;padding-right:.3rem;height:.88rem}.page_head .title{z-index:1;text-align:center}.page_head .title a{font-size:.35rem}.addr_new .item_wrap{background:#fff}.addr_new .set_wrap,.addr_new label{display:block;border-bottom:1px solid #ccc;line-height:.8rem;height:.8rem;vertical-align:middle;font-size:0;margin-left:.28rem}.addr_new .set_wrap{margin-top:.12rem;border-bottom:none}.addr_new .set_wrap input[type=tel],.addr_new .set_wrap input[type=text],.addr_new .set_wrap select,.addr_new label input[type=tel],.addr_new label input[type=text],.addr_new label select{font-size:.26rem;color:#000;width:95%;outline:0;height:.5rem;border:0;text-indent:0;padding:0;text-align:left}.addr_new .set_wrap span,.addr_new label span{font-size:.26rem;color:#666}.addr_new select{background-color:transparent;text-indent:1px;text-overflow:'';-webkit-appearance:none;appearance:none}.addr_new select .default{color:#ccc}.addr_new .select_box{position:relative}.addr_new .select_box .notice{color:#bbb;height:.5rem;line-height:.5rem;position:absolute;top:50%;margin-top:-.25rem;left:0}.addr_new .select_box .note_show{display:inline-block}.addr_new .select_box .note_hidden{display:none}.addr_new .select_box select{position:absolute;top:50%;margin-top:-.25rem;left:0}.addr_new .select_box .select_btn{float:right;margin-right:.3rem;color:#ff7a9a;font-size:.24rem}.addr_new .select_box .select_btn:after{display:inline-block;vertical-align:middle;content:"";color:green;width:.13rem;height:.26rem;margin-left:.22rem;margin-top:-.04rem;background:url(http://d04.res.meilishuo.net/pic/_o/77/bb/dbd7ad7f864ff1e044ba4be189c8_13_26.ch.png) no-repeat center;background-size:contain}#save_address{color:#ff7a9a}.remove_addr_btn{margin-top:.12rem;background:#fff;font-size:.26rem;color:#f66;padding:0 .28rem;line-height:.8rem}.switch_btn{display:block;position:relative;width:.88rem;height:.44rem;border-radius:.22rem;float:right;margin-top:.18rem;margin-right:.3rem}.switch_btn .inner_circle{width:.44rem;height:.44rem;background:#fff;display:inline-block;border-radius:.22rem}.switch_check{background:#86e653}.switch_check .inner_circle{position:absolute;right:.02rem;top:0}.switch_uncheck{background:#dedad9}.switch_uncheck .inner_circle{position:absolute;left:.02rem;top:0}.addressErrorMessage{color:#ff7a9a;margin:.12rem 0;text-align:center;font-size:.24rem}.ui_notice_wrap{position:fixed;top:46.875%;left:0;width:100%;text-align:center;opacity:0;z-index:1000}.ui_auto_notice{padding:.2rem .4rem;font-size:.28rem;color:#fff;background-color:#584f55;z-index:1000;-webkit-border-radius:3px;border-radius:3px;max-width:80%;box-sizing:border-box;display:inline-block;line-height:.32rem};

</style>