import { ADD_PRODUCT_RED, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constants";

export default function ProductReducer(state = [], action) {
   switch (action.type) {
      case ADD_PRODUCT_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_PRODUCT_RED:
         return action.payload
      case UPDATE_PRODUCT_RED:
          newState = state
         var index = newState.findIndex((x)=>x._id===action.payload._id)
         newState[index].name=action.payload.name
         newState[index].maincategory=action.payload.maincategory
         newState[index].subcategory=action.payload.subcategory
         newState[index].baseprice=action.payload.baseprice
         newState[index].discount=action.payload.discount
         newState[index].finalprice=action.payload.finalprice
         newState[index].des=action.payload.des
         newState[index].pic=action.payload.pic
         return newState
      case DELETE_PRODUCT_RED:
          newState = state.filter((item)=>item._id!==action.payload._id)
         return newState
      default:
         return state
   }
}