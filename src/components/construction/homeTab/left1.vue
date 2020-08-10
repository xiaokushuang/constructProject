<template>
    <div class="left-1-class">
      <!--小标题-->
      <div class="border-title">
        <img src="./images/left/left-icon-1.png" alt="">
      </div>
      <!--工程-->
      <div class="clear object">
        <div class="l objectItem" v-for="data in objectLeftList1">
          <div>
            <div class="objectItem-1">{{data.name}}</div>
            <div class="objectItem-2">{{data.num}}</div>
            <div class="objectItem-3">{{data.unit}}</div>
          </div>
        </div>
      </div>
      <!--列表-->
      <div class="objectList">
        <div class="objectListItem clear" v-for="data in objectLeftList2">
           <div class="l">{{data.name}}</div>
           <div class="r">{{data.type}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
      data() {
        return {
          objectLeftList1:[],
          objectLeftList2:[],
        }
      },
    created() {
      axios.get("../../../static/homeTabJson/left-1.json").then((res) => {
        if (res.data.success) {
          this.objectLeftList1 = res.data.objectLeftList1;
          this.objectLeftList2 = res.data.objectLeftList2;
        }
      })
    },
    }
</script>

<style scoped lang="scss">
.left-1-class {
  .border-title{
    text-align: left;
    margin-bottom: 35px;
  }
  .object{
    .objectItem{
        width: 134px;
      margin-right: 15px;
      .objectItem-1{
        width: 136px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        padding-left: 30px;
        background: url("./images/left/left-icon-2.png") 0 0 no-repeat;
      }
      .objectItem-2{
        font-size: 42px;
        color:#17C7FB;
        margin-top: 10px;
      }
      .objectItem-3{
        text-align: center;
        font-size: 14px;
      }
    }
  }
  .objectList{
    font-size:14px;
    margin-top: 30px;
    padding: 0 10px;
    .objectListItem{
      padding: 10px 0;
      border-top: 1px solid #2D99FF;
    }
  }

}
</style>
