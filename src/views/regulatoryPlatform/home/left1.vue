<template>
    <div class="left1-1-class">
      <div class="title">环境监控</div>
      <el-table
        :data="tableData.slice(0,6)"
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
    export default {
        name: "left1",
      data(){
          return {
            tableData: [
              {
              name: '1哈尔滨鹤城项目',
              PM25:'4.1ug',
              PM10:'15ug',
              noise:'51dB',
              wind:'3.6km/h'
            },
              {
                name: '2哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '3哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '4哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '5哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '6哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '7哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '8哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
              {
                name: '9哈尔滨鹤城项目',
                PM25:'4.1ug',
                PM10:'15ug',
                noise:'51dB',
                wind:'3.6km/h'
              },
            ]
          }
      },
      created(){
        this.play()
      },
      methods:{
        change(){
          debugger
          //change、paly表格数据动态滚动
          this.tableData.push(this.tableData[0]);//把第一条数据插入数组最有一条
          this.tableData.shift();//删除数组中第一条数据
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
      td:nth-of-type(1) .cell{
        background: rgba(149,70,224,0.3);
      }

    }
    .title{
      font-size: 18px;
      font-weight: bold;
      text-align: right;
      padding-right: 55px;
    }
  }
</style>
