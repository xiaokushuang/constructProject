<template>
  <div class="center3-class">
    <div class="clear">
      <div class="l center3-title">项目类型</div>
      <div class="l">
        <div class="allNum"></div>
      </div>
      <div class="l clear" style="width: 217px;">
        <div class="l itemClass" v-for="data in center4List">
          <div class="redClass" v-if="data.name=='停工'">{{data.num}}</div>
          <div class="yellowClass" v-if="data.name=='完工'">{{data.num}}</div>
          <div class="blueClass" v-if="data.name=='在建'">{{data.num}}</div>
          <div class="greenClass" v-if="data.name=='待建'">{{data.num}}</div>
          <div class="nameClass">{{data.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "center4",
    data(){
      return {
        center4List:[
          {
            num:"56",
            name:"停工"
          },
          {
            num:"149",
            name:"完工"
          },
          {
            num:"146",
            name:"在建"
          },
          {
            num:"211",
            name:"待建"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .center3-class{
    padding-top: 20px;
    padding-left: 37px;
  }
  .center3-title{
    font-size: 18px;
    font-weight: bold;
    color:#fff;
    writing-mode:vertical-lr;
    letter-spacing: 8px;
    margin-right: 25px;
  }
  .allNum{
    width: 75px;
    height: 75px;
    text-align: center;
    line-height: 105px;
    background: url("../../images/center/center-icon-7.png") 0 0 no-repeat;
    font-size: 22px;
    background-size: 100% 100%;
  }
  .smallTitle{
    color:#C2D8FF;
    text-align: center;
    font-size:14px;
  }
  .nameClass{
    color:#C2D8FF;
    font-size: 12px;
  }
  .redClass{
    color:#FE4545;
    font-size: 22px;
  }
  .yellowClass{
    color:#FB9A55;
    font-size: 22px;
  }
  .blueClass{
    color:#00C4FF;
    font-size: 22px;
  }
  .greenClass{
    color:#00FFB0;
    font-size: 22px;
  }
  .itemClass{
    width: 107px;
    text-align: center;
    margin-bottom: 13px;
  }
</style>
