import request from "./https"
const BASE_URL="/api"
const BASE_URL_RANDOM = "/random"
const BASE_URL_ANA = "/ana"
const BASE_URL_PIC = "/pic"
const BASE_URL_WEATHER = "/weather"

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
export function RandomCelebrity(){
    return request({
        url:BASE_URL_RANDOM+"/api/mingyan"
    })
}

/**
 * 随机图片api
 * ：http://api.btstu.cn/sjbz/?lx=m_dongman
 * http://api.btstu.cn/sjbz/zsy.php
 * //https://img.xjh.me/random_img.php?type=bg&return=302&device=mobile
 * http://api.btstu.cn/sjbz/?lx=m_dongman
 * */

export function RandomPic(params){
    return request({
        url:BASE_URL_PIC+"random_img.php",
        params:params,
        method:"get"
    })
}


/**
 * 天气接口
 * */

export function cityWeather(params){
    return request({
        url:BASE_URL_WEATHER+"/weather_mini?city="+params,
        // params:params,
        method:"get"
    })
}