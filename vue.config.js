module.exports={
    devServer:{
        port:8888,
        host:"localhost",
        https:false,
        proxy:{

            /**
             * 图片接口
             * */
            "/pic":{
                target:"https://img.xjh.me/",
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    "/pic":""
                }
            },
            /**
             * 云博随机api接口
             * */
            "/random":{
                target: "https://v1.alapi.cn/",
                changeOrigin:true,
                pathRewrite: {
                    "^/random":""
                }
            },
            /**
             * 网易云接口
             * */
            "/api":{
                target:"http://musicapi.leanapp.cn/",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            },
            /**
             * 在情岛：热门语录接口
             * */
            "/ana":{
                target:"https://www.inqingdao.cn/",
                changeOrigin:true,
                pathRewrite:{
                    "^/ana":""
                }
            },

            /**
             * 天气接口
             * http://wthrcdn.etouch.cn/weather_mini?city=%E5%8C%97%E4%BA%AC
             * */
            "/weather":{
                target:"http://wthrcdn.etouch.cn/",
                changeOrigin:true,
                pathRewrite:{
                    "^/weather":""
                }
            },

        }
    },
}