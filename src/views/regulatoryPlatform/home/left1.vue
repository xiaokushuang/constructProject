<template>
    <div class="left1-1-class">
      <div class="title">环境监控</div>
      <el-table
        :data="left1List.slice(0,6)"
        style="width: 100%">
        <el-table-column
          prop="name"
          label=""
          width="150"
          >
        </el-table-column>
        <el-table-column
          prop="PM25"
          label="PM2.5"
          >
        </el-table-column>
        <el-table-column
          prop="PM10"
          label="PM10">
        </el-table-column>
        <el-table-column
          prop="noise"
          label="噪音">
        </el-table-column>
        <el-table-column
          prop="wind"
          label="风力">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "left1",
      data(){
          return {
            left1List: []
          }
      },
    created() {
      axios.get("../../../static/regulatoryPlatform/left-1.json").then((res) => {
        if (res.data.success) {
            this.left1List = res.data.left1List
            this.play()
        }
      })
    },
      methods:{
        change(){
          //change、paly表格数据动态滚动
          this.left1List.push(this.left1List[0]);//把第一条数据插入数组最有一条
          this.left1List.shift();//删除数组中第一条数据
        },
        play(){
          setInterval(this.change, 3000);//每两秒执行一次插入删除操作
        }
      },
    }
</script>

<style lang="scss">
  .left1-1-class{
    /*element table 重置*/
    .el-table td,
    .el-table th.is-leaf {
      border:none;
    }
    .el-table td,
    .el-table th {
      padding: 3px 0;
    }
    .el-table,
    .el-table__expanded-cell {
      background: none;
    }
    .el-table th, .el-table tr {
      background:none;
    }
    .el-table--enable-row-hover .el-table__body tr:hover>td {
      background:none;
    }
    .el-table .cell {
      color: #fff;
      font-size: 12px;
    }
    .el-table th .cell {
      color: #BBFAFF;
      font-size: 14px;
    }
    .el-table tr{
      td .cell{
        background: rgba(70,127,224,0.3);
      }
    }
    .el-table tr{
      td:nth-of-type(1) .cell{
        margin-right: 11PX;
        background: rgba(149,70,224,0.3);
      }
    }
    .el-table::before {
      height: 0px;
    }
    .title{
      font-size: 18px;
      font-weight: bold;
      text-align: right;
      padding-right: 55px;
    }
  }
</style>
