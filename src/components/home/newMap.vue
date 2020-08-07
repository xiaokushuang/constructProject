<template>
  <div class="_map">
    <div class="amap-page-container">
      <el-amap ref="map" :mapStyle="mapStyle"  vid="amapDemo" :plugin="plugin"  :zoom="zoom" :center="center" class="amap-demo" :events="events">
        <div v-for="mark in maps.markpoint">
          <el-amap-marker
            :position="mark.point"
            :icon="markImg"
            :label="mark.name"
            :clickable="maps.enableclick"
            :events="markerEvents">
          </el-amap-marker>
          <el-amap-info-window
            v-if="currentWindow"
            :position="currentWindow.position"
            :visible="currentWindow.visible"
            :content="currentWindow.content">
          </el-amap-info-window>
        </div>
      </el-amap>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'newMap',
    components: {
    },
    data() {
      var me = this;
      me.city = me.city || '南京';
      return {
        currentWindow:{
          tooltipImg2:require('../../assets/spot.png'),
          position:[118.803687,31.984702],
          visible:false,
          content:`<div class="tipClass" onclick="window.open('/#/construction','_self')">
                      <div class="clear">
                        <div class="l" style="font-size:16px">南部新城夹岗区域教育配套建设工程项目</div>
                        <div class="r detailEnterClass" style="font-size:16px;color: #5eeeff;cursor: pointer;">详情></div>
                     </div>
                     <div>
                        <img src="../../assets/left1-1.png" width="10" height="10" alt="">
                        <div>南部新城夹岗区</div>
                      </div>
                      <div class="clear">
                        <div style="width:160px;height:90px;margin-right:16px;" class="l">
                        <img src="http://119.3.213.166/images/spot.png" width="160px" alt="">
                       </div>
                        <div class="l" style="line-height:23px;">
                            <div>施工许可证号JYG-2019-00009</div>
                            <div>建筑面积200m²</div>
                            <div>结构形式框架结构</div>
                            <div>工程进度</div>
                          </div>
                      </div>
                   </div>`
        },
        markImg:require('../../assets/mark.png'),
        mapStyle: 'amap://styles/darkblue',
        list:[],
        currIndex:0,
        zoom: 11,
        center: [118.803687,31.984702],
        events:{
      init: (o) => {
            o.setCity(me.city,result => {
              if(result && result.length > 0){
                me.zoom = 11;
                me.makerConf.position = result;
                me.getList(result);
              }
            });
            //去掉logo
            document.getElementsByClassName("amap-logo")[0].style.display = "none";
          },
          "dragend":function(e){
            //console.log("dragging",e,this.getCenter());
            var point = this.getCenter();
            var pos = [point.lng,point.lat];
            me.makerConf.position =  [point.lng,point.lat];
            me.getList(pos);
          }
        },
        makerConf: {
          position:  [118.803687,31.984702],
          position1:  [118.803687,31.984702],
          content:""
        },
        maps:{
          enable:false,
          enableclick:true,
          markevent:"click",
          zoom:4,
          center: [105, 35],
          markpoint:[
            {name:'',point:[118.803687,31.984702]},
          ],
        },
        markerEvents: {
          // 点击事件
          click(e) {
            me.currentWindow.visible = !me.currentWindow.visible
            if(me.currentWindow.visible){
              console.log('detailEnterClass',document.querySelector('._map .tipClass'))
             /* me.$nextTick(()=>{
                if(document.querySelector('.detailEnterClass')){
                  console.log('detailEnterClass',document.querySelector('.detailEnterClass'))
                }
              })*/
            }
          }
        },
        searchOption: {
          city: me.city,
          citylimit: true
        },
        plugin:[
          'ToolBar',
          'Scale',
          {
            pName: 'Geolocation',
            events: {
              init(o) {

              },
              complete:function(result){
                //定位成功
                var address = result.formattedAddress
                var point = result.position;
                var obj = {
                  address:address,
                  name:"",
                  location:point
                }
                me.list = [obj];
                me.makerConf.position =  [point.lng,point.lat];
              },
              error:function(){

              }
            }
          }
        ]
      };
    },
    created(){
      var me = this;

    },
    mounted(){

    },
    methods: {
      handleClickDetail(){
        this.$router.push('/construction')
      },
      select:function(item,index){
        var me = this;
        me.currIndex = index;
        var point = item.location;
        me.makerConf.position =  [point.lng,point.lat];
        me.center = [point.lng,point.lat];

      },
      //this.$refs.map.$$getCenter()
      getList:function(result){
        //获取列表
        var me = this;
        me.$Geocoder({
          lnglatXY:result,
          success:function(res){
            if(res.regeocode && res.regeocode.pois){
              me.list = res.regeocode.pois;
            }else{
              me.list = [];
            }
          },
          error:function(res){
            me.list = [];
          }
        });

      },
      onSearchResult(pois) {
        //搜索
        let latSum = 0;
        let lngSum = 0;
        var me = this;

        var mymap = me.$refs.map.$$getInstance();

        if (pois && pois.length > 0) {

          //如果长度为1则无需转化
          var poi = pois[0];
          var lng = poi["lng"];
          var lat = poi["lat"];
          me.center = [lng, lat];
          me.makerConf.position  = [lng, lat];
          //me.makerConf.content = poi.name;
          me.list = pois;
        }else{
          me.list = [];
        }
      },

      $Geocoder(options){
        //将坐标点转化为，详细地址
        options = options || {};
        if(AMap){
          AMap.plugin(['AMap.Geocoder'], () => {
            const geocoder = new AMap.Geocoder({
              radius: options.radius || 1000,
              extensions: options.extensions || "all"
            })
            var  lnglatXY = options.lnglatXY || [118.803687,31.984702]; //已知点坐标
            geocoder.getAddress(lnglatXY, function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                options.success && options.success(result);
              }else{
                options.error && options.error(status,result);
              }
            });
          });

        }

      }
    },
    "watch":{
      list:function(){
        this.currIndex = 0;
      }
    }

  };

  /*
    me.$Geocoder({
                  lnglatXY:[center.lng, center.lat],
                  success:function(res){
                      console.log(res);
                  }
      });
   *
   * */
