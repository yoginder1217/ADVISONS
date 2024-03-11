import { takeEvery, put } from "redux-saga/effects"
import { ADD_SUBCATEGORY, ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constants"
import { addSubcategoryAPI, deleteSubcategoryAPI, getSubcategoryAPI, updateSubcategoryAPI } from "../Services/SubcategoryService"

function* addSubcategorySaga(action) {    //executer
    var response = yield addSubcategoryAPI(action.payload)
    yield put({ type: ADD_SUBCATEGORY_RED, payload: response })
}
function* getSubcategorySaga(action) {    //executer
    var response = yield getSubcategoryAPI()
    yield put({ type: GET_SUBCATEGORY_RED, payload: response })
}
function* updateSubcategorySaga(action) {    //executer
    yield updateSubcategoryAPI(action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })
}
function* deleteSubcategorySaga(action) {    //executer
    yield deleteSubcategoryAPI(action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload })
}
export function* subcategorySaga() {       //watcher
    yield takeEvery(ADD_SUBCATEGORY, addSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY, getSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY, updateSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY, deleteSubcategorySaga)
}