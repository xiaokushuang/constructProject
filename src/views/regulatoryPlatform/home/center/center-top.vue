<template>
    <div class="center-top-class bgColor">
      <div class="clear">
        <div class="l center-top-1">
          <center1></center1>
        </div>
        <div class="l center-top-2">
          <center2></center2>
        </div>
      </div>
    </div>
</template>

<script>
  import center1 from './center1'
  import center2 from './center2'
    export default {
        components:{
            center1,
            center2
        }
    }
</script>

<style scoped>
  .center-top-class{
    width: 868px;
  }
  .bgColor{
    background-color: rgba(11,8,40,0.7);
  }
  .center-top-1{
    width: 424px;
    height: 132px;
    margin-right: 10px;
    background: url("../../images/border/center1.png") 0 0 no-repeat;
  }
  .center-top-2{
    width: 424px;
    height: 132px;
    background: url("../../images/border/center1.png") 0 0 no-repeat;
  }
</style>
