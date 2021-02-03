import  request from "./request.js";

 

// 封装banner的网络请求
export  function getTopBanners (){
   return  request({
        url:"/banner"
    })
}