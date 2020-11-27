<template>
    <div class="weather-box">

    </div>
</template>

<script>
import {cityWeather , transitionCity} from "@/request/api"

export default {
    name: "weather",
    data() {
        return {
            city: "",
            signAddress: "",
            lat:null,
            lng:null

        }
    },
    created() {
        // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
        this.getLocation();
    },
    mounted() {
        this.getCityWeather()
        setTimeout(()=>{
        this.getTransition()

        },1000)
    },
    methods: {
        getCityWeather() {
            cityWeather(this.city).then(res => {
                console.log(res);
            })
        },
        getLocation() {
            const self = this
            AMap.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                })

                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)

                function onComplete(data) {
                    // data是具体的定位信息
                    let {lat,lng} =  data.position
                    console.log('定位成功信息：', data.position)
                    self.lat = lat
                    self.lng = lng
                }

                function onError(data) {
                    // 定位出错
                    console.log('定位失败错误：', data)
                    self.getLngLatLocation()
                }
            })
        },
        getLngLatLocation() {
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        console.log('通过ip获取当前城市：',result)
                        //逆向地理编码
                        AMap.plugin('AMap.Geocoder', function() {
                            var geocoder = new AMap.Geocoder({
                                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                                city: result.adcode
                            })

                            var lnglat = result.rectangle.split(';')[0].split(',')

                            geocoder.getAddress(lnglat, function(status, data) {
                                if (status === 'complete' && data.info === 'OK') {
                                    // result为对应的地理位置详细信息
                                    console.log(data,"aaaa")
                                }
                            })
                        })
                    }
                })
            })
        },
        getTransition(){
            transitionCity("e44cdac0d2e93594f1b453e2dbfd6a6a",`${this.lng},${this.lat}`).then(res=>{
                console.log(res,"222")
            })
        }
    }
}



</script>

<style lang="scss" scoped>
.weather-box {
    position: absolute;
    width: 300px;
    height: 200px;
    background-color: #fff;
    top: 10px;
    right: 10px;
    border-radius: 20px;
    opacity: 0.2;
    transition: 0.3s;
    z-index: 2;
}

.weather-box:hover {
    box-shadow: 0 0 5px 2px #fff;
    opacity: 0.5;
}
</style>