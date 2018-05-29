import { login } from '@/service/getData';
import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
} from '@/utils/mixin';
import {
    Toast
} from 'mint-ui';
const user = {
    state: {
        userInfo: null, //用户信息数据
        addressList: null, //用户地址数据
    },
    mutations: {
        SET_USERINFO_DATA(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        LogOut({ 
            commit,
            state
        }, parameterData) {
            return new Promise((resolve, reject) => {
                removeSessionStorage('MemberToken');
                commit('SET_USERINFO_DATA', null)
                resolve();
            })
        },
        Login({ 
            commit,
            state
        }, parameterData) {
            return new Promise((resolve, reject) => {
                let res = login(parameterData);
                if (res.Data.Code == '0') {
                    setSessionStorage('MemberToken', "tom");
                    resolve();
                } else {
                    reject();
                }
            })

        },
        IsLogin({ commit, state }) {
            return new Promise((resolve, reject) => {
                if (getSessionStorage('MemberToken')) {
                    resolve();
                } else {
                    reject();
                }
            })
        },
    }
}

export default user
