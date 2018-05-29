/**
 by 向倩 2018-5-25
 * 按需全局化过滤器
 * 您还可以在组件定义时的 filters 属性中按需引入
 */
// 定义方法：Vue.filter({name}, function(value){...})

import Vue from 'vue'

Vue.filter('clocolor', function (v) { //获取第一个文件路径

  let color ;
switch(v)
{
case 1:
  color = '冰海蓝';
  break;
case 2:
   color = '自然白';
  break;
  case 3:
   color = '奶茶色';
  break;
  default:
 color = '红色';
}
return color
})
Vue.filter('closize', function (v) { //获取第一个文件路径

  let size ;
switch(v)
{
case 1:
  size = ' S';
  break;
case 2:
   size = 'M';
  break;
  case 3:
   size = 'L';
  break;
  default:
 size = 'XL';
}
return size
})
Vue.filter('imageUrl', function (json) { //获取第一个文件路径
  if (json == undefined || json == null) return;
  try {
    var fileArr = JSON.parse(json);
    return fileArr[0].FilePath;
  } catch (e) {
    return '';
  }
})


