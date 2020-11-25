import request from "./https"
const BASE_URL="/api"
const BASE_URL_RANDOM = "/random"
const BASE_URL_ANA = "/ana"
const BASE_URL_VVHAN = "/vvhan"

/**
 *测试多接口*/
export function search(){
    return request({
        url:BASE_URL+"/search?keywords=海阔天空"
    })
}

/**
 * 随机语录接口*/
export function RandomAna(){
    return request({
        url:BASE_URL_ANA+"/hitokoto/",
        method:"get"
    })
}

/**
 * 随机语录接口
 * */
export function RandomVvhan() {
    return request({
        url: BASE_URL_VVHAN + "/api/sao",
        method:"get"
    })
}
