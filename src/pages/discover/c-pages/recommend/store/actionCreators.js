
import *  as actionTypes from "./constants";
import {getTopBanners} from "@/services/recommend"


const changeTopBanneraction = (data)=>{
    
    return {
         type:actionTypes.CHANGE_TOP_BANNERS,
         topBanners:data.banners
    }
}



export const getTopBannerAction= ()=>{
//    把dispatch 作为参数
    return dispatch =>{
        getTopBanners().then(res=>{ 
            // 通过dispatch 调用 行为 给state 赋值
            dispatch(changeTopBanneraction(res))
        })
        
         
    }
}