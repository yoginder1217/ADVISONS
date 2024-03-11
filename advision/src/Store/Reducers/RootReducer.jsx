import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer"
import SubcategoryReducer from "./SubcategoryReducer"
import ProductReducer from "./ProductReducer"
import FrontendReducer from "./FrontendReducer"

export default combineReducers({
    MaincategoryStateData:MaincategoryReducer,
    SubcategoryStateData:SubcategoryReducer,
    ProductStateData:ProductReducer,
    FrontendStateData:FrontendReducer
})
