<template>
  <div class="visualizationClass">
    <!--导航栏头部-->
    <div class="navClass">南部新城智慧工地监管平台</div>
   <!--内容部分-->
    <div style="padding: 0 15px;">
      <div class="contentClass clear" style="padding-top:30px">
        <!--左边部分-->
        <div class="left l ">
          <!--左1-->
            <div class="smallBlock">
              <div class="titleClass">项目总框</div>
              <div class="clear">
                <div v-for="data in leftList1"  class="lightSmark clear l">
                  <div class="l clear">
                    <div class="left1-class l">
                      <img style="position: relative;left: 28px;top: 17px;" :src="data.src" alt="">
                    </div>
                    <div class="l" style="margin-top: 20px;margin-left:7px;">
                      <div style="color:#6EFF8B;font-size:34px;text-align: center">{{data.num}}</div>
                      <div style="font-size:14px;font-weight:bold;color:#fff;">{{data.name}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <!--左2-->
            <div class="smallBlock">
              <div class="titleClass">项目类型</div>
              <left2></left2>
            </div>
          <!--左3-->
            <div class="smallBlock">
              <div class="titleClass">人民教育情况</div>
              <left3></left3>
            </div>
        </div>
       <!--中间部分-->
        <div class="center l" style="padding: 0 10px;">
          <!--中间地图-->
          <div class="centerTop">
            <map-self></map-self>
          </div>
          <!--安全检查情况-->
          <div class="centerBottom">
            <div class="titleClass1">安全检查情况</div>
            <div class="clear">
              <div class="l">
                <div style="margin-right: 105px;" class="centerBottom-circle">
                  <div class="centerBottom-circle-text">
                    32 <span style="font-size:14px">%</span>
                  </div>
                </div>
                <p class="centerBottom-circle-text1">安监抽查通过率</p>
              </div>
              <div class="l">
                <div style="margin-right: 105px;" class="centerBottom-circle-1">
                  <div class="centerBottom-circle-text">
                    96 <span style="font-size:14px">%</span>
                  </div>
                </div>
                <p class="centerBottom-circle-text1">企业检查通过率</p>
              </div>
              <div class="l">
                <div class="centerBottom-circle ">
                  <div class="centerBottom-circle-text">
                    98 <span style="font-size:14px">%</span>
                  </div>
                </div>
                <p class="centerBottom-circle-text1">项目自查通过率</p>
              </div>
            </div>
          </div>
        </div>
        <!--右侧部分-->
        <div class="right l">
          <!--右1-->
          <div class="smallBlock1">
            <div>
              <div class="titleClass" style="padding-left: 258px;">设备在线率</div>
              <div class="clear" style="margin-top: 30px; margin-left: 20px;">
                <div v-for="data in rightList1" class="l right1-class">
                  <div style="color:#fff;font-weight: bold;font-size:20px;margin-bottom:35px;">{{data.radio}}</div>
                  <div style="margin-bottom:25px;width: 32px;height: 32px;"><img :src="data.src" alt=""></div>
                  <div style="color:#D8D8D8;font-size:14px">{{data.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <!--右2-->
          <div class="smallBlock1">
            <div>
              <div class="titleClass" style="padding-left: 220px;">管理人员出勤率</div>
              <right2></right2>
            </div>
          </div>
          <!--右3-->
          <div class="smallBlock1">
            <div>
              <div class="titleClass" style="padding-left: 200px;">项目告警动态监控</div>
              <div style="padding-right: 55px;">
                <div class="clear">
                  <!--扬尘警告和噪声警告-->
                  <div class="l">
                    <div style="border:1px solid #2CD4FF;border-radius:5px;padding:5px 7px">
                      <span style="color:#2CD6FF">扬尘警告</span>
                      <span style="color:#207DB9">噪声警告</span>
                    </div>
                  </div>
                  <!--今日&&本周-->
                  <div style="margin-top: 20px;" class="r">
                    <div>
                      <span style="color:#2CD6FF">今日</span>
                      <span style="color:#2CD6FF">|</span>
                      <span style="color:#207DB9">本周</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <right3></right3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mapSelf from './newMap'
  import left2 from './left2'
  import left3 from './left3'
  import right2 from './right2'
  import right3 from './right3'
export default {
  name: 'HelloWorld',
  components:{
    mapSelf,
    left2,
    left3,
    right2,
    right3
  },
  data () {
    return {
      leftList1:[
        {
          src:require('../../assets/left1-1.png'),
          num:'8',
          name:'项目总数'
        },
        {
          src:require('../../assets/left1-2.png'),
          num:'15',
          name:'建筑体量(万m²)'
        },
        {
          src:require('../../assets/left1-3.png'),
          num:'290',
          name:'在册员工数'
        },
        {
          src:require('../../assets/left1-4.png'),
          num:'342',
          name:'测接入设备'
        }
      ],
      rightList1:[
        {
          radio:'89%',
          src:require('../../assets/right1-1.png'),
          name:'扬尘'
        },
        {
          radio:'94%',
          src:require('../../assets/right1-2.png'),
          name:'摄像头'
        },
        {
          radio:'84%',
          src:require('../../assets/right1-3.png'),
          name:'塔吊'
        },
        {
          radio:'97%',
          src:require('../../assets/right1-4.png'),
          name:'升降机'
        },
        {
          radio:'82%',
          src:require('../../assets/right1-5.png'),
          name:'卸料机'
        },
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .visualizationClass{
    background: url("../../assets/bg1.png") 0 0 no-repeat,
    url("../../assets/bg2.png") 0px 0 no-repeat;
    height: 1080px;
  }
  .navClass{
    text-align: center;
    font-size: 36px;
    line-height: 91px;
    color: #fff;
    width: 100%;
    height: 91px;
    background: url("../../assets/nav.png") 0 0 no-repeat;
  }
  .contentClass{
    width: 100%;
    background: url("../../assets/bg3.png") 0 0 no-repeat;
    background-size: 100% 100%;
    padding: 25px;
  }
  .smallBlock{
    width: 487px;
    height: 279px;
    padding-left: 34px;
    background: url("../../assets/left1.png") 0 0 no-repeat;
    background-size: cover;
    margin-bottom: 20px;
  }
  .smallBlock1{
    width: 487px;
    height: 279px;
    padding-left: 34px;
    background: url("../../assets/right1-0.png") 0 0 no-repeat;
    background-size: cover;
    margin-bottom: 20px;
  }
  .titleClass{
    color:#B5DEFF;
    font-size:20px;
    font-weight: bold;
    padding-left: 64px;
    padding-top: 18px;
  }
  .titleClass1{
    text-align: left;
    color: #B5DEFF;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
    margin-bottom: 19px;
  }
  .left1-class{
    width: 79px;
    height: 64px;
    margin-top:17px;
    background: url("../../assets/left1-0.png") 0 0 no-repeat;
  }
  .lightSmark{
    margin-bottom: 25px;
    width: 220px;
    height: 81px;
  }
  .centerTop{
    width: 815px;
    height: 588px;
    background: url("../../assets/center1.png") 0 0 no-repeat;
    background-size: cover;
    margin-bottom: 10px;
    padding:15px;
  }
  .centerBottom{
    width: 815px;
    height: 279px;
    padding: 60px;
    padding-top: 0;
    background: url("../../assets/center2.png") 0 0 no-repeat;
    background-size: cover;
  }
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
  .right1-class{
    border-right: 1px solid #138DD8;
    padding-right: 22px;
    margin-right: 22px;
  }
  .right1-class:last-of-type{
    border:none
  }
</style>

