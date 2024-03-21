import {takeEvery,put} from "redux-saga/effects"
import { addWishlistAPI, deleteWishlistAPI, getWishlistAPI } from "../Services/WishlistService"
import {ADD_WISHLIST,ADD_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED} from "../Constants"

function* addWishlistSaga(action){   //executer
    var response = yield addWishlistAPI(action.payload)
    yield put({type:ADD_WISHLIST_RED,data:response.data})
}
function* getWishlistSaga(){   //executer
    var response = yield getWishlistAPI()
    yield put({type:GET_WISHLIST_RED,data:response.data})
}
function* deleteWishlistSaga(action){   //executer
    yield deleteWishlistAPI(action.payload)
    yield put({type:DELETE_WISHLIST_RED,data:action.payload})
}
export function* wishlistSaga(){    //watcher
    yield takeEvery(ADD_WISHLIST,addWishlistSaga)
    yield takeEvery(GET_WISHLIST,getWishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
}