<template>
    <div class="map" id="map"></div>
</template>

<script>
// 引入地图组件
import AMap from "AMap"

export default {
    name: "Map",
    props:["lat","lng"],
    data() {
        return {
            province: "",    //省份
            city: "",       //城市
            district: "",    //区
            location: "",    //位置信息
        }
    },
    mounted() {
        if (this.$props.lat !== undefined && this.$props.lng !== undefined){
            this.MapInit()
        }
    },
    methods: {
        /**
         * 地图初始化
         * */
        MapInit () {
            let that = this
            let map = new AMap.Map('map', {
                mapStyle: 'amap://styles/normal', //设置地图的显示样式
                zoom:12,//级别
                center: [that.lng,that.lat],//中心点坐标
                pitch:50, // 地图俯仰角度，有效范围 0 度- 83 度
                viewMode:'3D'//使用3D视图
            });
            var trafficLayer = new AMap.TileLayer.Traffic({
                zIndex: 10
            });
            map.add(trafficLayer);//添加图层到地图
            var marker = new AMap.Marker({
                position:[that.$props.lng,that.$props.lat]//位置
            })
            map.add(marker);//添加到地图

            var infoWindow = new AMap.InfoWindow({ //创建信息窗体
                isCustom: true,  //使用自定义窗体
                content:"", //信息窗体的内容可以是任意html片段
                offset: new AMap.Pixel(0, 0)
            });
            var onMarkerClick  =  function(e) {
                infoWindow.open(map, e.target.getPosition());//打开信息窗体
                //e.target就是被点击的Marker
            }
            marker.on('click',onMarkerClick);//绑定click事件
        },
    }
}
</script>

<style scoped>
#map{
    width: 373px;
    height: 152px;
    border-radius: 10px;
}
</style>