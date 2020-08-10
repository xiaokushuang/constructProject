<template>
    <div class="left-2-class">
      <!--小标题-->
      <div class="border-title">
        <img src="./images/left/left-icon-5.png" alt="">
      </div>
      <!--人数按钮-->
      <div class="peopleNumBtn clear">
        <div v-for="(data,index) in peopleList"  @click="changePeople(index)" style="margin-right: 13px;" class="l clear" :class="index==current?'hightLightLabel':'normalLabel'" >
          <div class="l" style="margin-right: 13px;">
            <div style="font-size: 24px;text-align: right">{{data.num}}</div>
            <div style="font-size: 14px;">{{data.name}}</div>
          </div>
          <div v-if="index=='0'" class="l" style="color:#25ACFF;margin-top: 28px;">|</div>
        </div>
      </div>
      <!--echart-->
      <div class="pie-echart">
        <left2Echart ref="left2EchartRef" :pieDataX="pieDataX"></left2Echart>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import left2Echart from './left2-echart'
    export default {
    components:{
      left2Echart,
    },
      data(){
        return {
          showPie:false,
          current:'0',
          peopleList:[],
          pieDataX:[],
          pieDataY:[],
          pieDataY1: [],
          pieDataY2:[],
        }
      },
      created() {
        axios.get("../../../static/homeTabJson/left-2.json").then((res) => {
          if (res.data.success) {
            console.log('left echart ',res)
            this.peopleList = res.data.peopleList;
            this.pieDataY1 = res.data.pieDataY1;
            this.pieDataY2 = res.data.pieDataY2;
            this.pieDataX = res.data.pieDataX;
            this.changePeople('0')
          }
        })
      },
      methods:{
        changePeople(val){
          this.current = val
          if(val==0){
            this.pieDataY = this.pieDataY1
          }
          if(val==1){
            this.pieDataY = this.pieDataY2
          }
          if(this.$refs.left2EchartRef){
            this.$refs.left2EchartRef.drawLine(this.pieDataX,this.pieDataY)
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .left-2-class{
    position: relative;
    .border-title{
      text-align: left;
      margin-bottom: 20px;
    }
    .peopleNumBtn{
      position: absolute;
      right: -20px;
      top: 3px;
    }
    .hightLightLabel{
      cursor: pointer;
      color:#CEF4FF;
    }
    .normalLabel{
      cursor: pointer;
      color:#6B6A7E
    }
  }

</style>
