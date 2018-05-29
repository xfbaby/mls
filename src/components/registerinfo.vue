<template>

<div data-reactroot="">

    <section class="homepage23" style="height: 736px;">
        <div class="fastTitles"><img src="//imsproductionimg.yangkeduo.com/757d0a2a61f9b2016b56337ab3bb05b5.png"><span>拼多多个人店铺入驻</span>
            <p class="dec">企业店铺入驻，请在电脑端访问：https://ims.pinduoduo.com</p>
        </div>
        <div class="registerInfo23" style="padding-top:66px;">
            <div class="register-line">
                <label>手机号码</label>
                <input type="mobile" class="mobile input" v-model="mobile"  placeholder="请填写入驻人手机号码">
            </div>
            <div class="register-line">
                <label>验证码</label>
                <input type="text" class="authCode input"   v-model="authCode"  placeholder="请填写验证码">
            </div><span class="getAuth">获取验证码</span><span class="getAuthAgain" style="display: none;">再次获取()</span></div>
        <div class="registerButton">
            <button class="am-button">0元入驻</button>
        </div>
        <div class="registerButton" style="margin-top:30px;"><a class="am-button mall-btn">我有拼多多APP，直接领店铺</a></div>
        <div class="tips">
            <p>1.拼多多APP需处于登录状态才可直接领取店铺</p>
            <p>2.点击拼多多APP：个人中心-设置-商家免费入驻。直接领取</p>
        </div>
        <div class="serviceCode">
            <div>
                <div class="codeImg"><img src="//imsproductionimg.yangkeduo.com/5b79832eac25c4940c586a0bd098551a.png"></div>
                <div class="codeDoc"><span class="docTop">扫码关注公众号免费领取店铺</span><span class="docBottom"><!-- react-text: 25 -->长按二维码并保存，<br>打开微信扫描二维码并关注公众号</span></div>
            </div>
        </div>
    </section>
    <!-- react-empty: 28 -->
    <div>
        <div class="modal fade">
            <div class="modal-dialog">
                <p class="modal-head">请输入图形验证码</p>
                <div class="modal-body">
                    <div class="imgAuthBox">
                        <input type="text" class="imgCodeInput" value="" placeholder="请填写图形验证码"><img src="" alt="图形验证码"></div>
                </div>
                <div class="modal-footer"><a href="javascript:void(0)" class="btn btn-secondary">取消</a><a href="javascript:void(0)" class="btn btn-primary">确定</a></div>
            </div>
        </div>
        <div class="modal-backdrop fade"></div>
    </div>
</div>
</template>

<script>

/*import '../css/aa.css';	*/
export default {
  name: 'app',
  data () {
    return {
     authCode:"",
     mobile:""
    }
  },
 components: {

 },
}
</script>

<style>
body{ max-width: 1000px; }
.dec,.homepage23 .tips p{
	text-align: center; color: rgb(102, 102, 102); 
	font-size: 32px;
	line-height: 48px;
}

.input{height: 72px;

    width: 100%;
font-size:36px
}

</style>
