import { ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY_RED } from "../Constants";

export default function SubcategoryReducer(state = [], action) {
   switch (action.type) {
      case ADD_SUBCATEGORY_RED:
         var newState = state
         newState.push(action.payload)
         return newState
      case GET_SUBCATEGORY_RED:
         return action.payload
      case UPDATE_SUBCATEGORY_RED:
          newState = state
         var index = newState.findIndex((x)=>x._id===action.payload._id)
         newState[index]=action.payload
         return newState
      case DELETE_SUBCATEGORY_RED:
          newState = state.filter((item)=>item._id!==action.payload._id)
         return newState
      default:
         return state
   }
}