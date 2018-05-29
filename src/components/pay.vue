
<template>

<div id="body_wrap" class="wrap">
    <div id="header" class="header" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <a href="javascript:;" class="lfn J_lfn"><</a>
        <h5 class="tit J_tit">收银台</h5>
        <a href="javascript:;" class="rfn J_rfn"></a>
    </div>
    <div id="view">
        <div class="page">
            <div class="layout">
                <div class="main">
                    <div class="md-boxspx mb15 mt15">
                        <ul class="cashierlist mulit-cashierlist J_payMethodList">
                            <li class="J_item clearfix s-select-item  " data-disable="false" data-bindid="" data-limitamoumt="" data-method="weChatPay" data-paymethod="101" data-promotioncut="0" data-outpaytype="410000" data-paytype="weChatPay" data-showcheckstandbanner="false" data-coupondesc="" data-price="40.00" data-extrainfo="eyJtYXJrZXRIb25nYmFvQW1vdW50IjoiRnVycHhMRGJCaytsUUxZTlhmL2thQT09IiwibWFya2V0UmVkdWNlQW1vdW50IjoiRnVycHhMRGJCaytsUUxZTlhmL2thQT09In0=">
                                <div class=""></div> <img src="https://s10.mogucdn.com/pic/141113/scazd_ieydkyjwgaydkzrxmqytambqgiyde_88x70.jpg" alt="" class="logo">
                                <div class="title"> 微信支付 </div>
                                <div class="desc">极速、安全、新体验</div>
                            </li>
                            <li class="J_item clearfix   " data-disable="false" data-bindid="" data-limitamoumt="" data-method="aliPay" data-paymethod="100" data-promotioncut="0" data-outpaytype="360000" data-paytype="aliPay" data-showcheckstandbanner="false" data-coupondesc="" data-price="40.00" data-extrainfo="eyJtYXJrZXRIb25nYmFvQW1vdW50IjoiRnVycHhMRGJCaytsUUxZTlhmL2thQT09IiwibWFya2V0UmVkdWNlQW1vdW50IjoiRnVycHhMRGJCaytsUUxZTlhmL2thQT09In0=">
                                <div class=""></div> <img src="https://s10.mogucdn.com/p1/151030/upload_ifqwmyjqhe4dqzrygqzdambqgyyde_80x60.png" alt="" class="logo">
                                <div class="title"> 支付宝支付 </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="J_redBag cg-redbag"></div>
                <div class="cash-pricebox ">
                    <div class="red"> <span>支付:</span>
                        <h2 class="J-price red">￥40.00</h2> </div> <span class="fl J-coupon" style="font-size:12px;"></span> <a href="#" class="btn fr J_submit">付款</a> </div>
            </div>
            </div></div>
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
.lfn{color: #fff;margin-left: 10px;float: left;}
#header{
      background: #ff5777 url(https://s10.mogucdn.com/mlcdn/c45406/170802_83b6jah9j9i7a85ciilid6kh84e49_640x90.jpg);
    background-size: 100% 100%;
    color: #fff;
    border: none;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
}
.title{    float: left;
    font-size: 14px;
    line-height: 2;
    padding-left: 10px;
    white-space: nowrap;}
    .desc {
    float: right;
    font-size: 14px;
    padding-right: 10px;
    line-height: 2;
    color: #999;
}
.logo {
    float: left;
    width:28px;
    height: 18px;
    line-height: 18px;
    color: #ff5777;
    text-align: center;
}
li{
      position: relative;
    display: block;
    padding: 16px 0;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
}
.cash-pricebox {
    padding: 16px 15px;
    background: #fff;
    line-height: 33px;
    position: relative;
    z-index: 2;
}
.cash-pricebox>.red {
    float: left;
    line-height: 33px;
    font-size: 16px;
}
.cash-pricebox>.red>span {
    padding: 0 4px 0 0;
    vertical-align: middle;
}
.cash-pricebox>.red h2 {
    font-size: 18px;
    line-height: 33px;
    font-weight: 400;
    display: inline-block;
    position: relative;
    top: 2px;
}
.theme-pink .btn {
    background: #ff5777;
}
.cash-pricebox .btn {
    width: 90px;
    line-height: 33px;
    height: 33px;
    font-size: 14px;
    background: #ff5777;
        color: #fff;
    text-align: center;
}

</style>