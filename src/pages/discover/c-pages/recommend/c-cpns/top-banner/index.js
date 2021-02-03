import React, { memo, useEffect,useRef,useCallback,useState} from 'react';
import {useSelector,useDispatch,shallowEqual} from "react-redux";
import {getTopBannerAction} from "../../store/actionCreators";
import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from "./style.js"

export default memo(function Index() {
    const [currentIndex,setcurrentIndex] = useState(0);


    

     //  通过 react-redux的  hooks API 与 satte 相关联  
    // 需要传递一个回调函数 用state作为回调的参数 返回值 返回给 useSelector 同通过useSelector 返回出来
    // shallowEqual 作为 useSeletor第二个参数  用于 手动state 值的浅层比较用于性能优化 
    const  {topBanners}= useSelector(state => {
        return {
           // topBanners:state.get("recommend").get("Topbanners")
           //    getIn 方法 传入一个可迭代的 数组 来获取多层状态下对象
           topBanners:state.getIn(["recommend","Topbanners"]) 
        }
    },shallowEqual)
   
     //  通过 react-redux的  hooks API 与dispatch 相关联
    const dispatch = useDispatch()

   //  发送网络请求 获取网络数据
    useEffect(() => {
       //  通过dispa 派发行为
        dispatch(getTopBannerAction())

       //   dispatch 作为关联
    }, [dispatch])
    //  获取 轮播图 元素 
    let bannerref = useRef();
    //  切换面板时的 更改大背景图片方法  
    let  bannerchange = useCallback((from,to)=>{
        setcurrentIndex(to)
    },[])

   
    const bgImage =  topBanners[currentIndex] && (topBanners[currentIndex].imageUrl) + "?imageView&blur=40x20";

    return (
        <BannerWrapper bgImage = {bgImage}>
             <div className = "banner wrap-v2">
                 <BannerLeft>
                 <Carousel effect="fade" ref = {bannerref} beforeChange = {bannerchange}>
                         {
                             topBanners.map((item,index)=>{

                                return(
                                    <div className="banner-item" key = {item.imageUrl}>
                                        <img className = "image" src = {item.imageUrl} alt = {item.typeTitle}></img>
                                    </div>
                                
                                )
                             })
                         }
                        </Carousel>,
                     
                     </BannerLeft> 
                  
                 <BannerRight></BannerRight>

                 <BannerControl> 
                      <button className = "btn left"  onClick = {e=>{bannerref.current.prev()}}></button>
                      <button className = "btn right" onClick = {e=>{bannerref.current.next()}}></button>
                      
                 </BannerControl>
             </div>
            
        </BannerWrapper>
    )
})
