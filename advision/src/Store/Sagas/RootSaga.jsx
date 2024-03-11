import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySagas"
import { subcategorySaga } from "./SubcategorySagas"
import { productSaga } from "./ProductSagas"
import { frontendSaga } from "./FrontendSagas"


export default function* RootSaga() {
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        productSaga(),
        frontendSaga()
    ])
}
