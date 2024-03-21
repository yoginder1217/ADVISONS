import {takeEvery,put} from "redux-saga/effects"
import { addContactAPI, deleteContactAPI, getContactAPI, updateContactAPI } from "../Services/ContactService"
import {ADD_CONTACT,ADD_CONTACT_RED, DELETE_CONTACT, DELETE_CONTACT_RED, GET_CONTACT, GET_CONTACT_RED, UPDATE_CONTACT, UPDATE_CONTACT_RED} from "../Constants"

function* addContactSaga(action){   //executer
    var response = yield addContactAPI(action.payload)
    yield put({type:ADD_CONTACT_RED,data:response.data})
}
function* getContactSaga(){   //executer
    var response = yield getContactAPI()
    yield put({type:GET_CONTACT_RED,data:response.data})
}
function* deleteContactSaga(action){   //executer
    yield deleteContactAPI(action.payload)
    yield put({type:DELETE_CONTACT_RED,data:action.payload})
}
function* updateContactSaga(action){   //executer
    yield updateContactAPI(action.payload)
    yield put({type:UPDATE_CONTACT_RED,data:action.payload})
}
export function* contactSaga(){    //watcher
    yield takeEvery(ADD_CONTACT,addContactSaga)
    yield takeEvery(GET_CONTACT,getContactSaga)
    yield takeEvery(DELETE_CONTACT,deleteContactSaga)
    yield takeEvery(UPDATE_CONTACT,updateContactSaga)
}