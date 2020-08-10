<template>
    <div class="environment5Class">
      <div class="clear">
       <!--左面部分-->
        <div class="l">
          <!--左1-->
          <div style="position: relative">
            <div style="position: absolute;left: 15px;top: 15px;">
              <img src="../../../assets/hj-left1-title.png" alt="">
            </div>
            <div class="hj-left1 clear">
              <!--左1-1-->
              <div class="l" style="width:450px">
                <div class="l left1-block" v-for="data in leftList1">
                  <div class="clear">
                    <div class="l">
                      <div class="hj-left1-1">
                        <img v-if="data.name=='PM10'" style="position:relative; top:10px;" width="48" height="48" src="../../../assets/hj-left-block1-1.png" alt="">
                        <img v-if="data.name=='PM2.5'" style="position:relative; top:10px;" width="48" height="48" src="../../../assets/hj-left-block1-2.png" alt="">
                        <img v-if="data.name=='温度'" style="position:relative; top:10px;" width="48" height="48" src="../../../assets/hj-left-block1-3.png" alt="">
                        <img v-if="data.name=='湿度'" style="position:relative; top:10px;" width="48" height="48" src="../../../assets/hj-left-block1-4.png" alt="">
                      </div>
                      <div style="text-align: center">{{data.name}}</div>
                    </div>
                    <div class="l">
                      <div style="color:#03EAFF;font-size:36px; width: 80px;height: 64px;text-align: center">{{data.num}}</div>
                      <div style="text-align: center">{{data.unit}}</div>
                    </div>
                  </div>
                </div>
                <div style="position: absolute;top: 277px;"><img src="../../../assets/hj-left-block.png" alt=""></div>
              </div>
              <!--左1-2-->
              <div class="l" style="margin-right: 50px;">
                <img src="../../../assets/hj-left-circle.png" alt="">
              </div>
              <!--左1-3-->
              <div class="l" style="width:450px">
                <div class="l left1-block" v-for="data in leftList3">
                  <div class="clear">
                    <div class="l">
                      <div class="hj-left1-1">
                        <img v-if="data.name=='风向'" style="position:relative; top:20px" src="../../../assets/hj-left-block3-1.png" alt="">
                        <img v-if="data.name=='风速'" style="position:relative; top:20px" src="../../../assets/hj-left-block3-2.png" alt="">
                        <img v-if="data.name=='噪音'" style="position:relative; top:10px" src="../../../assets/hj-left-block3-3.png" alt="">
                        <img v-if="data.name=='扬尘'" style="position:relative; top:20px" src="../../../assets/hj-left-block3-4.png" alt="">
                      </div>
                      <div style="text-align: center">{{data.name}}</div>
                    </div>
                    <div class="l">
                      <div style="color:#03EAFF;font-size:36px; width: 80px;height: 64px;text-align: center">{{data.num}}</div>
                      <div style="text-align: center">{{data.unit}}</div>
                    </div>
                  </div>
                </div>
                <div style="position: absolute;top: 277px;"><img src="../../../assets/hj-left-block1.png" alt=""></div>
              </div>
            </div>
          </div>
          <!--左2-->
          <div class="hj-left2">
            <div style="position: relative">
              <div style="position: absolute;left: 15px;top: 15px;">
                <img src="../../../assets/hj-left2-title.png" alt="">
              </div>
              <left2></left2>
            </div>
          </div>
        </div>
        <!--右面部分-->
        <div class="l">
          <div class="hj-right1">
            <div style="position: relative">
              <div style="position: absolute;left: 15px;top: 15px;">
                <img src="../../../assets/hj-left3-title.png" alt="">
              </div>
              <div class="clear" style="padding:100px 40px;padding-right: 0;">
                <div class="l" style="margin-right: 80px;" v-for="data in rightList1">
                  <div style="color:#03EAFF;font-size:36px;text-align: center">{{data.num}}</div>
                  <div style="text-align: center">{{data.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="hj-right2">
            <div style="position: relative">
              <div style="position: absolute;left: 15px;top: 15px;">
                <img src="../../../assets/hj-left4-title.png" alt="">
              </div>
              <div class="clear" style="padding:100px 40px;padding-right: 0;">
                <div class="l" style="margin-right: 80px;">
                  <div style="color:#39FA8A;font-size:36px;text-align: center">26</div>
                  <div style="text-align: center">在线</div>
                </div>
                <div class="r" style="margin-right: 80px;">
                  <div style="color:#FF6B2F;font-size:36px;text-align: center">3</div>
                  <div style="text-align: center">离线</div>
                </div>
              </div>
            </div>
          </div>
          <div class="hj-right3">
            <div style="position: relative">
              <div style="position: absolute;left: 15px;top: 15px;">
                <img src="../../../assets/hj-left5-title.png" alt="">
              </div>
              <div class="clear" style="padding:90px 10px;">
                <div class="l right3-block" v-for="data in rightList3">
                  <div>{{data.name}}</div>
                  <div style="background: rgba(70,127,224,0.2)">{{data.num1}}</div>
                  <div>{{data.num2}}</div>
                  <div style="background: rgba(70,127,224,0.2)">{{data.num3}}</div>
                  <div>{{data.num4}}</div>
                  <div style="background: rgba(70,127,224,0.2)">{{data.num5}}</div>
                  <div>{{data.num6}}</div>
                  <div style="background: rgba(70,127,224,0.2)">{{data.num7}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import left2 from './hj-left2'
    export default {
        name: "environment5",
      components:{
        left2
      },
        data(){
            return {
              leftList1:[],
              leftList3:[],
              rightList1:[],
              rightList2:[],
              rightList3:[],
            }
        },
      created(){
        axios.get("../../../static/json/hj.json").then((res)=>{
          if(res.data.success){
            this.leftList1 = res.data.leftList1
            this.leftList3 = res.data.leftList3
            this.rightList1 = res.data.rightList1
            this.rightList2 = res.data.rightList2
            this.rightList3 = res.data.rightList3
          }
        })
      },
    }
</script>

<style scoped>
  .environment5Class{
    padding:10px 25px;
  }
  .hj-left1{
    width: 1315px;
    height: 503px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 25px;
    padding-top: 150px;
    background: url("../../../assets/hj-left1-bg.png") 0 0 no-repeat;
    font-size: 14px;
    color:#fff;
    position: relative;
  }
  .hj-left2{
    width: 1315px;
    height: 362px;
    background: url("../../../assets/hj-left1-2.png") 0 0 no-repeat;
  }
  .hj-right1{
    width: 488px;
    height: 242px;
    margin-bottom: 19px;
    background: url("../../../assets/hj-right1-bg.png") 0 0 no-repeat;
  }
  .hj-right2{
    background: url("../../../assets/hj-right1-bg.png") 0 0 no-repeat;
    width: 488px;
    height: 242px;
    margin-bottom: 10px;
  }
  .hj-right3{
    background: url("../../../assets/hj-right3-bg.png") 0 0 no-repeat;
    width: 488px;
    height: 360px;
  }
  .hj-left1-1{
    width: 80px;
    height: 64px;
    background: url("../../../assets/hj-left-block1-0.png") 0px 0 no-repeat;
    background-size: 100% 100%;
    background-position: center;
    text-align: center;
  }
  .left1-block{
    margin-right: 40px;
    margin-bottom: 130px;
  }
  .right3-block{
    width: 110px;
  }
  .right3-block div{
    padding:7px 8px;
    text-align: right;
    height: 30px;
  }
</style>
