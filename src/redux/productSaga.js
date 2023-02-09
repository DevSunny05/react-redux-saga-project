import {put, takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts(){
     let data=yield fetch('http://localhost:3500/product')
    data=yield data.json()
    console.log('saga is called 3')
    yield put({type:SET_PRODUCT_LIST,data})
    
}

function* searchProducts(data){
    let res=yield fetch(`http://localhost:3500/product?q=${data.query}`)
   res=yield res.json()
   console.log('saga is called 3',res)
   yield put({type:SET_PRODUCT_LIST,data:res})
   
}


function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProducts)
yield takeEvery(SEARCH_PRODUCT,searchProducts)
}

export default productSaga;