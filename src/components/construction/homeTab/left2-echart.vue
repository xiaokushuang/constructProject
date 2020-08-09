<template>
  <div class="left2Class">
    <div id="myChart" :style="{width: '300px', height: '100px'}"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "left2",
    data(){
      return {
        pieDataY: [],
        pieDataX:[]
       /* pieDataY: ["房屋建筑工程", "市政公路工程", "机电安装工程", "公共建筑", "化工石油工程"],
        pieDataX:[
          {value: 30, name: "房屋建筑工程"},
          {value: 36, name: "市政公路工程"},
          {value: 21, name: "机电安装工程"},
          {value: 5, name: "公共建筑"},
          {value: 8, name: "化工石油工程"}
        ]*/
      }
    },
    created(){
      axios.get("../../../static/json/home-left-2.json").then((res)=>{
        if(res.data.success){
          this.pieDataY = res.data.pieDataY
          this.pieDataX = res.data.pieDataX
          this.drawLine();
        }
      })
    },
    mounted(){
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption(
          {
            title: {
              text: '',
              subtext: '',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
        /*    legend: {
              left: 'center',
              top: 'bottom',
              data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },*/
            legend: {
              icon: "circle",   //  字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
              itemWidth: 10,  // 设置宽度
              itemHeight: 10, // 设置高度
              itemGap: 20, // 设置间距
              orient: 'vertical',  //垂直显示
              y: 'center',    //延Y轴居中
              x: 'right', //居右显示
              align:'left',
              textStyle: { //图例文字的样式
                color: '#fff',
                fontSize: 12
              },
              data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            toolbox: {
              show: true,
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            series: [
              {
                name: '面积模式',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                  {value: 10, name: 'rose1'},
                  {value: 5, name: 'rose2'},
                  {value: 15, name: 'rose3'},
                  {value: 25, name: 'rose4'},
                  {value: 20, name: 'rose5'},
                  {value: 35, name: 'rose6'},
                  {value: 30, name: 'rose7'},
                  {value: 40, name: 'rose8'}
                ]
              }
            ]
          }
        );
      }
    }
  }
</script>

<style scoped>
  .left2Class{
    padding-left: 12px;
  }
</style>
