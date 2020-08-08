<template>
  <div class="left4-1-class">
    <div class="clear">
      <div class="l" style="padding: 35px 34px 0 25px;">
        <div class="left4-bj">
          <img src="" alt="">
        </div>
        <div class="left4-title">哈尔滨林林成项目</div>
      </div>
      <div class="l" >
        <div class="title">高支棱监控</div>
        <div v-for="data in left4List.slice(0,3)" class="left4-list">
          <div class="clear">
            <div class="l" style="margin-right: 30px;">
              <img v-if="data.type=='yellow'" src="../../images/left/left-icon-5.png" alt="">
              <img v-if="data.type=='blue'" src="../../images/left/left-icon-6.png" alt="">
              <img v-if="data.type=='red'" src="../../images/left/left-icon-7.png" alt="">
              <span>{{data.warningName}}</span>
            </div>
            <div class="r" style="width: 500px;text-align: right">
              <span>{{data.condition}}</span>
              <span>{{data.num}}</span>
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
    name: "center5",
    data(){
      return {
        left4List:[{
          "type":"yellow",
          "warningName":"橙色警告",
          "condition":"周边管线水平位移",
          "num":"0.3米"
        },
          {
            "type":"blue",
            "warningName":"蓝色警告",
            "condition":"建筑物倾斜",
            "num":"13.2度"
          },
          {
            "type":"red",
            "warningName":"红色警告",
            "condition":"立柱内力",
            "num":"235.2kg"
          },
          {
            "type":"blue",
            "warningName":"蓝色警告",
            "condition":"建筑物倾斜wq",
            "num":"13.2度"
          } ]
      }
    },
    created(){
      this.play()
      debugger
      axios.get("../../json/left-4.json").then((res)=>{
        console.log('了伐t',res)
        if(res.data.success){
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
    padding-right: 55px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
  }
  .left4-1-class{

  }
  .left4-bj{
    width: 81px;
    height: 66px;
    margin: auto;
    background: url("../../images/left/left-icon-4.png") 0 0 no-repeat;
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
