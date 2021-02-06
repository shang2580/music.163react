
import React, { memo,useEffect,shallowEqual} from 'react';

import  Themehearderrcm from "@/components/theme-hearder-rcm/index.js";
import {HOT_RECOMMEND_LIMIT} from "@/common/constants"

import {HotrecommendWrapper} from "./style.js";

import {useDispatch,useSelector} from  "react-redux";
import {getHotRecommendsAction} from "../../store/actionCreators"
// 导入 公共组件 

import SongsCover from "@/components/songs-cover/index.js"

export default memo(function Hotrecommend() {
//    redux hooks
  let dispatch =  useDispatch()

  let {Hotrecommends} =  useSelector(state=>{
      return {
        Hotrecommends: state.getIn(["recommend","HotRecommends"])
      }
    //    shallowEqual 作为第二个参数 浅层比较 提高性能
  },shallowEqual)
   
  
//    网络请求hooks
  useEffect(()=>{

    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
   

  },[dispatch])

    return (
        <HotrecommendWrapper>
              <Themehearderrcm keywords={["华语","流行","摇滚","民谣","电子"]}  title="热门推荐" ></Themehearderrcm>
              <div className = "recommend-list">
                { Hotrecommends.map((item,index)=>{
                  return  (
                    <SongsCover key = {item.id} info={item}></SongsCover>
                  )
              })}
              </div>
             
        </HotrecommendWrapper>
    )
})
