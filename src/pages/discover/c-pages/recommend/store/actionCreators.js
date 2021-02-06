
import *  as actionTypes from "./constants";
import {getTopBanners,getHotRecommends} from "@/services/recommend"


const changeTopBanneraction = (data)=>{
    
    return {
         type:actionTypes.CHANGE_TOP_BANNERS,
         topBanners:data.banners
    }
}

const  changeHotRecommendaction= (data)=>{
    
    return{
        type:actionTypes.CHANGE_HOT_RECOMMEND,
        hotRecommend:data
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

export const getHotRecommendsAction = (limt)=>{
    return dispatch=>{
        //  发送网络请求 
        getHotRecommends(limt).then(res=>{
            console.log(res.result)
             dispatch(changeHotRecommendaction(res.result))
        })
    }
}