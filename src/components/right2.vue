<template>
  <div class="left2Class">
    <div id="myBarChart" :style="{width: '400px', height: '200px'}"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "right2",
    data(){
      return {
        barData:[]
      }
    },
    created(){
      axios.get("../../../static/json/home-right-2.json").then((res)=>{
        if(res.data.success){
          this.barData = res.data.barData
          this.drawLine();
        }
      })
    },
    mounted(){
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myBarChart = this.$echarts.init(document.getElementById('myBarChart'))
        var data = this.barData;
        var xAxisData = [];
        var seriesData1 = [];
        var sum = 0;
        var barTopColor = ["#007CF5", "#D918FD", "#007CF5", "#D918FD","#007CF5",];
        // var barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)"];
        data.forEach(item => {
          xAxisData.push(item.name);
          seriesData1.push(item.value);
          sum += item.value;
        });
        // 绘制图表
        myBarChart.setOption(
           {
            // backgroundColor: '#061326',
            title: {
              text: '',
              top:0,
              left:'center',
              textStyle:{
                color:'#fff',
                fontSize:20
              }
            },
            grid:{
              top:'0%',
              bottom:'15%'
            },
            xAxis: {
              data: xAxisData,
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                margin: 10,
                interval:0,
                align: 'center',
                /*formatter: function(params, index) {
                  return '{a|' + (seriesData1[index] / sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
                },*/
                textStyle: {
                  fontSize: 14,
                  color: '#ffffff',
                  rich: {
                    a: {
                      fontSize: 12,
                      color: '#ffffff'
                    },
                    b: {
                      height: 20,
                      fontSize: 14,
                      color: '#ffffff'
                    }
                  }
                }
              },
              interval: 0
            },
            yAxis: {
              splitLine:{
                lineStyle:{
                  type:'dashed',
                  color:'rgba(255,255,255,0.1)'
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false
              }
            },
            series: [{
              type: 'bar',
              itemStyle: {
                normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[10, 10, 3, 3],
                  color: function(params) {
                    return  barTopColor[params.dataIndex]

                  /*  return new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [{
                        offset: 1,
                        color: barTopColor[params.dataIndex]
                      },
                        {
                          offset: 0,
                          color: barBottomColor[params.dataIndex]
                        }
                      ]
                    );*/
                  },
                  opacity: 0.8
                }
              },
              z: 16,
              silent: true,
              barWidth: 10,
              barGap: '-100%', // Make series be overlap
              data: seriesData1
            }]
          }
      )
      }
    }
  }
</script>

<style scoped>
  .left2Class{
    padding-left: 12px;
  }
</style>
