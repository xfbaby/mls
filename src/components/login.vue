
<template>
<div>

    <topbar :title="title" :op="op" :link="link"/>
<div class="login-content">
    <div  class="meili-mgj-vue-user-base-userinput userinput" >
        <p  class="userinput-title">帐号</p>
        <input v-model="loginForm.username" type="text" placeholder="输入用户名/邮箱/手机" maxlength="32" class="userinput-input"> </div>
    <div  class="meili-mgj-vue-user-base-userinput userinput" >
        <p class="userinput-title">密码</p>
        <input type="password"   v-model="loginForm.password" placeholder="输入密码" maxlength="32" class="userinput-input" @keyup.enter="Login"> </div>
    <div id="login-captcha" class="login-captcha"></div>
    <div  class="meili-mgj-vue-base-complete_button confirm_button" style="background-color: rgb(255, 87, 119);" @click="Login">
        登录
    </div>
    <p  class="login-ways login--clearfix"><a href="javascript:void;" class="login-ways-idea login-ways-fl">免密登录</a> <a  href="javascript:void;"  class="login-ways-idea login-ways-fr login-ways-register">注册帐号</a></p>
    <div  class="login-thirdline"><span  class="login-thirdline-line"></span> <span  class="login-thirdline-or">Or</span> <span  class="login-thirdline-line"></span></div>
    <div  class="meili-mgj-vue-base-thirdlogin thirdlogin" >
        <!----><a  href="javascript:void(0);"  class="thirdlogin-qq thirdlogin-normal" style="background-image: url(&quot;https://s10.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png&quot;); width: 2.1rem; margin: 0px auto; height: 2.1rem;"></a></div>
</div>
</div>

</template>

<script>
import topbar from './topbar';
  export default {
    data() {
      return {
        title:"登录",
        op:"忘记密码",
        link:"/forget",
          loginForm: {
          username: '',
          password: '',
          passwordFormType: 'password'
        },

      };
    },

    watch: {},

    components: {topbar},

    computed: {},

    methods: {
       Login() { //登录
        if(this.loginForm.username&&this.loginForm.password){
            let Data = this.$store.dispatch('Login', {
          name: this.loginForm.username,
          password: this.loginForm.password
        });
        Data.then(()=>{ this.$router.go(-1);},()=>{alert("用户名错误")})
        }
        else{
          alert("请输入用户名或密码")
        }
      
    }
    },

    mounted: function () {}
  }

</script>
<style type="text/css">

.userinput {
  width: 100%;
}
.userinput-title{
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.28rem;
  color: #666;
  margin-bottom: 0.4rem;
}
.userinput-input{
  margin-bottom: 0.49rem;
  height: 0.63rem;
  line-height: 0.63rem;
  width: 100%;
  display: block;
  text-align: center;
  padding-bottom: 0.15rem;
  font-size: 0.48rem;
  border: none;
  border-bottom: 1px solid #ededed;
  color: #333;
  background: #fff;
}
.userinput-input::-webkit-input-placeholder {
  color: #ededed;
  text-align: center;
}
.userinput-input:-moz-placeholder {
  color: #ededed;
}
.userinput-input::-moz-placeholder {
  color: #ededed;
}
.userinput-input:-ms-input-placeholder {
  color: #ededed;
}
.confirm_button{
    width: 100%;
    font-size: 0.36rem;
    height: 1rem;
    line-height: 1rem;
    display: inline-block;
    background: #ff1877;
    color: #fff;
    border: none;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
}
.login {
    min-width: 320px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto
}

.login-content {
    padding: 1rem .3rem 0
}

.login--clearfix {
    content: "";
    display: block;
    clear: both
}

.login-captcha{
    margin-bottom: .2rem
}

.login-ways{
    margin-top: .3rem;
    text-align: center
}

.login-ways-fl {
    float: left
}

.login-ways-fr{
    float: right
}

.login-ways-idea {
    color: #999;
    font-size: .28rem
}

.login-ways-register{
    color: #ff5777
}

.login-thirdline{
    margin-top: .08rem;
    padding: 1.08rem .3rem .24rem;
    width: 100%
}

.login-thirdline-line{
    display: inline-block;
    width: 2.67rem;
    height: .2rem;
    border-bottom: .01rem solid #f1f1f1
}

.login-thirdline-or{
    display: inline-block;
    text-align: center;
    width: .8rem;
    font-size: .2rem;
    height: .2rem;
    line-height: .2rem;
    color: #f1f1f1
}</style>
