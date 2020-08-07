<template>
    <div class="menuBg">
      <!--导航栏头部-->
      <div class="c-navClass">
        <div  style="display:flex;flex-wrap: wrap;">
          <div style="width:380px;line-height: 59px;">
            <span style="display:inline-block;margin-right: 20px;">11:45:48</span>
            <span style="display:inline-block;margin-right: 20px;">2020年07月31</span>
            <span>周四</span>
          </div>
          <div class="" style="font-size: 36px;width: calc(100% - 760px);">南部新城教育配套建设工程</div>
          <div class=""  style="width:380px;line-height: 59px;">
            <span>南部新城</span>
            <span @click="handleReturn()" class="returnBtn">返回</span>
          </div>
        </div>
      </div>
      <!--菜单栏切换-->
      <div class="clear menu-all-class">
        <div :class="current==index?'higLight-menu-class':''" class=" menu-class l" v-for="(data,index) in navList" @click="navClick(index)">{{data.name}}</div>
      </div>
     <!--下面是组件位置-->
      <div v-if="current==0" style="width:100%;padding-top:30px;text-align:center"><img src="http://119.3.213.166/images/001.png" width="1825px" center></div>
      <div v-if="current==1" style="width:100%;padding-top:15px;text-align:center"><img src="http://119.3.213.166/images/人.jpg" width="1889px" center></div>
      <div v-if="current==2" style="width:100%;padding-top:15px;text-align:center"><img src="http://119.3.213.166/images/机.jpg" width="1886px" center></div>
      <div v-if="current==3" style="width:100%;padding-top:15px;text-align:center"><img src="http://119.3.213.166/images/物.jpg" width="1400px" center></div>
      <div v-if="current==4" style="width:100%;padding-top:15px;text-align:center"><img src="http://119.3.213.166/images/法.jpg" width="1890px" center></div>
      <div v-if="current==5"><environment5></environment5></div>
      <!-- 直播视频初始化  if影响页面加载-->
      <div v-show="current==6"><video-monitoring></video-monitoring></div>
      <div v-if="current==7"></div>
    </div>
</template>

<script>
  import environment5 from './environment5'
  import videoMonitoring from './videoMonitoring';
    export default {
        name: "nav1",
        components:{
            environment5,
            videoMonitoring
        },
        data(){
          return {
            current:6,
            navList:[
              {
                id:'1',
                name:'首页',
              },
              {
                id:'2',
                name:'人员管理（人）',
              },
              {
                id:'3',
                name:'IoT设备（机）',
              },
              {
                id:'4',
                name:'物料管理（物）',
              },
              {
                id:'5',
                name:'质量管理（法）',
              },
              {
                id:'6',
                name:'绿色施工（环）',
              },
              {
                id:'7',
                name:'视频监控',
              }
            ],
          }
      },
      methods:{
        navClick(index){
          this.current = index
        },
        handleReturn(){
          this.$router.push('/')
        },
      }
    }
</script>

<style >
  .returnBtn{
    width: 166px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    background: url("../../assets/return-btn.png") 0 0 no-repeat;
    background-size: 50% 50%;
    background-position: center;

  }
  .menuBg{
    background: url("../../assets/menu-bg1.png") 0 0 no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height: 100%;
  }
  .c-navClass{
    text-align: center;
    line-height: 91px;
    color: #fff;
    width: 100%;
    height: 91px;
    font-size: 14px;
    background: url("../../assets/nav.png") 0 0 no-repeat;
  }
  .menu-all-class{
    background: url("../../assets/menu-bg.png") 0 0 no-repeat;
    background-size: cover;
    text-align: center;
  }
  .menu-class{
    cursor: pointer;
    padding: 10px;
    padding: 10px 56px;
  }
  .higLight-menu-class{
    background: url("../../assets/menu-hl.png") 0 0 no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
