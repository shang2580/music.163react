import  * as actionTypes from "./constants.js";
import {Map} from "immutable"





const defaultState = Map({
    Topbanners:[],
    HotRecommends:[]
})

function reducer(state = defaultState,action){
   
    switch(action.type){

        case actionTypes.CHANGE_TOP_BANNERS:

        //    return {...state,Topbanners:action.topBanners}
        return state.set("Topbanners",action.topBanners)
        case actionTypes.CHANGE_HOT_RECOMMEND :
         return   state.set("HotRecommends",action.hotRecommend) 

           default: return state;
    }
 
     

}


export default reducer