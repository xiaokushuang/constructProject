<template>
  <div class="left2Class">
    <div id="myLineChart" :style="{width: '1300px', height: '350px'}"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "left2",
    data(){
      return {
        xData:[],
        yData:[],
        yData2:[],
      }
    },
    created(){
      axios.get("../../../static/json/hj-echart.json").then((res)=>{
        console.log('echart 请求数据',res)
        if(res.data.success){
          this.xData = res.data.xData
          this.yData = res.data.yData
          this.yData2 = res.data.yData2
          this.drawLine();
        }
      })
    },
    mounted(){

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
              max : 10,
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
            legend: {
              icon: "circle",   //  字段控制形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
              top: '5%',
              right: '15%',
              itemWidth: 10,  // 设置宽度
              itemHeight: 10, // 设置高度
              itemGap: 20, // 设置间距
              y: 'center',    //延Y轴居中
              align:'left',
              textStyle: { //图例文字的样式
                color: '#fff',
                fontSize: 12
              },
              data: ["PM2.5",'PM10'],
            },
            series: [
              {
                name:"PM2.5",
                data: this.yData,
                type: 'line',
                color:'#AC1BAD',
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
                        color: "#AC1BAD" // 0% 处的颜色
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
              },
              {
                name:'PM10',
                data: this.yData2,
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
                        color: "#1ED5B6" // 0% 处的颜色
                      }, {
                        offset: 0.7,
                        color: "rgba(172,27,173,0)" // 100% 处的颜色
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
