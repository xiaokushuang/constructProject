<template>
    <div class="center1-1Class">
      <div class="changeBtnClass clear">
        <div  @click="handleChange('1')" class="l">实景效果</div>
        <div  @click="handleChange('2')" class="r">宣传视频</div>
      </div>
      <img v-show="showImg" src="./images/center/center-icon-2.png" alt="">
    </div>
</template>

<script>
    export default {
      data(){
        return {
          showImg:true
        }
      },
      methods:{
        handleChange(type){
          if(type=='1'){
            this.showImg = true
          }else{
            this.showImg = false
          }
        }
      }
    }
</script>

<style scoped lang="scss">
.center1-1Class{
  position: relative;
  .changeBtnClass{
    cursor: pointer;
    position: absolute;
    font-size: 14px;
    color:#fff;
    font-weight: bold;
    width: 100%;
    padding: 10px 143px;
  }
}
</style>
