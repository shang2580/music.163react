import React, { memo} from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import {HeaderLink} from "@/common/local-data.js";





import {
    DiscoverWrapper,
    TopMenu
  } from './style';


export default memo(function Discover(props) {

    const { route } = props;
   
    return (
        <DiscoverWrapper>


            <div className="top">
                 <TopMenu className = "wrap-v1">
                         {
                             HeaderLink.map((item,index)=>{
                                  
                                return (
                                     <div className = "item" key={item.title}>
                                         <NavLink to = {item.link}>
                                                 {item.title}
                                         </NavLink>
                                     </div>
                                    
                                )
                             })
                         }
                     
                 </TopMenu>
            </div>
                     
                  {renderRoutes(route.childer)}
                
               
            
        </DiscoverWrapper>
    )
})
 