<template>
  <div class="left2Class">
    <div id="myListChart" :style="{width: '400px', height: '200px'}"></div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "left3",
    data(){
      return {
        cityList: [],
        cityData: []
      }
    },
    created(){
      axios.get("../../../static/json/home-left-3.json").then((res)=>{
        if(res.data.success){
          this.cityList = res.data.cityList
          this.cityData = res.data.cityData
          this.drawLine();
        }
      })
    },
    mounted(){
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myListChart = this.$echarts.init(document.getElementById('myListChart'))
        var charts = { // 按顺序排列从大到小
          cityList: this.cityList,
          cityData: this.cityData
        }
        var top10CityList = charts.cityList
        var top10CityData = charts.cityData
        var color = ['rgba(26,201,234', 'rgba(134,255,183', 'rgba(26,201,234', 'rgba(134,255,183',]

        let lineY = []
        for (var i = 0; i < charts.cityList.length; i++) {
          var x = i
          if (x > color.length - 1) {
            x = color.length - 1
          }
          var data = {
            name: charts.cityList[i],
            color: color[x] + ')',
            value: top10CityData[i],
            itemStyle: {
              normal: {
                show: true,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: color[x]+ ', 0.3)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: color[x]+ ', 1)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                barBorderRadius: 10
              },
              emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                /*color:(function(){
                  return
                })*/
              }
            }
          }
          lineY.push(data)
        }

        console.log(lineY)

        // 绘制图表
        myListChart.setOption(
          {
            // backgroundColor:'#000',
            title: {
              show: false
            },
            tooltip: {
              trigger: 'item'
            },
            grid: {
              borderWidth: 0,
              top: '10%',
              left: '5%',
              right: '15%',
              bottom: '3%'
            },
            color: color,
            yAxis: [{
              type: 'category',
              inverse: true,
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false,
                inside: false
              },
              data: top10CityList
            }, {
              type: 'category',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                inside: false,
                textStyle: {
                  color: '#b3ccf8',
                  fontSize: '14',
                  fontFamily: 'PingFangSC-Regular'
                },
                formatter: function (val) {
                  return `${val}`
                }
              },
              splitArea: {
                show: false
              },
              splitLine: {
                show: false
              },
              data: top10CityData
            }],
            xAxis: {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              }
            },
            series: [{
              name: '',
              type: 'bar',
              zlevel: 2,
              barWidth: '10px',
              data: lineY,
              animationDuration: 1500,
              label: {
                normal: {
                  color: '#b3ccf8',
                  show: true,
                  position: [0, '-24px'],
                  textStyle: {
                    fontSize: 16
                  },
                  formatter: function (a, b) {
                    return a.name
                  }
                }
              }
            }],
            animationEasing: 'cubicOut'
          })
      }
    }
  }
</script>

<style scoped>
  .left2Class{
    padding-left: 12px;
  }
</style>
