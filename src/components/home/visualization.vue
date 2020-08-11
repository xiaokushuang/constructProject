<template>
  <div class="visualizationClass">
    <!--导航栏头部-->
    <div class="navClass">南部新城智慧工地监管平台</div>
   <!--内容部分-->
    <div style="padding: 0 15px;">
      <div class="contentClass clear" style="padding-top:30px">
        <!--左边部分-->
        <div class="left l ">
          <!--左1-->
            <div class="smallBlock">
              <div class="titleClass">项目总框</div>
              <left1></left1>
            </div>
          <!--左2-->
            <div class="smallBlock">
              <div class="titleClass">项目类型</div>
              <left2></left2>
            </div>
          <!--左3-->
            <div class="smallBlock">
              <div class="titleClass">人民教育情况</div>
              <left3></left3>
            </div>
        </div>
       <!--中间部分-->
        <div class="center l" style="padding: 0 10px;">
          <!--中间地图-->
          <div class="centerTop">
            <map-self></map-self>
          </div>
          <!--安全检查情况-->
          <div class="centerBottom">
            <div class="titleClass1">安全检查情况</div>
            <center2></center2>
          </div>
        </div>
        <!--右侧部分-->
        <div class="right l">
          <!--右1-->
          <div class="smallBlock1">
            <div>
              <div class="titleClass" style="padding-left: 258px;">设备在线率</div>
             <right1></right1>
            </div>
          </div>
          <!--右2-->
          <div class="smallBlock1">
            <div>
              <div class="titleClass" style="padding-left: 220px;">管理人员出勤率</div>
              <right2></right2>
            </div>
          </div>
          <!--右3-->
          <div class="smallBlock1">
            <div>
              <div class="titleClass" style="padding-left: 200px;">项目告警动态监控</div>
              <div style="padding-right: 55px;">
                <div class="clear">
                  <!--扬尘警告和噪声警告-->
                  <div class="l">
                    <div style="cursor: pointer;border:1px solid #2CD4FF;border-radius:5px;padding:5px 10px;padding-right: 0;">
                      <span style="margin-right: 10px;" @click="changeType(index)" :class="current1==index?'highlight1':'normal1'" v-for="(data,index) in typeList" >{{data.name}}</span>
                    </div>
                  </div>
                  <!--今日&&本周-->
                  <div style="margin-top: 20px;" class="r">
                    <div>
                      <span style="font-size:12px;cursor: pointer;" :class="current2==index?'highlight1':'normal1'"  @click="changeDate(index)" v-for="(data,index) in dateList">
                        {{data.name}}
                        <span v-if="index==0" style="color:#2CD6FF">|</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <right3 ref="right3Ref"></right3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import mapSelf from './newMap'
  import left1 from './left1'
  import left2 from './left2'
  import left3 from './left3'
  import center2 from './center2'
  import right1 from './right1'
  import right2 from './right2'
  import right3 from './right3'
export default {
  name: 'HelloWorld',
  components:{
    mapSelf,
    left1,
    left2,
    left3,
    center2,
    right1,
    right2,
    right3
  },
  data () {
    return {
      xData:[],
      yData:[],
      xData1:[],
      yData1:[],
      xData2:[],
      yData2:[],
      xData3:[],
      yData3:[],
      xData4:[],
      yData5:[],
      current1:0,
      current2:0,
      typeList:[
        {
          id:'1',
          name:'扬尘警告'
        },
        {
          id:'2',
          name:'噪声警告'
        }
      ],
      dateList:[
        {
          id:'1',
          name:'今日'
        },
        {
          id:'2',
          name:'本周'
        }
      ]
    }
  },
  created(){
    axios.get("../../../static/json/home-right-3.json").then((res)=>{
      if(res.data.success){
        this.xData1 = res.data.xData1
        this.yData1 = res.data.yData1
        this.xData2 = res.data.xData2
        this.yData2 = res.data.yData2
        this.xData3 = res.data.xData3
        this.yData3 = res.data.yData3
        this.xData4 = res.data.xData4
        this.yData4 = res.data.yData4
        this.xData = this.xData1
        this.yData = this.yData1
        this.$refs.right3Ref.drawLine(this.xData,this.yData);
      }
    })
  },
  methods:{
    changeType(index){
      this.current1 = index
      if(this.current1==0&&this.current2==0){
        this.xData = this.xData1
        this.yData = this.yData1
      }
      if(this.current1==0&&this.current2==1){
        this.xData = this.xData2
        this.yData = this.yData2
      }
      if(this.current1==1&&this.current2==0){
        this.xData = this.xData3
        this.yData = this.yData3
      }
      if(this.current1==1&&this.current2==1){
        this.xData = this.xData4
        this.yData = this.yData4
      }
      this.$refs.right3Ref.drawLine(this.xData,this.yData);
    },
    changeDate(index){
      this.current2 = index
      if(this.current1==0&&this.current2==0){
        this.xData = this.xData1
        this.yData = this.yData1
      }
      if(this.current1==0&&this.current2==1){
        this.xData = this.xData2
        this.yData = this.yData2
      }
      if(this.current1==1&&this.current2==0){
        this.xData = this.xData3
        this.yData = this.yData3
      }
      if(this.current1==1&&this.current2==1){
        this.xData = this.xData4
        this.yData = this.yData4
      }
      this.$refs.right3Ref.drawLine(this.xData,this.yData);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .visualizationClass{
    background: url("../../assets/bg1.png") 0 0 no-repeat,
    url("../../assets/bg2.png") 0px 0 no-repeat;
    height: 1080px;
  }
  .navClass{
    text-align: center;
    font-size: 36px;
    line-height: 91px;
    color: #fff;
    width: 100%;
    height: 91px;
    background: url("../../assets/nav.png") 0 0 no-repeat;
  }
  .contentClass{
    width: 100%;
    background: url("../../assets/bg3.png") 0 0 no-repeat;
    background-size: 100% 100%;
    padding: 25px;
  }
  .smallBlock{
    width: 487px;
    height: 279px;
    padding-left: 34px;
    background: url("../../assets/left1.png") 0 0 no-repeat;
    background-size: cover;
    margin-bottom: 20px;
  }
  .smallBlock1{
    width: 487px;
    height: 279px;
    padding-left: 34px;
    background: url("../../assets/right1-0.png") 0 0 no-repeat;
    background-size: cover;
    margin-bottom: 20px;
  }
  .titleClass{
    color:#B5DEFF;
    font-size:20px;
    font-weight: bold;
    padding-left: 64px;
    padding-top: 18px;
  }
  .titleClass1{
    text-align: left;
    color: #B5DEFF;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
    margin-bottom: 19px;
  }
  .centerTop{
    width: 815px;
    height: 588px;
    background: url("../../assets/center1.png") 0 0 no-repeat;
    background-size: cover;
    margin-bottom: 10px;
    padding:15px;
  }
  .centerBottom{
    width: 815px;
    height: 279px;
    padding: 60px;
    padding-top: 0;
    background: url("../../assets/center2.png") 0 0 no-repeat;
    background-size: cover;
  }
.highlight1{
  color:#2CD6FF
}
.normal1{
  color:#207DB9
}
</style>

