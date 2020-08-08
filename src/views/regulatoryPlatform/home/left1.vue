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
              name: '哈尔滨鹤城项目',
              PM25:'4.1ug',
              PM10:'15ug',
              noise:'51dB',
              wind:'3.6km/h'
            },
              {
                name: '哈尔滨御府工程',
                PM25:'5.1ug',
                PM10:'35ug',
                noise:'11dB',
                wind:'45.6km/h'
              },
              {
                name: '阿城宾西法阵工程',
                PM25:'3.1ug',
                PM10:'35ug',
                noise:'31dB',
                wind:'3.3km/h'
              },
              {
                name: '双城悦城国际项目',
                PM25:'4.1ug',
                PM10:'14ug',
                noise:'41dB',
                wind:'4.6km/h'
              },
              {
                name: '哈尔滨荔湾城项目',
                PM25:'5.1ug',
                PM10:'5ug',
                noise:'4dB',
                wind:'4.6km/h'
              },
              {
                name: '哈尔滨鹤城项目',
                PM25:'2.1ug',
                PM10:'7ug',
                noise:'7dB',
                wind:'6.6km/h'
              },
              {
                name: '的骄傲哈尔滨鹤城',
                PM25:'7.1ug',
                PM10:'85ug',
                noise:'56dB',
                wind:'6.6km/h'
              },
              {
                name: '案件大大鹤城项目',
                PM25:'7.1ug',
                PM10:'25ug',
                noise:'81dB',
                wind:'8.6km/h'
              },
              {
                name: '大剌剌滨鹤城项目',
                PM25:'6.1ug',
                PM10:'75ug',
                noise:'91dB',
                wind:'9.6km/h'
              },
            ]
          }
      },
      created(){
        this.play()
      },
      methods:{
        change(){
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
      td .cell{
        background: rgba(70,127,224,0.5);
      }
    }
    .el-table tr{
      td:nth-of-type(1) .cell{
        margin-right: 11PX;
        background: rgba(149,70,224,0.5);
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
