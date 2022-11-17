import React, { memo } from 'react'
import {SongsCoverWrapper} from "./style.js";
//  引入处理方法
import  {getCount,getSizeImg} from "@/utils/data.format.js"

export default memo(function SongsCover(props) {
    //   从 props 传递过来 一些 基本值
    let {info} =  props
    return (
        <SongsCoverWrapper>
            <div className = "cover-top"> 
                <img src = {getSizeImg(info.picUrl,140)}></img>
                <div className = "cover sprite_cover">
                    <div className = "info sprite_cover">
                        <span>
                            <i className = "sprite_icon erji"></i>
                                {getCount(info.playCount)}
                        </span>
                        <i className = "sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className = "cover-source text-nowrap">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsCoverWrapper>
    )
})
