module.exports = {
    configureWebpack: {
        externals: {
            AMap: "AMap",
        }
    },
    devServer: {
        port: 8888,
        host: "localhost",
        https: false,
        proxy: {

            /**
             * 图片接口
             * */
            "/pic": {
                target: "https://img.xjh.me/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "/pic": ""
                }
            },
            /**
             * 云博随机api接口
             * */
            "/random": {
                target: "https://v1.alapi.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/random": ""
                }
            },


            /**
             * 网易云接口
             * */
            "/api": {
                target: "http://musicapi.leanapp.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            /**
             * 在情岛：热门语录接口
             * */
            "/ana": {
                target: "https://www.inqingdao.cn/",
                changeOrigin: true,
                pathRewrite: {
                    "^/ana": ""
                }
            }
        }
    },
}