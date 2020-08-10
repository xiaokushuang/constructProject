<template>
  <div class="left2Class">
    <div id="myChart" :style="{width: '400px', height: '200px'}"></div>
  </div>
</template>

<script>
  export default {
    name: "left2",
    props:[
    ],
    data(){
      return {
      }
    },
    mounted(){
    },
    methods: {
      drawLine(dataX,dataY) {
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
              data: dataX
            },
            series: [
              {
                name: '面积模式',
                type: 'pie',
                radius: [30, 80],
                center: ['35%', '50%'],
                roseType: 'area',
                label: {
                  normal: {
                    formatter: '{c}',
                  }
                },
                //自定义颜色数组
                color:['#F1EF64','#FB9A55','#EE3E3E','#6BD98D','#78D7ED'],
                data:dataY
              }
            ]
          }
        );
      }
    },
  }
</script>

<style scoped>
  .left2Class{
    padding-left: 12px;
  }
</style>
