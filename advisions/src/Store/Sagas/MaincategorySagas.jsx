import { takeEvery, put } from "redux-saga/effects"
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constants"
import {addMaincategoryAPI, deleteMaincategoryAPI, getMaincategoryAPI, updateMaincategoryAPI} from "../Services/MaincategoryService"

function* addMaincategorySaga(action) {    //executer
   var response = yield addMaincategoryAPI(action.payload)
   yield put({type:ADD_MAINCATEGORY_RED,payload:response.data})
}
function* getMaincategorySaga(action) {    //executer
    var response = yield getMaincategoryAPI()
    yield put({type:GET_MAINCATEGORY_RED,payload:response.data})
}
function* updateMaincategorySaga(action) {    //executer
    yield updateMaincategoryAPI(action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,payload:action.payload})
 }
function* deleteMaincategorySaga(action) {    //executer
    yield deleteMaincategoryAPI(action.payload)
    yield put({type:DELETE_MAINCATEGORY_RED,payload:action.payload})
}
export function* maincategorySaga() {       //watcher
    yield takeEvery(ADD_MAINCATEGORY, addMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY, getMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
}