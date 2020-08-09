<template>
    <div class="left-2-class">
      <!--小标题-->
      <div class="border-title">
        <img src="./images/left/left-icon-5.png" alt="">
      </div>
      <!--人数按钮-->
      <div class="peopleNumBtn clear">
        <div @click="changePeople(index)" style="margin-right: 20px;" class="l clear" :class="index==current?'hightLightLabel':'normalLabel'" v-for="(data,index) in peopleList">
          <div class="l" style="margin-right: 20px;">
            <div style="font-size: 24px;">{{data.num}}</div>
            <div style="font-size: 18px;">{{data.name}}</div>
          </div>
          <div v-if="index=='0'" class="l" style="color:#25ACFF;margin-top: 32px;">|</div>
        </div>
      </div>
      <!--echart-->
      <div class="pie-echart">
        <left2Echart></left2Echart>
      </div>
    </div>
</template>

<script>
  import left2Echart from './left2-echart'
  // import peiEchart from './left2-echart'
    export default {
    components:{
      left2Echart
    },
      data(){
        return {
          current:'0',
          peopleList:[
            {
              num:'129',
              name:'实时在场人数'
            },
            {
              num:'137',
              name:'今日考勤人数'
            }
          ],
        }
      },
      methods:{
        changePeople(val){
          this.current = val
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
