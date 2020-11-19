module.exports={
    devServer:{
        proxy:{
            "/api":{
                target:"http://musicapi.leanapp.cn",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    },

}