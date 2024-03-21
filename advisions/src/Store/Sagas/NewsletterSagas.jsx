import { takeEvery, put } from "redux-saga/effects"
import { ADD_NEWSLETTER, ADD_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED } from "../Constants"
import { addNewsletterAPI, deleteNewsletterAPI, getNewsletterAPI } from "../Services/NewsletterService"

function* addNewsletterSaga(action) {    //executer
    var response = yield addNewsletterAPI(action.payload)
    yield put({ type: ADD_NEWSLETTER_RED, payload: response.data })
}
function* getNewsletterSaga(action) {    //executer
    var response = yield getNewsletterAPI()
    yield put({ type: GET_NEWSLETTER_RED, payload: response.data })
}
function* deleteNewsletterSaga(action) {    //executer
    yield deleteNewsletterAPI(action.payload)
    yield put({ type: DELETE_NEWSLETTER_RED, payload: action.payload })
}
export function* newsletterSaga() {       //watcher
    yield takeEvery(ADD_NEWSLETTER, addNewsletterSaga)
    yield takeEvery(GET_NEWSLETTER, getNewsletterSaga)
    yield takeEvery(DELETE_NEWSLETTER, deleteNewsletterSaga)
}