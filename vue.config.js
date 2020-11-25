module.exports={
    devServer:{
        port:8888,
        host:"localhost",
        https:false,
        proxy:{
            "/random":{
                target: "https://www.yunboys.cn/",
                changeOrigin:true,
                pathRewrite: {
                    "^/random":""
                }
            },

            "/api":{
                target:"http://musicapi.leanapp.cn",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            },

            "/ana":{
                target:"https://www.inqingdao.cn/",
                changeOrigin:true,
                pathRewrite:{
                    "^/ana":""
                }
            }
        }
    },
}