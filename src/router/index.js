import React from 'react-dom';
import { Redirect } from "react-router-dom";

import Discover from "@/pages/discover";
import Recommend from "../pages/discover/c-pages/recommend";
import Ranking from "@/pages/discover/c-pages/ranking";
import Album from "@/pages/discover/c-pages/album";
import Artist from "@/pages/discover/c-pages/artist";
import Djradio from "@/pages/discover/c-pages/djradio";
import Songs from "@/pages/discover/c-pages/songs";


import Friend from "@/pages/friend"
import Mine from "@/pages/mine"


const routes = [{
        path: "/",
        exact: true,
        render: () => {

            <Redirect to ="/discover"/>
        }

    },
    {
        path: "/discover",
      
        component: Discover,

        childer:[{
                path: '/discover',
                exact: true,
                render: () => {
                    <Redirect to = "/discover/recommend"/>
                }
            },
            {
                path: "/discover/recommend",
                component: Recommend
            },
            {
                path: "/discover/ranking",
                component: Ranking
            },
            {
                path: "/discover/songs",
                component: Songs
            },
            {
                path: "/discover/djradio",
                component: Djradio
            },
            {
                path: "/discover/artist",
                component: Artist
            },
            {
                path: "/discover/album",
                component: Album
            }
        ]
    },
    {
        path: "/friend",
        component: Friend
    },
    {
        path: "/mine",
        component: Mine

    }

];


export default routes