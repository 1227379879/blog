<template>
    <div class="location-box" v-show="mapTypeFlag">
        <div class="location-info">
        <i class="iconfont icon-Frame1"></i>{{location}}
        </div>
        <Map :lng="lng" :lat="lat"></Map>
    </div>
</template>

<script>
import Map from "@/components/Map/Map";
import {cityWeather , transitionCity} from "@/request/api"
import {mapState} from "vuex"
// 引入地图组件

import AMap from "AMap"
export default {
    name: "weather",
    data() {
        return {
            province:"",    //省份
            city: "",       //城市
            district:"",    //区
            location:"",    //位置信息
            lat:null,       //经纬
            lng:null,
        }
    },
    components:{
        Map
    },
     async created() {
        // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
        await this.getLocation();
    },
    mounted() {
        setTimeout(()=>{
        this.getTransition()
        },1000)
    },
    computed:{
      ...mapState(["mapTypeFlag"])
    },
    methods: {
        /*高德地图api：“返回当前城市天气信息”*/
        getCityWeather() {
            cityWeather(this.city).then(res => {
                console.log(res,"天气接口");
            })
        },
        /*获取当前定位信息*/
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
                    self.lat = lat
                    self.lng = lng
                    // console.log(lng,lat,"经纬")
                    /*获取到经纬度之后，在调用地图初始化来进行定位*/
                }

                function onError(data) {
                    // 定位出错
                    console.log('定位失败错误：', data)
                    /**再次调用ip进行定位操作*/
                }
            })
        },
        /*将定位信息转换为城市信息*/
        getTransition(){
            transitionCity("e44cdac0d2e93594f1b453e2dbfd6a6a",`${this.lng},${this.lat}`).then(res=>{
                let {province,city,district} = res.regeocode.addressComponent
                this.province = province
                this.city = city
                this.district = district
                this.location = res.regeocode.formatted_address
                /*定位信息转换完成之后调用天气接口，来获取当前城市天气*/
                this.getCityWeather()
            })
        }
    }
}

</script>

<style lang="scss" scoped>
.location-box {
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

.location-box:hover {
    box-shadow: 0 0 5px 2px #fff;
}
.location-info{
    display: flex;
    align-items: center;
    color: #000;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#map{
    width: 373px;
    height: 152px;
    border-radius: 10px;
}
</style>