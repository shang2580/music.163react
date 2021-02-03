import React, { memo,useEffect} from 'react';



import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight

} from "./style.js"
import TopBanner  from "./c-cpns/top-banner";
import Hotrecommend from "./c-cpns/hot-recommend"


function Recommend(props) {
     
   
    return (
        <RecommendWrapper>  
                <TopBanner></TopBanner>
                <Content>
                    <RecommendLeft>
                        <Hotrecommend></Hotrecommend>
                    </RecommendLeft>
                    <RecommendRight></RecommendRight>
                </Content>
             
        </RecommendWrapper>
    )
}



export default  (memo(Recommend)) 








// function Recommend(props) {
//     const {getTopBanners,topBanners}  = props;
   
//     useEffect(()=>{
      
//         getTopBanners()   
        
//     },[getTopBanners])

//     return (
//         <TopBanner>  
                
//               recommend: {topBanners.length}
//         </TopBanner>
//     )
// }

// const mapStateToProps = state=>{
//     return {
//        topBanners:state.recommend.Topbanners
//     }
// }

// const mapDispatchToProps= dispatch=>{
//     return {
//         getTopBanners :()=>{ 
//             //   通过dispa 派发行为
//             dispatch(getTopBannerAction())
//         }
//     }
// }

// export default  connect(mapStateToProps,mapDispatchToProps)(memo(Recommend)) 