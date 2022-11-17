import React, { memo } from 'react'
import { footerLinks, footerImages } from "@/common/local-data";



import { AppFooterWraper, FooterLeft, FooterRight } from "./style.js"

export default memo(function HYAppFooter() {
    return (
        <AppFooterWraper>
            <FooterLeft>
                <ul>
                    {footerLinks.map((item, index) => {
                        return (
                            <li key={item.title}>
                                {item.title}
                            </li>

                        )

                    })}
                </ul>
            </FooterLeft>
            <FooterRight>
                <ul>
                    {
                        footerImages.map((item, index) => {
                            return (
                                <li key={item.link}>
                                    <a href=""></a>
                                    <span> {item.link} </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </FooterRight>
        </AppFooterWraper>
    )
})
