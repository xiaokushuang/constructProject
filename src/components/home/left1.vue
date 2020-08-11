<template>
    <div>
      <div class="clear">
        <div v-for="data in leftList1"  class="lightSmark clear l">
          <div class="l clear">
            <div class="left1-class l">
              <img v-if="data.id=='1'" style="position: relative;left: 28px;top: 17px;" src="../../assets/left1-1.png" alt="">
              <img v-if="data.id=='2'" style="position: relative;left: 28px;top: 17px;" src="../../assets/left1-2.png" alt="">
              <img v-if="data.id=='3'" style="position: relative;left: 28px;top: 17px;" src="../../assets/left1-3.png" alt="">
              <img v-if="data.id=='4'" style="position: relative;left: 28px;top: 17px;" src="../../assets/left1-4.png" alt="">
            </div>
            <div class="l" style="margin-top: 20px;margin-left:7px;">
              <div style="color:#6EFF8B;font-size:34px;text-align: center">{{data.num}}</div>
              <div style="font-size:14px;font-weight:bold;color:#fff;">{{data.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
      data(){
        return {
          leftList1:[],
        }
      },
    created(){
      axios.get("../../../static/json/home-left-1.json").then((res)=>{
        if(res.data.success){
          this.leftList1 = res.data.leftList1
        }
      })
    },
    }
</script>

<style scoped>
  .lightSmark{
    margin-bottom: 25px;
    width: 220px;
    height: 81px;
  }
  .left1-class{
    width: 79px;
    height: 64px;
    margin-top:17px;
    background: url("../../assets/left1-0.png") 0 0 no-repeat;
  }
</style>
