import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Button, Pressable } from "react-native";
import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";

import { addVideo } from "@/features/posts/initialVideos";
import {videoClick} from "@/features/currentVideo"

import { YouTubeVideoItem } from "@/app/types";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  useNavigation,
} from '@react-navigation/native';

const SearchResultComponent = () => {
  const navigation = useNavigation()
  const { width } = useWindowDimensions(); //Give the widht and height of the current screen
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.firstVideo);

  useEffect(() => {
    // fetch(
    //   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bgmi 55 kill&type=video&key=AIzaSyACNnroYxy5SHHjPv4CNigi4v3GyMhA68A&publishedAfter=2024-01-01T00:00:00Z"
    // )
    // .then(async (res) => {
    // const resData = await res.json();
    const resData = {
      kind: "youtube#searchListResponse",
      etag: "_nVVqYT0AiD3L4kbfWw8Jp7b1oc",
      nextPageToken: "CBkQAA",
      regionCode: "IN",
      pageInfo: {
        totalResults: 71927,
        resultsPerPage: 25,
      },
      items: [
        {
          kind: "youtube#searchResult",
          etag: "rSIySN91Ncf7LqkBP9aQvkYmark",
          id: {
            kind: "youtube#video",
            videoId: "5slh1QOBG5Q",
          },
          snippet: {
            publishedAt: "2024-11-08T10:45:00Z",
            channelId: "UCrsAcO8rqzMkkbhPSUiFcSw",
            title:
              "WORLD RECORD 55 KILLS HIGHEST EVER in 1 Match Zenos PUBG BEST Moments in PUBG Mobile",
            description:
              "Welcome back to WORLD RECORD 55 KILLS HIGHEST EVER in 1 Match Zenos PUBG BEST Moments in PUBG Mobile.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/5slh1QOBG5Q/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/5slh1QOBG5Q/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/5slh1QOBG5Q/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "KingAnBru",
            liveBroadcastContent: "none",
            publishTime: "2024-11-08T10:45:00Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "sD5Z4JpRPvEHvAAiKNr74AYsBsU",
          id: {
            kind: "youtube#video",
            videoId: "7n1uS2ApE2E",
          },
          snippet: {
            publishedAt: "2024-07-21T08:00:03Z",
            channelId: "UCffh6IaDaZDMwSycr3pXaaQ",
            title:
              "55 KILLS!!😱 1 IN MATCHES NEW WORLD KILLS &amp; DAMAGE RECORD 😍SAMSUNG,A7,A8,J2,J3,J4,J5,J6,J7,XS",
            description:
              "Don't Forget to subscrible if you like the video❤️ Thanks for your support❤️. Device - Ipad Pro 5 Finger + Full Gyro Edit - ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/7n1uS2ApE2E/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/7n1uS2ApE2E/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/7n1uS2ApE2E/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Trotz PUBG",
            liveBroadcastContent: "none",
            publishTime: "2024-07-21T08:00:03Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "ZMwSLt0Wh1urB-XEqGz6OgFD-Bk",
          id: {
            kind: "youtube#video",
            videoId: "LRTMOsZ6c8A",
          },
          snippet: {
            publishedAt: "2024-03-29T09:00:17Z",
            channelId: "UCOE8EMzL-nGAMcFAk9fvb6A",
            title:
              "51 KILLS!!😱 1 IN MATCHES NEW WORLD KILLS &amp; DAMAGE RECORD in PUBG MOBILE | SOLO VS SQUAD GAMEPLAY",
            description:
              "Thanks for watching❤️ If you like the video please don't forget to like it / you can subscribe and turn on notifications for more ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/LRTMOsZ6c8A/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/LRTMOsZ6c8A/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/LRTMOsZ6c8A/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "VALE",
            liveBroadcastContent: "none",
            publishTime: "2024-03-29T09:00:17Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "jnJvqd4sQWQempymQ_JLAfMpxg4",
          id: {
            kind: "youtube#video",
            videoId: "TkPIvODRdeY",
          },
          snippet: {
            publishedAt: "2024-10-21T06:32:49Z",
            channelId: "UCdyYw5lyaAD79E38h7P4sGg",
            title:
              "I got challenge for ₹55,000 &amp; This happened😵 | Most intense challenge ever | BGMI Highlight",
            description:
              "I got challenge for ₹55000 & This happened   | Most intense challenge ever | BGMI Highlight ▫Instagram ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/TkPIvODRdeY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/TkPIvODRdeY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/TkPIvODRdeY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "LoLzZz Plays",
            liveBroadcastContent: "none",
            publishTime: "2024-10-21T06:32:49Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Qv8qBc3k-foRTg6De5JqJJ-Gl_8",
          id: {
            kind: "youtube#video",
            videoId: "2XLHRI1TmPc",
          },
          snippet: {
            publishedAt: "2024-06-28T00:42:38Z",
            channelId: "UCvrtHH90Sc5XRXpifNrWLtg",
            title:
              "😱 55 KILL 🔥 NEW RECORD | BGMI AGRESSIVE RUSH GAMEPLAY 🤣 @JONATHANGAMINGYT @DynamoGaming",
            description:
              "55 KILL NEW RECORD | BGMI AGRESSIVE RUSH GAMEPLAY 55 Kills MY NEW SEASON RECORD in EVENT PUBG ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/2XLHRI1TmPc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/2XLHRI1TmPc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/2XLHRI1TmPc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Peep Gaming",
            liveBroadcastContent: "none",
            publishTime: "2024-06-28T00:42:38Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "ej1DjZ4mXW1ce5BxM339stYvzrY",
          id: {
            kind: "youtube#video",
            videoId: "FXpVGyjXkkE",
          },
          snippet: {
            publishedAt: "2024-09-20T03:15:01Z",
            channelId: "UCvQj8H5gxnDjmhXp6hSKzVw",
            title: "OMG😲 55 KILL IN SINGLE MATCH #viralvideo #bgmi #shorts",
            description:
              "OMG   55 KILL IN SINGLE MATCH #viralvideo #bgmi #shorts #victorvsfullsquadinbgmi.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/FXpVGyjXkkE/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/FXpVGyjXkkE/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/FXpVGyjXkkE/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "PsychoXu Playz",
            liveBroadcastContent: "none",
            publishTime: "2024-09-20T03:15:01Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "OHqITl8iDfwj9JaRAB_yd5McXGI",
          id: {
            kind: "youtube#video",
            videoId: "CwstlkH6BME",
          },
          snippet: {
            publishedAt: "2024-05-01T06:00:08Z",
            channelId: "UCZOW4EOIU_jwHhybPh6q0LQ",
            title:
              "55 Kills!!😱DEADLY LOOT GAMEPLAY TODAY🔥GROZA+M416 | PUBG Mobile",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/CwstlkH6BME/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/CwstlkH6BME/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/CwstlkH6BME/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Fatih GAMING",
            liveBroadcastContent: "none",
            publishTime: "2024-05-01T06:00:08Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "vvmAQeUqAaRWdcKGo_UCBQVDt4E",
          id: {
            kind: "youtube#video",
            videoId: "2JoFZMlkA84",
          },
          snippet: {
            publishedAt: "2024-10-31T06:30:28Z",
            channelId: "UCI1vyXBgX3bruwvChLMNxjQ",
            title:
              "52 SOLO KILLS IN CONQUEROR LOBBY | MG3 + MG3 = TABAHI | BGMI HIGHLIGHT",
            description:
              "Instagram - https://www.instagram.com/lolzzzgaming/ #bgmi #52kills #conqueror.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/2JoFZMlkA84/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/2JoFZMlkA84/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/2JoFZMlkA84/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "LoLzZz Gaming",
            liveBroadcastContent: "none",
            publishTime: "2024-10-31T06:30:28Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Y8hP19MEEQjXysAqaYP4M2-iEB0",
          id: {
            kind: "youtube#video",
            videoId: "oxLQkAELlWk",
          },
          snippet: {
            publishedAt: "2024-11-28T09:00:51Z",
            channelId: "UCbCm-ru6fSxyUM0d3ELmIJA",
            title:
              "😱 OMG !! HOW TO FIND DRAGON GOD &amp; KILL HIM SUPER SECRET WAY NO ONE KNOW ||",
            description:
              "Double Dhamaka Alert! Buy UC with UniPin before 22nd November and stand a chance to win 10 RP 10s! Winners will be ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/oxLQkAELlWk/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/oxLQkAELlWk/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/oxLQkAELlWk/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "J.A GAMER BOY • 50k views • 1 hours ago\n\n\n...",
            liveBroadcastContent: "none",
            publishTime: "2024-11-28T09:00:51Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "BvUViptSn4JsXuhsFJTuyswaBHg",
          id: {
            kind: "youtube#video",
            videoId: "r9zxdKoUbyc",
          },
          snippet: {
            publishedAt: "2024-03-22T13:09:58Z",
            channelId: "UC0bNXAEd6tT0AtRbKLXeeEQ",
            title:
              "Capi REACTS! 55KILLS 🔥JONATHAN &amp; Lolzzz on BEAST MODE !! BGMI",
            description:
              "pubgmobile #capigaming #jonathangaming Welcome to my Pubg Mobile Gameplay. I hope i can entertain you Guys with my ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/r9zxdKoUbyc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/r9zxdKoUbyc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/r9zxdKoUbyc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Capi Gaming",
            liveBroadcastContent: "none",
            publishTime: "2024-03-22T13:09:58Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "CMvxPEHV-QYTcPNUnw91KAZWjfU",
          id: {
            kind: "youtube#video",
            videoId: "JAfPZik3_8E",
          },
          snippet: {
            publishedAt: "2024-04-18T09:00:13Z",
            channelId: "UCOE8EMzL-nGAMcFAk9fvb6A",
            title:
              "53 KILLS!!😱 1 IN MATCHES NEW WORLD KILLS &amp; DAMAGE RECORD in PUBG MOBILE | SOLO VS SQUAD GAMEPLAY",
            description:
              "Thanks for watching❤️ If you like the video please don't forget to like it / you can subscribe and turn on notifications for more ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/JAfPZik3_8E/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/JAfPZik3_8E/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/JAfPZik3_8E/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "VALE",
            liveBroadcastContent: "none",
            publishTime: "2024-04-18T09:00:13Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "EeovDMEgNq9SenRbAVK8i3bZt0I",
          id: {
            kind: "youtube#video",
            videoId: "o0Ln-wK0CRQ",
          },
          snippet: {
            publishedAt: "2024-09-16T10:00:53Z",
            channelId: "UCOIc0crt_wENaUnjtVAgP5w",
            title:
              "55 KILLS!!😱 1 IN MATCHES NEW WORLD KILLS &amp; DAMAGE RECORD 😍 Pubg Mobile",
            description:
              "Download Pubg Mobile: https://eu.creatorhub.pubgmobile.com/t/qCGvCO Thanks For Your Support. Device:iPad Pro 11-inch 4th ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/o0Ln-wK0CRQ/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/o0Ln-wK0CRQ/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/o0Ln-wK0CRQ/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Zenos PUBG",
            liveBroadcastContent: "none",
            publishTime: "2024-09-16T10:00:53Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "fBxa9aRLFZpuMmFVkXZ-a0LS3lc",
          id: {
            kind: "youtube#video",
            videoId: "ehcIPXZ7brY",
          },
          snippet: {
            publishedAt: "2024-07-16T06:00:18Z",
            channelId: "UCZOW4EOIU_jwHhybPh6q0LQ",
            title:
              "45 KILLS😱NEW WORLD KILL RECORD OF THE YEAR🔥SOLO VS SQUAD | PUBG Mobile",
            description:
              "Don't forget to SUBSCRIBE if you are new here! Thanks for watching and for your support!! My Second Channel ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ehcIPXZ7brY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/ehcIPXZ7brY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/ehcIPXZ7brY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Fatih GAMING",
            liveBroadcastContent: "none",
            publishTime: "2024-07-16T06:00:18Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "vztUXG-ebFjkm-PsUQnh7N9-OrU",
          id: {
            kind: "youtube#video",
            videoId: "PBitNZdERx4",
          },
          snippet: {
            publishedAt: "2024-09-26T09:53:49Z",
            channelId: "UCaKP_4kPEaCd3lCGasNCBXQ",
            title: "Bgmi##55 kill ##+123 ## in one match 😈😈🔥🔥🥵🥵",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/PBitNZdERx4/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/PBitNZdERx4/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/PBitNZdERx4/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "iFKxpikachuYT",
            liveBroadcastContent: "none",
            publishTime: "2024-09-26T09:53:49Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Oj-lXXDnds0m-a3f9TQjJ5DNuAg",
          id: {
            kind: "youtube#video",
            videoId: "PRaUeGY8Sr8",
          },
          snippet: {
            publishedAt: "2024-11-16T06:30:09Z",
            channelId: "UCI1vyXBgX3bruwvChLMNxjQ",
            title: "94 SQUAD KILLS WORLD RECORD IN BGMI | GODL LoLzZz",
            description:
              "Instagram - https://www.instagram.com/lolzzzgaming/ #BGMI #RECORD #94KILLS.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/PRaUeGY8Sr8/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/PRaUeGY8Sr8/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/PRaUeGY8Sr8/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "LoLzZz Gaming",
            liveBroadcastContent: "none",
            publishTime: "2024-11-16T06:30:09Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "2ggdHZWnZM9yt2z6iKfIWjDK0CU",
          id: {
            kind: "youtube#video",
            videoId: "wo6VTn9Ufaw",
          },
          snippet: {
            publishedAt: "2024-09-20T01:41:24Z",
            channelId: "UCD5S7iDg3z8Xjg_Sdrkpp1A",
            title:
              "55 Kill 😁 free | Server hacker in  My Lobby #pubg #bgmi #pubgmobile",
            description:
              "55 kills 55 finishes in bgmi 55 kills in pubg #shortsviral pubg mobile most kills bgmi live video 55 kills words record bgmi tips bgmi ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/wo6VTn9Ufaw/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/wo6VTn9Ufaw/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/wo6VTn9Ufaw/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "RIDDLER Jr",
            liveBroadcastContent: "none",
            publishTime: "2024-09-20T01:41:24Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "1es2dH6evj5-Am16UXya3xuGjms",
          id: {
            kind: "youtube#video",
            videoId: "ygMeG2EXme4",
          },
          snippet: {
            publishedAt: "2024-08-15T01:38:40Z",
            channelId: "UCmPDwhGizqerhXsQy2SEwsg",
            title:
              "55 kill  BGMI || SERVER HACKER AA  GYA RE|| #pubg #bgmi #virel #shorts #trending #20kill #15august",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ygMeG2EXme4/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/ygMeG2EXme4/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/ygMeG2EXme4/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "LoLzZz fan",
            liveBroadcastContent: "none",
            publishTime: "2024-08-15T01:38:40Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "whn_dX1RDzkeIUq0U_7DivHfu1Q",
          id: {
            kind: "youtube#video",
            videoId: "HQ3ytyRrW0A",
          },
          snippet: {
            publishedAt: "2024-11-11T04:36:19Z",
            channelId: "UCyiNPVP_202P9Xfj355iuPw",
            title:
              "55… kills 💀 #pubgmobile #bgmi #bestsolovssquadplayerinbgmi #battleroyalegame #1v4 #clips",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/HQ3ytyRrW0A/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/HQ3ytyRrW0A/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/HQ3ytyRrW0A/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "SAMIR OP",
            liveBroadcastContent: "none",
            publishTime: "2024-11-11T04:36:19Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "KZO0MN6uSE0rU9V7rVhc1AkucWo",
          id: {
            kind: "youtube#video",
            videoId: "0DDhTucH7rs",
          },
          snippet: {
            publishedAt: "2024-09-23T12:48:04Z",
            channelId: "UCv8kVF0BcdDnpjjE3Z7vwFg",
            title:
              "55 kill new record #bgmi #pubg #gaming #youtube #chenal #shorts #like #subscribe",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/0DDhTucH7rs/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/0DDhTucH7rs/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/0DDhTucH7rs/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Abhishek yadav",
            liveBroadcastContent: "none",
            publishTime: "2024-09-23T12:48:04Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "gmYxQuwgygFjxbsh8R3HY4-ow1k",
          id: {
            kind: "youtube#video",
            videoId: "DyMZ6qFqUoM",
          },
          snippet: {
            publishedAt: "2024-08-10T04:02:00Z",
            channelId: "UCwoqCuZ9Wpo6uXJo1K9Wo2A",
            title:
              "Last Zone 55 Alive ☠️🔥 #pubgmobile #bgmi #lastzone #gaming #tdm #alive",
            description:
              "Last Zone 55 Alive ☠️   #pubgmobile #bgmi #lastzone #gaming #tdm #alive Your Queries :- NEW MECHA FUSION UPDATE ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/DyMZ6qFqUoM/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/DyMZ6qFqUoM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/DyMZ6qFqUoM/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "RippO PlayzZz",
            liveBroadcastContent: "none",
            publishTime: "2024-08-10T04:02:00Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "66hjB66ikKmUjYmgufzVk-kpV9M",
          id: {
            kind: "youtube#video",
            videoId: "QlOKo2cAvhg",
          },
          snippet: {
            publishedAt: "2024-01-30T13:31:49Z",
            channelId: "UCCkFomX2mkfCew6MS4T5IZQ",
            title:
              "OMG 😱 NEW UPDATE BGMI #  55 KILL  #bgmi  #2024  #viral  #fight💯✅✅✅",
            description:
              "OMG NEW UPDATE BGMI # 55 KILL #bgmi #2024 #viral #fightOMG NEW UPDATE BGMI # 55 KILL #bgmi #2024 #viral ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/QlOKo2cAvhg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/QlOKo2cAvhg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/QlOKo2cAvhg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Sikkim Player's. King 1 v 4",
            liveBroadcastContent: "none",
            publishTime: "2024-01-30T13:31:49Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Ha9QsW6Rm8LD5BlecKINZzbaSe8",
          id: {
            kind: "youtube#video",
            videoId: "Za0FKhColvY",
          },
          snippet: {
            publishedAt: "2024-09-09T07:49:32Z",
            channelId: "UCmD7AH2LQPvXOK8UMLeFF7A",
            title: "BGMI ! NEW RECORD 73 KILLS | JONATHAN, LOLZZZ 🔥",
            description:
              "BGMI ! NEW RECORD 73 KILLS | JONATHAN, LOLZZZ #jonathangaming #lolzzzgaming #bgmi #godlike.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Za0FKhColvY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Za0FKhColvY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Za0FKhColvY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "StarBoyAbhi",
            liveBroadcastContent: "none",
            publishTime: "2024-09-09T07:49:32Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "hhHS0s_-L8gPgu36lZKNs-6hqY8",
          id: {
            kind: "youtube#video",
            videoId: "FffMPAsm1-o",
          },
          snippet: {
            publishedAt: "2024-04-20T15:07:34Z",
            channelId: "UCyEtw6ZM7_sdeS_lo_0gvBw",
            title:
              "55 KILLS🤯SERVER FREEZE🥶#bgmi #pubg #viral #shorts #pubgmobile #lailon",
            description:
              "55 KILLS  SERVER FREEZE  #bgmi #pubg #viral #shorts #pubgmobile #lailon #pubgmobile #trending #lolzzzgaming #zeltrax ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/FffMPAsm1-o/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/FffMPAsm1-o/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/FffMPAsm1-o/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "LAILON GAMING",
            liveBroadcastContent: "none",
            publishTime: "2024-04-20T15:07:34Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "cTsIVCQuD0u9xs5hj9KroKUehc4",
          id: {
            kind: "youtube#video",
            videoId: "KlZ2UvqDTTo",
          },
          snippet: {
            publishedAt: "2024-10-12T08:58:48Z",
            channelId: "UC4hpZm_AfLdnF1BjX7TWq6w",
            title: "55 Kills 🔥 IN 30 MINUTES NEW HARDEST GAMEPLAY🥵 BGMI",
            description:
              "55 Kills IN 30 MINUTES NEW HARDEST GAMEPLAY   BGMI Join me as we dive into the intense and action-packed world of ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/KlZ2UvqDTTo/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/KlZ2UvqDTTo/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/KlZ2UvqDTTo/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "NJ IN ACTION",
            liveBroadcastContent: "none",
            publishTime: "2024-10-12T08:58:48Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "r8qcBSUsv-NTHSypq3BW9Ct65pQ",
          id: {
            kind: "youtube#video",
            videoId: "Brb13KtGe8k",
          },
          snippet: {
            publishedAt: "2024-10-06T01:35:58Z",
            channelId: "UCfyvzBSlgi8tuVMfggITfng",
            title:
              "55 KILL IN PUNG HAEDSHOT #bgmi #pubgmobile #pubg #shorts #viralshorts #viralvideo",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Brb13KtGe8k/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Brb13KtGe8k/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Brb13KtGe8k/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Naughty Gamer",
            liveBroadcastContent: "none",
            publishTime: "2024-10-06T01:35:58Z",
          },
        },
      ],
    };
    if (resData && Array.isArray(resData.items)) {
      const filteredData = resData.items.map((item: YouTubeVideoItem) => ({
        id: item?.id.videoId,
        title: item?.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
      }));
      dispatch(addVideo(filteredData));
    }
    // })
    // .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <View className="flex-1 gap-3 px-4   rounded-lg bg-slate-600">
      <View>
        <Text className="text-2xl font-extrabold">Last Watch</Text>
      </View>
      <ScrollView >
        <View className="gap-5" >
          {posts.map((post) => (
            <Pressable className="px-1" key={post.id + `${Math.random() * 1000}`} onPress={()=> {
              console.log("Click the video",{id: post.id})
              dispatch(videoClick({id: post.id, title: post.title}))
              navigation.navigate('video')
              }}>

            <View
              className="flex-row items-center gap-3 h-auto"
              key={post.id}
              style={{ width }}
            >
              <Image
                style={styles.thumbnail}
                source={{ uri: post.thumbnail }}
              />
              <Text
                className="w-3/5  text-sm font-semibold text-white"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {post.title}
              </Text>
              <Pressable onPress={()=> console.log("Button CLick")}>
              <Ionicons name="ellipsis-vertical" size={32} color="gray" />
              </Pressable>
            </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: "20%",
    height: 50,
    borderRadius: 10,
  },
});

export default SearchResultComponent;
