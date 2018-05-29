import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
/*页面*/
const RegisterInfo = () =>import ('../components/registerinfo');
const Index = () =>import ('../components/index');
const Help = () =>import ('../components/help');
const maincategory = () =>import ('../components/maincategory');
const cart = () =>import ('../components/cart');
const myCenter = () =>import ('../components/myCenter');
const detail = () =>import ('../components/detail');
const login = () =>import ('../components/login');
const forget = () =>import ('../components/forget');
const orderconfirm = () =>import ('../components/orderconfirm');
const address = () =>import ('../components/address');
const additem = () =>import ('../components/additem');
const pay = () =>import ('../components/pay');
const appRouter = {
     routes: [{
                path: '',
                redirect: '/index'
            },
             {
                path: '/index',
                name: 'index',
                component: Index,
                meta: { keepAlive: true }
            },
             {
                path: '/registerinfo',
                name: 'registerinfo',
                component: RegisterInfo,
                meta: { keepAlive: true }
            },
             {
                path: '/help',
                name: 'help',
                component: Help,
                meta: { keepAlive: true }
            },
            {
                path: '/maincategory',
                name: 'maincategory',
                component: maincategory,
                meta: { keepAlive: false }
            },
            {
                path: '/cart',
                name: 'cart',
                component: cart,
                meta: { keepAlive: true }
            },
            {
                path: '/myCenter',
                name: 'myCenter',
                component: myCenter,
                meta: { keepAlive: false }
            },
            {
                path: '/detail',
                name: 'detail',
                component: detail,
                meta: { keepAlive: true }
            },
             {
                path: '/login',
                name: 'login',
                component: login,
                meta: { keepAlive: false }
            },
             {
                path: '/forget',
                name: 'forget',
                component: forget,
                meta: { keepAlive: true }
            },
            {
                path: '/orderconfirm',
                name: 'orderconfirm',
                component: orderconfirm,
                meta: { keepAlive: true }
            },
              {
                path: '/address',
                name: 'address',
                component: address,
                meta: { keepAlive: true }
            },
            {
                path: '/additem',
                name: 'additem',
                component: additem,
                meta: { keepAlive: true }
            },
              {
                path: '/pay',
                name: 'pay',
                component: pay,
                meta: { keepAlive: true }
            }


            ]

}

Vue.use(Router)
export default new Router(appRouter);