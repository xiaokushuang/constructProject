<template>
  <div>
    <baidu-map v-bind:style="mapStyle"  class="bm-view" ak="" :center="center" :zoom="zoom" :scroll-wheel-zoom="true"
               @click="getClickInfo" @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom">
      <bm-view style="width: 100%; height:500px;"></bm-view>
      <bm-marker :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      </bm-marker>
      <bm-control :offset="{width: '10px', height: '10px'}">
        <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 999999}">
          <input type="text" placeholder="请输入搜索关键字" class="serachinput">
        </bm-auto-complete>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true" style="width:0px;height:0px;"></bm-local-search>
    </baidu-map>
  </div>
</template>
<script>
  import { MP } from './map.js'
  //地图组件---按需引入
  import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch, BmMarker} from 'vue-baidu-map'
  export default {
    components: {
      BaiduMap,
      BmControl,
      BmView,
      BmAutoComplete,
      BmLocalSearch,
      BmMarker
    },
    data: function () {
      return {
        showMapComponent: this.value,
        keyword: '',
        mapStyle: {
          width: '100%',
          // height: this.mapHeight + 'px'
        },
        center: {lng: 116.404, lat: 39.915},
        zoom: 15
      }
    },
    mounted(){
      this.$nextTick(() => {
        const _this = this
        MP(_this.ak).then(BMap => {
          _this.initMap()
        })
      })
    },
    watch: {
      value: function (currentValue) {
        this.showMapComponent = currentValue
        if (currentValue) {
          this.keyword = ''
        }
      }
    },
    methods: {
      /***
       * 地图点击事件。
       */
      getClickInfo (e) {
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
      },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      },
    }
  }
</script>
<style>
  .serachinput {
    width: 300px;
    box-sizing: border-box;
    padding: 9px;
    border: 1px solid #dddee1;
    line-height: 20px;
    font-size: 16px;
    height: 38px;
    color: #333;
    position: relative;
    border-radius: 4px;
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
  }
</style>
