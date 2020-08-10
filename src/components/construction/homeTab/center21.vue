<template>
<div style="padding-top:30px">
    <div class="center-2-1-block-1">
        <span>在建</span>
    </div><br>
    <div class="center-2-1-block-2">
        <span>项目状态</span>
    </div>

    <div class="lineClass">
      <div class="lineBorder"></div>
      <div class="clear" style="position: relative;top: -12px;">
        <div class="l" v-for="data in lineList" style="width: 33%;text-align: center;">
          <!--type值为1，代表当前高亮节点-->
          <div v-if="data.type=='1'" style="width: 15px;height: 15px;margin: auto;">
            <div  class="highLightPoint"></div>
          </div>
          <!--type值为0，代表普通节点-->
          <div v-else style="width: 15px;height: 15px;margin: auto;">
            <div class="normalPoint"></div>
          </div>
          <div style="font-size: 12px;line-height: 28px">{{data.name}}</div>
        </div>
      </div>

    </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'center22',
    data() {
        return {
          lineList:[],
        }
    },
    created() {
      axios.get("../../../static/homeTabJson/center-2-1.json").then((res) => {
        if (res.data.success) {
          this.lineList = res.data.lineList;
        }
      })
    },
}
</script>

<style scoped lang="scss">
progress::-webkit-progress-bar {
    background-color: #17265a;
    border-radius: 0.2rem;
}

progress::-webkit-progress-value {
    background-image: linear-gradient(to right, rgb(17, 62, 142), rgb(30, 206, 245));
    border-radius: 2rem;

}

progress {
    width: 262px;
    height: 9px;
    border-radius: 0.1rem;
}

.center-2-1-block-1 {
    height: 44px;
    color: #cef4ff;
    font-family: Impact;
    font-size: 36px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 44px;
    text-align: center;
    display: inline-block;
}

.center-2-1-block-2 {
    height: 18px;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    /*text-align: center;*/
    display: inline-block;
}

.lineClass {
    position: relative;
    width: 358px;
    padding-top:32px;
    margin: auto;
  .highLightPoint{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: auto;
    background: #18DBFD;
  }
  .normalPoint{
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin: auto;
    background: #979797;
    position: relative;
    top: 3px;
  }
  .lineBorder{
    width: 253px;
    height: 9px;
    background: #17265A;
    border-radius: 5px;
    position: relative;
    left: 48px;
  }
}
</style>
