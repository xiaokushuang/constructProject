<template>
    <div class="left-1-class">
      <!--小标题-->
      <div class="border-title">
        <img src="./images/left/left-icon-1.png" alt="">
      </div>
      <!--工程-->
      <div class="clear object">
        <div class="l objectItem" v-for="data in [1,2,3]">
          <div>
            <div class="objectItem-1">工程层数</div>
            <div class="objectItem-2">+20/-3</div>
            <div class="objectItem-3">层</div>
          </div>
        </div>
      </div>
      <!--列表-->
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
.left-1-class {
  .border-title{
    text-align: left;
    margin-bottom: 20px;
  }
  .object{
    .objectItem{
        width: 136px;
      margin-right: 15px;
      .objectItem-1{
        background: url("./images/left/left-icon-2.png") 0 0 no-repeat;
      }
      .objectItem-2{

      }
      .objectItem-3{

      }
    }
  }

}
</style>
