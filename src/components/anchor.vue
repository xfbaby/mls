<template>
    <a href="http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggc.13730..7gdGLqSRkiE9v.pos_0-m_313898-sd_119" class="link" data-title="圣诞种草" >
        <div class="bg_imgbox J_dynamic_imagebox lazy_pic_bg" style="height: 1.6rem;"><img class="J_dynamic_img fill_img" :src="box.url" alt=""></div>
        <p class="img-title">{{box.text}}</p>
    </a>
</template>
<script>
export default {
    name: 'app',
      props: {
    box:{
        type: Object,
    }
   },
    data() {
        return {

        }
    }
}
</script>
<style>
</style>