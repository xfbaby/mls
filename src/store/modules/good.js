
const shop = {
  state: {
    cartProductData: null,
    allTotal:0,
    newdata:[]
  },
  mutations: {
    SET_CARTPRODUCT_DATA(state, cartProductData) {
      state.cartProductData = cartProductData;
      state.newdata.push(JSON.parse(cartProductData));
     
    },
    SET_ALL(state, allTotal){
      state.allTotal += state.cartProductData?JSON.parse(state.cartProductData).num:0;
    }
  },
  actions: {
    SelectProduct({ // 加入购物车
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
    

       commit('SET_CARTPRODUCT_DATA',parameterData);
      
  /*      selectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })*/
      })
    },


  }
}

export default shop
