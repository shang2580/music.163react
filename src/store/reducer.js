import {combineReducers} from "redux-immutable";

 import {reducer as recommendReducer} from "../pages/discover/c-pages/recommend/store"

 import {} from "immutable"


const Reducer  = combineReducers ({
  recommend:recommendReducer
})

export default Reducer