import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer"
import SubcategoryReducer from "./SubcategoryReducer"
import FrontendReducer from "./FrontendReducer"
import ProductReducer from "./ProductReducer"
import CartReducer from "./CartReducer"
import WishlistReducer from "./WishlistReducer"
import CheckoutReducer from "./CheckoutReducer"
import ContactReducer from "./ContactReducer"
import NewsletterReducer from "./NewsletterReducer"

export default combineReducers({
    MaincategoryStateData:MaincategoryReducer,
    SubcategoryStateData:SubcategoryReducer,
    FrontendStateData:FrontendReducer,
    ProductStateData:ProductReducer,
    CartStateData:CartReducer,
    WishlistStateData:WishlistReducer,
    CheckoutStateData:CheckoutReducer,
    ContactStateData:ContactReducer,
    NewsletterStateData:NewsletterReducer,
})
