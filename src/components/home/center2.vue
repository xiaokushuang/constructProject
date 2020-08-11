<template>
    <div>
      <div class="clear">
        <div class="l">
          <div style="margin-right: 105px;" class="centerBottom-circle">
            <div class="centerBottom-circle-text">
              {{num1}} <span style="font-size:14px">%</span>
            </div>
          </div>
          <p class="centerBottom-circle-text1">安监抽查通过率</p>
        </div>
        <div class="l">
          <div style="margin-right: 105px;" class="centerBottom-circle-1">
            <div class="centerBottom-circle-text">
              {{num2}} <span style="font-size:14px">%</span>
            </div>
          </div>
          <p class="centerBottom-circle-text1">企业检查通过率</p>
        </div>
        <div class="l">
          <div class="centerBottom-circle ">
            <div class="centerBottom-circle-text">
              {{num3}} <span style="font-size:14px">%</span>
            </div>
          </div>
          <p class="centerBottom-circle-text1">项目自查通过率</p>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
        name: "center2",
      data(){
          return {
            num1:'',
            num2:'',
            num3:''
          }
      },
    created(){
      axios.get("../../../static/json/home-center-2.json").then((res)=>{
        if(res.data.success){
          this.num1 = res.data.num1
          this.num2 = res.data.num2
          this.num3 = res.data.num3
        }
      })
    },
    }
</script>

<style scoped>
  .centerBottom-circle{
    width: 159px;
    height: 159px;
    line-height: 159px;
    background: url("../../assets/center2-0.png") 0 0 no-repeat,
    url("../../assets/center2-1.png") 0px 0 no-repeat;
    background-position: center;
  }
  .centerBottom-circle-1{
    width: 159px;
    height: 159px;
    line-height: 159px;
    background: url("../../assets/center2-2.png") 0 0 no-repeat,
    url("../../assets/center2-1.png") 0px 0 no-repeat;
    background-position: center;
  }
  .centerBottom-circle-text{
    color: #fff;
    font-size: 28.5px;
    text-align: center;
  }
  .centerBottom-circle-text1{
    color: #fff;
    font-size: 16px;
    padding-left: 31px;
  }
</style>
