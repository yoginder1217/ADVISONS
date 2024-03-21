import { all } from "redux-saga/effects"

import { maincategorySaga } from "./MaincategorySagas"
import { subcategorySaga } from "./SubcategorySagas"
import { frontendSaga } from "./FrontendSagas"
import { productSaga } from "./ProductSagas"
import { cartSaga } from "./CartSagas"
import { wishlistSaga } from "./WishlistSagas"
import { checkoutSaga } from "./CheckoutSagas"
import { contactSaga } from "./ContactSagas"
import { newsletterSaga } from "./NewsletterSagas"


export default function* RootSaga() {
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        frontendSaga(),
        productSaga(),
        cartSaga(),
        wishlistSaga(),
        checkoutSaga(),
        contactSaga(),
        newsletterSaga(),
    ])
}
