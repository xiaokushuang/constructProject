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
            <div style="font-size: 24px;text-align: right">{{data.num}}{{index}}</div>
            <div style="font-size: 14px;">{{data.name}}</div>
          </div>
          <div v-if="index=='0'" class="l" style="color:#25ACFF;margin-top: 28px;">|</div>
        </div>
      </div>
      <!--echart-->
      <div class="pie-echart">
        <left2Echart ref="left2EchartRef" :pieDataX="pieDataX" :pieDataY="pieDataY"></left2Echart>
      </div>
    </div>
</template>

<script>
  import left2Echart from './left2-echart'
    export default {
    components:{
      left2Echart,
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
          pieDataY:  [
            {value: 12.3, name: '北京总建'},
            {value: 16.4, name: '通州分部'},
            {value: 13.4, name: '西安总理'},
            {value: 25.7, name: '长沙总理'},
          ],
          pieDataX:['北京总建', '通州分部', '西安总理', '长沙总理',]
        }
      },
      methods:{
        changePeople(val){
          debugger;
          this.current = val
          if(val==0){
            this.pieDataY = [
              {value: 12.3, name: '北京总建'},
              {value: 16.4, name: '通州分部'},
              {value: 13.4, name: '西安总理'},
              {value: 25.7, name: '长沙总理'},
            ]
           /* this.$set(this.pieDataY[val], 'value', '1000')
            this.$set(this.pieDataY,val,this.pieDataY[val]);*/
            console.log('this.pieDataY0',this.pieDataY)
          }
          if(val==1){
            this.pieDataY = [
              {value: 37.3, name: '北京总建'},
              {value: 8.4, name: '通州分部'},
              {value: 9.4, name: '西安总理'},
              {value: 15.7, name: '长沙总理'},
            ]
            console.log('this.pieDataY1',this.pieDataY)
          }

          this.$forceUpdate()
          this.$refs.left2EchartRef.drawLine()
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
