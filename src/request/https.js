import axios from "axios"
const instance = axios.create({
    baseURL:"/api/"
})

//拦截器
instance.interceptors.request.use(function (config){
    return config
},function (error){
    return Promise.reject(error)
})


//响应器
instance.interceptors.response.use(function (response){
    console.log("响应器")
    return response.data
},function (error){
    console.log("失败")
    return Promise.reject(error)
})
export  default instance