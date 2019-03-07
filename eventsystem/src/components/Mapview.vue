<template>
  <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
　　<!-- baidu-map指的既是BaiduMap组件 -->
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},  //经纬度
      zoom: 3　 //地图展示级别
    }
  },
　　components: {
　　　　BaiduMap  //指定组件模板
　　},
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 104.066513
      this.center.lat = 30.572262
      this.zoom = 15
    }
  }
}
</script>
<style>
    .map{
        width: 100%;
    }
    .anchorBL{
        display: none;
    }
</style>
