import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {Themehearderrcm}  from "./style.js"

 const  HYThemeHeaderRCM = memo(function (props) {
    const {title,keywords=[]} = props; 
    // let keywords=["华语","流行","摇滚","民谣","电子"]
   return (
       <Themehearderrcm className="sprite_02">
           <div className = "left"> 
               <h3 className = "title">{title}</h3> 
               <div className="keyword">
                   {
                     keywords.map((item,index)=>{
                         return (
                            <div className="item" key={item}>
                                    <a href="todo">{item}</a>
                                    <span className="divider">|</span>
                            </div>
                         )
                     })
                   }
               </div>
                 
           </div>

           <div className = "right">
                <a href = "todo">更多</a>
                <i className = "icon sprite_02"></i>
           </div>
            
           
       </Themehearderrcm>
   )
})



HYThemeHeaderRCM.propTypes = {
    //  定义props 传递过来的 内容类型 已经 必传要求
    title:PropTypes.string.isRequired,
    keywords:PropTypes.array
}

HYThemeHeaderRCM.defaultProps = {
    //  定义默认值
    keywords:[]
}

export default HYThemeHeaderRCM