import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReducer } from "./reducers/productReducers"

// combine All reducers
const reducer = combineReducers({
  productList: productListReducer
})

// initial state
const initialState = {}

// array of middlewares
const middleware = [thunk]

// redux store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
