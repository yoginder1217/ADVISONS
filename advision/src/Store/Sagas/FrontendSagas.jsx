import { takeEvery, put } from "redux-saga/effects"
import { ADD_FRONTEND, ADD_FRONTEND_RED, DELETE_FRONTEND, DELETE_FRONTEND_RED, GET_FRONTEND, GET_FRONTEND_RED, UPDATE_FRONTEND, UPDATE_FRONTEND_RED } from "../Constants"
import {addFrontendAPI, deleteFrontendAPI, getFrontendAPI, updateFrontendAPI} from "../Services/FrontendService"

function* addFrontendSaga(action) {    //executer
   var response = yield addFrontendAPI(action.payload)
   yield put({type:ADD_FRONTEND_RED,payload:response})
}
function* getFrontendSaga(action) {    //executer
    var response = yield getFrontendAPI()
    yield put({type:GET_FRONTEND_RED,payload:response})
}
function* updateFrontendSaga(action) {    //executer
    yield updateFrontendAPI(action.payload)
    yield put({type:UPDATE_FRONTEND_RED,payload:action.payload})
 }
function* deleteFrontendSaga(action) {    //executer
    yield deleteFrontendAPI(action.payload)
    yield put({type:DELETE_FRONTEND_RED,payload:action.payload})
}
export function* frontendSaga() {       //watcher
    yield takeEvery(ADD_FRONTEND, addFrontendSaga)
    yield takeEvery(GET_FRONTEND, getFrontendSaga)
    yield takeEvery(UPDATE_FRONTEND,updateFrontendSaga)
    yield takeEvery(DELETE_FRONTEND,deleteFrontendSaga)
}