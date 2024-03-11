import { takeEvery, put } from "redux-saga/effects"
import { ADD_PRODUCT, ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constants"
import {addProductAPI, deleteProductAPI, getProductAPI, updateProductAPI} from "../Services/ProductService"

function* addProductSaga(action) {    //executer
   var response = yield addProductAPI(action.payload)
   yield put({type:ADD_PRODUCT_RED,payload:response})
}
function* getProductSaga(action) {    //executer
    var response = yield getProductAPI()
    yield put({type:GET_PRODUCT_RED,payload:response})
}
function* updateProductSaga(action) {    //executer
    yield updateProductAPI(action.payload)
    yield put({type:UPDATE_PRODUCT_RED,payload:action.payload})
 }
function* deleteProductSaga(action) {    //executer
    yield deleteProductAPI(action.payload)
    yield put({type:DELETE_PRODUCT_RED,payload:action.payload})
}
export function* productSaga() {       //watcher
    yield takeEvery(ADD_PRODUCT, addProductSaga)
    yield takeEvery(GET_PRODUCT, getProductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateProductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteProductSaga)
}