</script>
<style>
  .tipClass{
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
  }
  .amap-logo{
    display: none;
  }
  .amap-geolocation-con .amap-geo{
    display: none;
  }
  .amap-toolbar{
    display: none;
  }
  .amap-copyright {
    display: none;
  }
  .amap-scale-line{
    display: none;

  }
  .amap-scalecontrol {
    display: none;
  }
  .bottom-center.amap-info-contentContainer{
    width: 416px;
    /*height: 190px;*/
    padding: 16px;
    background: #023866;
    border: 1px solid #246286;
    border-radius: 8px;
  }
  .amap-info-content {
    background: #023866;
    box-shadow: none!important;
  }
  .amap-info-close {
    display: none;
  }
   .bottom-center .amap-info-sharp {
     bottom: -8px;
     left: 50%;
     margin-left: -8px;
     border-left: 8px solid transparent;
     border-right: 8px solid transparent;
     border-top: 8px solid #023866;
   }
  ._map{
    width: 100%;
    height: 100%;
  }
  .amap-page-container{
    height: 100%;
    position: relative;
  }
  .search-box {
    position: absolute !important;
    top: 25px;
    left: 20px;
    z-index: 200 !important;
  }
  .amap-demo {
    height: 100%;
  }
  .amap-logo {
    display: none;
  }
  .amap-info {
    top: 290px !important;
  }
  .amap-copyright {
    bottom:-100px;
    display: none;
  }
  .amap-scalecontrol{
    bottom: 4px !important;
  }
  .amap-geolocation-con{
    bottom: 30px !important;
    z-index: 199 !important;
  }
  ul li.active{
    color: deeppink;
  }
</style>
