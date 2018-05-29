import Http from '@/utils/axios';
import list from '../api/list.json';  
import All from '../api/all.json';  
//member

export const goodList = list; //获取购物车列表

export const searchGoods = [{"name":"裙子套装","tag":['均码','碎花','加厚']},{"name":"裙子女夏"},{"name":"裙子女半身","tag":['波西米亚','圆领']},{"name":"裙子套装韩版"}]; //获取购物车列表

export const all = All;//获取首页数据
export const login = function(o){
	console.log(o);
	let obj ;
if(o.name=="tom"){
 obj = {Data:{Code:"0"}};

}
else{
 obj = {Data:{Code:"1"}};
}
	return obj;

};//获取首页数据