import React, { memo} from 'react';



import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight

} from "./style.js";
//  组件
import TopBanner  from "./c-cpns/top-banner";
import Hotrecommend from "./c-cpns/hot-recommend";
import  NewAlbum  from "./c-cpns/new-album/index";
import RecRanking   from "./c-cpns/recommend-ranking"


function Recommend(props) {
     
   
    return (
        <RecommendWrapper>  
                <TopBanner></TopBanner>
                <Content className = "wrap-v2">
                    <RecommendLeft>
                        <Hotrecommend></Hotrecommend>
                         <NewAlbum></NewAlbum>
                         <RecRanking></RecRanking>
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