<template>
  <div class="left2Class">
    <div id="myLineChart" :style="{width: '400px', height: '200px'}"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "right3",
    data(){
      return {
        xData:[],
        yData:[],
      }
    },
    mounted(){
    },
    created(){
      axios.get("../../../static/json/home-right-3.json").then((res)=>{
        if(res.data.success){
          this.xData = res.data.xData
          this.yData = res.data.yData
          this.drawLine();
        }
      })
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myLineChart = this.$echarts.init(document.getElementById('myLineChart'))
        // 绘制图表
        myLineChart.setOption(
          {
          xAxis: {
            type: 'category',
            axisLabel: {
              show: true,
              textStyle: {
                color: "#99A4B7",
                fontSize: 12
              }
            },
            data: this.xData
          },
          yAxis: {
            type: 'value',
            max : 8,
            min : 0,
            splitNumber : 4,
            boundaryGap : [0.7, 0.7 ],
            axisLabel: {
              interval:14,
              show: true,
              textStyle: {
                color: "#99A4B7",
                fontSize: 12
              }
            },
            splitLine:{
              lineStyle:{
                type:'dashed',
                color:'rgba(255,255,255,0.1)'
              }
            }
          },

          series: [{
            data: this.yData,
            type: 'line',
            color:'#1ED5B6',
            itemStyle:{
              normal: {
                lineStyle: {
                  width: 2,
                  type: 'solid'  //'dotted'虚线 'solid'实线
                }
              }
              },
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: "#43FFF6" // 0% 处的颜色
                  }, {
                    offset: 0.7,
                    color: "rgba(66,5,223,0)" // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              data: [{
                type: 'max',
                name: '最大值',

              },]
            },
          }]
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
