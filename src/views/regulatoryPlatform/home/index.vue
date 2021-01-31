<template>
    <div class="indexClass">
      <newMap class="" style="position: absolute;"></newMap>
      <!--头部header-->
      <div >
        <header class="headerClass">
          <div class="clear">
            <div class="l leftHeader">
              <span><img src="../images/center/nav-1.png" alt=""></span>
              <span><img src="../images/center/nav-3.png" alt=""></span>
              <span><img src="../images/center/nav-2.png" alt=""></span>
              <span><img src="../images/center/nav-3.png" alt=""></span>
              <span>总值班：张三</span>
              <span>值班经理：张三</span>
            </div>
            <div class="l" style="width: calc(100% - 1000px);height: 117px;font-size:38px;font-weight: bold;text-align: center;line-height: 117px;">
              黑龙江省建设工程质量安全信息化监管平台
            </div>
            <div class="l leftHeader" style="padding-left: 165px;">
              <span>2020.02.26</span>
              <span>12：34：09</span>
              <span><img src="../images/center/nav-3.png" alt=""></span>
              <span><img src="../images/center/nav-4.png" alt=""></span>
              <span>微风</span>
              <span>中雨</span>
            </div>
          </div>
        </header>
        <!--内容-->
        <div class="contentClass">
          <div class="clear">
            <!--左侧内容-->
            <div class="l leftAll bgColor">
              <transition appear name="moveL">
                  <div class="left1-class">
                <left1></left1>
              </div>
              </transition>
              <transition appear name="moveL">
                <div class="left2-class">
                  <left2></left2>
                </div>
              </transition>
              <transition appear name="moveL">
                <div class="left3-class">
                  <left3></left3>
                </div>
              </transition>
              <transition appear name="moveL">
                <div class="left4-class">
                  <left4></left4>
                </div>
              </transition>
            </div>
            <!--中间内容-->
            <div class="l centerAll">
              <transition appear name="moveT">
                <centerTop style="position: absolute;top: 130px;left: 532px;"></centerTop>
              </transition>
              <transition appear name="moveB">
                <centerbottom style="position: absolute;bottom: 10px;left: 532px;"></centerbottom>
              </transition>
            </div>
            <!--右侧内容-->
            <div class="l rightAll bgColor">
              <transition appear name="moveR">
                <div class="right1-class">
                  <right1></right1>
                </div>
              </transition>
              <transition appear name="moveR">
                <div class="right2-class">
                  <right2></right2>
                </div>
              </transition>
              <transition appear name="moveR">
                <div class="right3-class">
                  <right3></right3>
                </div>
              </transition>
              <transition appear name="moveR">
                <div class="right4-class">
                  <right4></right4>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import newMap from './newMap'
  import left1 from './left1'
  import left2 from './left2'
  import left3 from './left3'
  import left4 from './left4'
  import right1 from './right1'
  import right2 from './right2'
  import right3 from './right3'
  import right4 from './right4'
  import centerTop from './center/center-top'
  import centerbottom from './center/center-bottom'
    export default {
        name: "index",
      data(){
       return {
       }
      },
        components:{
          newMap,
          left1,
          left2,
          left3,
          left4,
          right1,
          right2,
          right3,
          right4,
          centerTop,
          centerbottom
        },
    }
</script>

<style scoped>
  /*左侧动画*/
  .moveL-enter-active,
  .moveL-leave-active {
    transition: all 1s linear;
    transform: translateX(0%);
  }
  .moveL-enter,
  .moveL-leave {
    transform: translateX(-100%);
  }
  .moveL-leave-to {
    transform: translateX(-100%);
  }
  /*右侧动画*/
  .moveR-enter-active,  .moveR-leave-active {
    transition: all 1s linear;
    transform: translateX(0);
  }
  .moveR-enter,  .moveR-leave {
    transform: translateX(100%);
  }
  .moveR-leave-to{
    transform: translateX(100%);
  }
  /*上侧动画*/
  .moveT-enter-active,
  .moveT-leave-active {
    transition: all 1s linear;
    transform: translateY(0%);
  }
  .moveT-enter,
  .moveT-leave {
    transform: translateY(-100%);
  }
  .moveT-leave-to {
    transform: translateY(-100%);
  }
  /*下侧动画*/
  .moveB-enter-active,  .moveB-leave-active {
    transition: all 1s linear;
    transform: translateY(0);
  }
  .moveB-enter,  .moveB-leave {
    transform: translateY(100%);
  }
  .moveB-leave-to{
    transform: translateY(100%);
  }
  .bgColor{
    background-color: rgba(11,8,40,0.7);
  }
  .indexClass{
    background: url("../images/border/bg.png") 0 0 no-repeat;
    height: 1123px;
    position: relative;
  }
.headerClass{
  position: absolute;
  width: 1919px;
  height: 117px;
  background: url("../images/border/title.png") no-repeat;
}
.leftHeader{
  width: 500px;
  height: 117px;
  padding:24px 0 0 44px;
  font-size: 14px;
  color:#C2D8FF
}
  .leftHeader span{
    display: inline-block;
    margin-right: 12px;
  }
.contentClass{
  background: url("../images/border/bg-2.png") no-repeat;
  width: 100%;
  height: 937px;
  padding: 20px;
  background-size: 100% 100%;
}
  .mapContentClass{
    background: url("../images/border/bg-2.png") no-repeat;
    width: 100%;
    height: 937px;
    padding: 20px;
    background-size: 100% 100%;
  }
  .leftAll{
    width: 497px;
    position: absolute;
    left: 25px;
    top: 101px;
  }
  .centerAll{
    width: 868px;
    height: 1041px;
  }
  .rightAll{
    width: 497px;
    position: absolute;
    right: 25px;
    top: 101px;
  }
  .left1-class{
    width: 496px;
    height: 252px;
    background: url("../images/border/left1.png") no-repeat;
    margin-bottom: 10px;
    padding:10px;
  }
  .left2-class{
    width: 496px;
    height: 238px;
    background: url("../images/border/left2.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
    padding:10px;
  }
  .left3-class{
    width: 496px;
    height: 238px;
    background: url("../images/border/left3.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
    padding:10px;
  }
  .left4-class{
    width: 496px;
    height: 252px;
    background: url("../images/border/left4.png") no-repeat;
    margin-bottom: 10px;
    padding:10px;
  }
  .right1-class{
    width: 496px;
    height: 252px;
    background: url("../images/border/right1.png") no-repeat;
    margin-bottom: 10px;
    padding:10px;
  }
  .right2-class{
    width: 496px;
    height: 238px;
    background: url("../images/border/right2.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
    padding:10px;
  }
  .right3-class{
    width: 496px;
    height: 238px;
    background: url("../images/border/right3.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
    padding:10px;
  }
  .right4-class{
    width: 496px;
    height: 252px;
    background: url("../images/border/right4.png") no-repeat;
    margin-bottom: 10px;
    padding:10px;
  }
</style>
