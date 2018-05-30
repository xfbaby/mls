
require('es6-promise').polyfill()       
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import '@/plugins/flexible'
import store from '@/store'
import FastClick from 'fastclick'
import '@/utils/directives'
import '@/utils/filters'
import VueScroller from 'vue-scroller'
import VeeValidate from 'vee-validate';
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueScroller)
Vue.use(VueLazyLoad)
Vue.use(VeeValidate)
Vue.use(Vuex)
router.beforeEach((to,from,next)=>{
    next();
})
Vue.config.productionTip = false
/* fundebug */
function formatComponentName(vm)
{
  if (vm.$root === vm) return 'root';

  var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

}

Vue.config.errorHandler = function(err, vm, info)
{
  var componentName = formatComponentName(vm);
  var propsData = vm.$options && vm.$options.propsData;

  fundebug.notifyError(err,
  {
      metaData:
      {
          componentName: componentName,
          propsData: propsData,
          info: info
      }
   });
};


/* eslint-disable no-new */
Vue.prototype.errorEvent = e => { e.target.src = './assets/images/logo.png' }
new Vue({
  el: '#app',

  store,
  router,
  template: '<App/>',
  components: { App }
})
