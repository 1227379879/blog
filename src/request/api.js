import request from "./https"
const BASE_URL="/api"
const BASE_URL_RANDOM = "/random"
const BASE_URL_ANA = "/ana"
const BASE_URL_PIC = "/pic"
// const BASE_URL_WEATHER = "/weather"
/**
 * 高德api接口
 * */
const BASE_URL_AUTONAVI = "https://restapi.amap.com/"

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

export function cityWeather(city){
    if (city === "" || city == null){
        city = "深圳"
    }
    return request({
        url:BASE_URL_AUTONAVI+"v3/weather/weatherInfo?key=e44cdac0d2e93594f1b453e2dbfd6a6a&city="+city,
        method:"get"
    })
}


/**
 * 地图转换接口
 * */
export function transitionCity(key,locations){
    return request({
        url:BASE_URL_AUTONAVI+"v3/geocode/regeo?key="+key+"&location="+locations+"&coordsys=gps&radius=1000&extensions=all&batch=false&roadlevel=0",
        method:"get"
    })
}


/**
 * 高德静态地图接口
 * https://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=<用户的key>
 * */

export function StaticMap(params){
    return request({
        url:BASE_URL_AUTONAVI+"/v3/staticmap",
        params:params,
        method:"get"
    })
}