<template>
  <div class="left4-1-class">
    <div class="clear">
      <div class="l" style="padding: 35px 34px 0 25px;width: 161px;
    text-align: center;">
        <div class="left4-bj">
          <img src="" alt="">
        </div>
        <div class="left4-title">1号吊塔双城悦城国际项目</div>
      </div>
      <div class="l" >
        <div class="title">特种设备监控</div>
        <div style="margin-top: 30px;">
          <div v-for="data in left4List.slice(0,3)" class="left4-list">
            <div class="clear">
              <div class="l" style="margin-right: 30px;">
                <img v-if="data.type=='yellow'" src="../images/left/left-icon-5.png" alt="">
                <img v-if="data.type=='blue'" src="../images/left/left-icon-6.png" alt="">
                <img v-if="data.type=='red'" src="../images/left/left-icon-7.png" alt="">
                <span>{{data.warningName}}</span>
              </div>
              <div class="r" style="width: 150px;">
                <span>{{data.condition}}</span>
                <span>{{data.num}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "right4",
    data(){
      return {
        left4List:[]
      }
    },
    created() {
      axios.get("../../../static/regulatoryPlatform/left-4.json").then((res) => {
        if (res.data.success) {
          this.left4List = res.data.left4List
          this.play()
        }
      })
    },
    methods:{
      change(){
        //change、paly表格数据动态滚动
        this.left4List.push(this.left4List[0]);//把第一条数据插入数组最有一条
        this.left4List.shift();//删除数组中第一条数据
      },
      play(){
        setInterval(this.change, 3000);//每两秒执行一次插入删除操作
      }
    },
  }
</script>

<style scoped>
  .title{
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    padding-right: 55px;
    margin-bottom: 10px;
    position: absolute;
    left: 74px;
  }
  .left4-1-class{

  }
  .left4-bj{
    width: 81px;
    height: 66px;
    margin: auto;
    background: url("../images/left/left-icon-4.png") 0 0 no-repeat;
  }
  .left4-title{
    color:#C2D8FF;
    font-size: 14px;
  }
  .left4-list{
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    font-size: 14px;
    color:#C2D8FF;
  }
  .left4-list:nth-child(even){
    background: rgba(45,153,255,0.5);
    border-top: 1px solid rgba(255,255,255,0.4);
    border-bottom: 1px solid rgba(255,255,255,0.4);
  }
</style>
