import  request from "./request.js";

 

// 封装banner的网络请求
export  function getTopBanners (){
   return  request({
    //     请求轮播图
        url:"/banner"
    })
}

export  function getHotRecommends (limit){
    return  request({
     //     请求轮播图
         url:"/personalized",
         params:{
            limit
         }
     })
 }