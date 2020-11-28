<template>
    <div class="weather-box">
        <div class="weather-location">
        <i class="iconfont icon-Frame1"></i>{{location}}
        </div>
        <div class="map" id="map"></div>

    </div>
</template>

<script>
import {cityWeather , transitionCity , StaticMap} from "@/request/api"
// 引入地图组件
import AMap from "AMap"
export default {
    name: "weather",
    data() {
        return {
            province:"",    //省份
            city: "",       // 城市
            district:"",    //区
            location:"",
            lat:null,       // 经纬
            lng:null,
            zoom:12,
            center: [121.59996, 31.197646],
            amapManager:"amapManager",
            img:""
        }
    },
     async created() {
        // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
        await this.getLocation();
        // console.log("1")
    },
    mounted() {
        setTimeout(()=>{
        this.getTransition()
        },1000)
        // this.MapInit()
    },
    methods: {
        getCityWeather() {
            cityWeather(this.city).then(res => {
                console.log(res,"11");
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
                    // console.log('定位成功信息：', data.position)
                    self.lat = lat
                    self.lng = lng
                    console.log(lng,lat,"经纬")
                    self.MapInit()
                }

                function onError(data) {
                    // 定位出错
                    console.log('定位失败错误：', data)
                    self.getLngLatLocation()
                }
            })
        },
        // 调用ip定位
        getLngLatLocation() {
            AMap.plugin('AMap.CitySearch', function () {
                let citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        // console.log('通过ip获取当前城市：',result)
                        //逆向地理编码
                        AMap.plugin('AMap.Geocoder', function() {
                            let geocoder = new AMap.Geocoder({
                                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                                city: result.adcode
                            })

                            let lnglat = result.rectangle.split(';')[0].split(',')

                            geocoder.getAddress(lnglat, function(status, data) {
                                if (status === 'complete' && data.info === 'OK') {
                                    // result为对应的地理位置详细信息
                                    console.log(data)
                                }
                            })
                        })
                    }
                })
            })
        },
        getTransition(){
            transitionCity("e44cdac0d2e93594f1b453e2dbfd6a6a",`${this.lng},${this.lat}`).then(res=>{
                let {province,city,district} = res.regeocode.addressComponent
                this.province = province
                this.city = city
                this.district = district
                this.location = res.regeocode.formatted_address
                this.getCityWeather()
                this.getStaticMap()
            })
        },
        getStaticMap(){
            let params = {location:`${this.lng},${this.lat}`,zoom:5,size:"300*300",scale:1,traffic:1,key:"e44cdac0d2e93594f1b453e2dbfd6a6a"}
            StaticMap(params).then(res=>{
                this.img = res
            })

        },
        /**
         * 地图初始化
         * */
        MapInit () {
            let that = this
            let map = new AMap.Map('map', {
                zoom:11,//级别
                center: [that.lng,that.lat],//中心点坐标
                viewMode:'3D'//使用3D视图
            });
        }

    }
}



</script>

<style lang="scss" scoped>
.weather-box {
    position: absolute;
    width: 400px;
    height: 200px;
    background-color: #ffffff60;
    padding: 15px;
    top: 10px;
    right: 10px;
    border-radius: 20px;
    transition: 0.3s;
    z-index: 2;
}

.weather-box:hover {
    box-shadow: 0 0 5px 2px #fff;
}
.weather-location{
    display: flex;
    align-items: center;
    color: #000;
}

#map{
    width: 373px;
    height: 152px;
    border-radius: 10px;
}
</style>