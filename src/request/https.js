import axios from "axios"
const instance = axios.create({
    baseURL:"",
    timeout: 10000, //基础路径,根据不同环境设置 baseURL, 最终发送请求时的URL为: baseURL + 发送请求时写URL ,
})

//拦截器
instance.interceptors.request.use(function (config){
    return config
},function (error){
    return Promise.reject(error)
})


//响应器
instance.interceptors.response.use(function (response){
    return response.data
},function (error){
    console.log("失败")
    return Promise.reject(error)
})
export default instance


