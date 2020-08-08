<template>
    <div class="center3-class">
      <div class="clear">
        <div class="l center3-title">汇总信息</div>
        <div class="l">
          <div class="allNum">376</div>
          <div class="smallTitle">项目总数</div>
        </div>
        <div class="l" style="padding: 0 0 0 10px;">
          <center3Echart></center3Echart>
        </div>
      </div>
    </div>
</template>

<script>
  import center3Echart from './center3-echart'
    export default {
        name: "center3",
      components:{
        center3Echart
      },
    }
</script>

<style scoped>
.center3-title{
  font-size: 18px;
  font-weight: bold;
  color:#fff;
  writing-mode:vertical-lr;
  letter-spacing: 8px;
  margin-top: 20px;
  padding-left: 25px;
}
  .allNum{
    width: 105px;
    height: 105px;
    text-align: center;
    line-height: 105px;
    background: url("../../images/center/center-icon-6.png") 0 0 no-repeat;
    font-size: 22px;
    background-size: 100% 100%;
  }
  .smallTitle{
    color:#C2D8FF;
    text-align: center;
    font-size:14px;
  }
</style>
