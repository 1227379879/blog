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
                target: "https://www.xzccc.com",
                changeOrigin:true,
                pathRewrite: {
                    "^/yan":""
                }
            }

        }
    },
}