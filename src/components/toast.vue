
<template>

<div class="total" >
<span>{{message}}</span>
</div>
</template>

<script>

  export default {
    props: {
      message: String,
    },
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
  .total{
       font-size: .4rem;
    text-align: center;
    color: #fff;
    background-color: #f69;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    z-index: 1000;
     animation: myfirst 2s;
 -moz-animation: myfirst 2s; 
-webkit-animation: myfirst 2s; 
    opacity: 0;
  }
@-moz-keyframes myfirst
{
0% {opacity:0;}
50%{opacity:1;}
100%{opacity:0;}
}

@-webkit-keyframes myfirst
{
0% {opacity:0;}
50%{opacity:1;}
100%{opacity:0;}
}

@-o-keyframes myfirst 
{
0% {opacity:0;}
50%{opacity:1;}
100%{opacity:0;}
}
</style>