<template>
      <div id="help-content" avalonctrl="root" style="visibility: visible;">
          
           <Top/>
           <Innav/>
            <div class="mpdd-helps-banner">
                <img src="//mcdn.pinduoduo.com/assets/img/mpdd_help_banner_v1.jpg" alt="banner">
            </div>
            <ul class="mpdd-help-list">
                <!--repeat810181031025--><li class="mpdd-help-item">
                    <p>新手指南</p>
                    <ul class="mpdd-hi-list">
                        <!--repeat155376651454--><li class="mpdd-hil-item">
                            · <span>购物流程</span>
                        </li><!--repeat155376651454--><!--repeat155376651454:end-->
                    </ul>
                </li><!--repeat810181031025--><li class="mpdd-help-item">
                    <p>交易问题</p>
                    <ul class="mpdd-hi-list">
                        <!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>我拍下来后的商品什么时候发货？</span>
                        </li><!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>已成团未发货如何退款？</span>
                        </li><!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>没有收到货/商家发错地址了怎么办？</span>
                        </li><!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>收到商品有问题怎么办？</span>
                        </li><!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>如何联系商家客服？</span>
                        </li><!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>为什么我的优惠券不能使用？</span>
                        </li><!--repeat33864235298--><li class="mpdd-hil-item">
                            · <span>收到的商品能退换货么？</span>
                        </li><!--repeat33864235298--><!--repeat33864235298:end-->
                    </ul>
                </li><!--repeat810181031025--><li class="mpdd-help-item">
                    <p>退款&amp;售后问题</p>
                    <ul class="mpdd-hi-list">
                        <!--repeat9671349412814--><li class="mpdd-hil-item">
                            · <span>退换货流程</span>
                        </li><!--repeat9671349412814--><li class="mpdd-hil-item">
                            · <span>退换货规则</span>
                        </li><!--repeat9671349412814--><li class="mpdd-hil-item">
                            · <span>7天无理由退换货</span>
                        </li><!--repeat9671349412814--><!--repeat9671349412814:end-->
                    </ul>
                </li><!--repeat810181031025--><li class="mpdd-help-item">
                    <p>联系我们</p>
                    <ul class="mpdd-hi-list">
                        <!--repeat758729070507--><li class="mpdd-hil-item">
                            · <span>如何联系拼多多客服？</span>
                        </li><!--repeat758729070507--><!--repeat758729070507:end-->
                    </ul>
                </li><!--repeat810181031025--><!--repeat810181031025:end-->
            </ul>
            <div class="mpdd-help-cr">
                <p>版权所有：上海寻梦信息技术有限公司</p>
            </div>
        </div>
</template>

<script>
/*import '@/plugins/flexible'*/
import Top from './top';
import Innav from './nav';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components: {
    Top,
    Innav
 
 },
}
</script>

<style>
#help-content {
    visibility: hidden;
    background-color: #f3f3f3
}

.short-msg {
    margin-top: 0!important
}

.mpdd-helps-banner {
    position: relative;
    width: 100%;
    height: 1.4rem
}

.mpdd-helps-banner img {
    width: 100%;
    height: 100%
}

.mpdd-help-list {
    position: relative;
    color: #111
}

.mpdd-help-list .mpdd-help-item {
    position: relative;
    margin-top: .15rem;
    padding-top: .25rem;
    padding-bottom: .05rem;
    padding-left: .18rem;
    background-color: #fff
}

.mpdd-help-list .mpdd-help-item p {
    margin-bottom: .05rem;
    font-size: .15rem;
    line-height: .15rem
}

.mpdd-help-list .mpdd-help-item .mpdd-hi-list {
    overflow: hidden
}

.mpdd-help-list .mpdd-help-item .mpdd-hi-list .mpdd-hil-item {
    position: relative;
    height: .54rem;
    padding-left: .15rem;
    font-size: .14rem;
    line-height: .54rem
}

.mpdd-help-list .mpdd-help-item .mpdd-hi-list .mpdd-hil-item:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #d6d6d6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5)
}

.mpdd-help-list .mpdd-help-item .mpdd-hi-list .mpdd-hil-item:before {
    content: "";
    position: absolute;
    top: 50%;
    right: .14rem;
    width: .07rem;
    height: .12rem;
    margin-top: -.06rem;
    background: url("/assets/img/mpdd_help_arrow.png") no-repeat;
    background-size: .07rem .12rem
}

.mpdd-help-list .mpdd-help-item .mpdd-hi-list .mpdd-hil-item:first-child:after {
    content: none
}
</style>
