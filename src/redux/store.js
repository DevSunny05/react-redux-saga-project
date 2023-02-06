// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware =createSagaMiddleware()

const store=configureStore(
   {
    reducer: rootReducer,
    middleware:()=>[sagaMiddleware]
   }
)

sagaMiddleware.run(productSaga,console.log('store is called 2') )
export default store;