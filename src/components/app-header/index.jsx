import React, { memo } from 'react'
import { NavLink } from "react-router-dom";

import { headerLinks } from "@/common/local-data.js"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons";

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight

} from "./style"

export default memo(function HYAppHeader() {


    const showitem = (item, index) => {
        if (index < 3) {
            return (<NavLink to={item.link} exact>
                {item.title}
                <i className="sprite_01 icon"></i>
            </NavLink>)
        } else {
            return <a href={item.link}>
                {item.title}
                <i className="sprite_01 icon"></i>
            </a>
        }
    }



    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>

                    <a href="#/" className="logo sprite_01"></a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {


                                return (<div key={item.title} className="select-item">
                                    {showitem(item, index)}
                                </div>)


                            })
                        }

                    </div>
                </HeaderLeft>


                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>

                    <div className="center">创造者中心</div>
                    <div className="center">登录</div>
                </HeaderRight>
            </div>

            <div className="divider"></div>
        </HeaderWrapper>
    )
})
