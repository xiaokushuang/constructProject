<template>
    <div>
      <div class="clear" style="margin-top: 30px; margin-left: 20px;">
        <div v-for="data in rightList1" class="l right1-class">
          <div style="color:#fff;font-weight: bold;font-size:20px;margin-bottom:35px;">{{data.radio}}</div>
          <div style="margin-bottom:25px;width: 32px;height: 32px;">
            <img v-if="data.id=='1'" src="../../assets/right1-1.png" alt="">
            <img v-if="data.id=='2'" src="../../assets/right1-2.png" alt="">
            <img v-if="data.id=='3'" src="../../assets/right1-3.png" alt="">
            <img v-if="data.id=='4'" src="../../assets/right1-4.png" alt="">
            <img v-if="data.id=='5'" src="../../assets/right1-5.png" alt="">
          </div>
          <div style="color:#D8D8D8;font-size:14px">{{data.name}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
      data () {
        return {
          rightList1:[],
        }
      },
    created(){
      axios.get("../../../static/json/home-right-1.json").then((res)=>{
        if(res.data.success){
          this.rightList1 = res.data.rightList1
        }
      })
    },
    }
</script>

<style scoped>
  .right1-class{
    border-right: 1px solid #138DD8;
    padding-right: 22px;
    margin-right: 22px;
  }
  .right1-class:last-of-type{
    border:none
  }
</style>
