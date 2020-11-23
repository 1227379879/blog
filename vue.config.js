module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"http://musicapi.leanapp.cn",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            },
            "/yan":{
                target: "https://www.yunboys.cn/",
                changeOrigin:true,
                pathRewrite: {
                    "^/yan":""
                }
            }

        }
    },
}