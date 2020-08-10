<template>
  <div class="center-bottom-class bgColor">
    <div class="clear">
      <div class="l center-top-3">
        <center3></center3>
      </div>
      <div class="l center-top-4">
        <center4></center4>
      </div>
    </div>
    <div class="center-top-5">
      <center5></center5>
    </div>
  </div>
</template>

<script>
  import center3 from './center3'
  import center4 from './center4'
  import center5 from './center5'
  export default {
    components:{
      center3,
      center4,
      center5,
    }
  }
</script>

<style scoped>
  .center-bottom-class{
    width: 868px;
  }
  .bgColor{
    background-color: rgba(11,8,40,0.7);
  }
  .center-top-3{
    width: 424px;
    height: 132px;
    margin-right: 10px;
    background: url("../../images/border/center1.png") 0 0 no-repeat;
  }
  .center-top-4{
    width: 424px;
    height: 132px;
    background: url("../../images/border/center1.png") 0 0 no-repeat;
  }
  .center-top-5{
    width: 860px;
    height: 191px;
    margin-top: 10px;
    background: url("../../images/border/center2.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
</style>
