<template>
  <div class="left2Class">
    <div id="myChart" :style="{width: '230px', height: '120px'}"></div>
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
        var placeHolderStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0
          },
          emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0
          }
        };


        var dataStyle = {
          normal: {
            formatter: '{c}%',
            position: 'center',
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'normal',
              color: '#fff'
            }
          }
        };
        myChart.setOption(
          {
            // backgroundColor: '#29509E',
            title: [{
              text: '重大工程',
              left: '29.8%',
              top: '85%',
              textAlign: 'center',
              textStyle: {
                fontWeight: 'normal',
                fontSize: '14',
                color: '#C2D8FF',
                textAlign: 'center',
              },
            }, {
              text: '重点工程',
              left: '70%',
              top: '85%',
              textAlign: 'center',
              textStyle: {
                color: '#C2D8FF',
                fontWeight: 'normal',
                fontSize: '14',
                textAlign: 'center',
              },
            }],

            //第一个图表
            series: [{
              type: 'pie',
              hoverAnimation: false, //鼠标经过的特效
              radius: ['55%', '60%'],
              center: ['30%', '50%'],
              startAngle: 425,
              labelLine: {
                normal: {
                  show: false
                }
              },
              label: {
                normal: {
                  position: 'center'
                }
              },
              data: [{
                value: 100,
                itemStyle: {
                  normal: {
                    color: '#3360B9'
                  }
                },
              }, {
                value: 35,
                itemStyle: placeHolderStyle,
              },

              ]
            },
              //上层环形配置
              {
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['55%', '60%'],
                center: ['30%', '50%'],
                startAngle: 225,
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                label: {
                  normal: {
                    position: 'center'
                  }
                },
                data: [{
                  value: 75,
                  itemStyle: {
                    normal: {
                      color: '#FB9A55'
                    }
                  },
                  label: dataStyle,
                }, {
                  value: 35,
                  itemStyle: placeHolderStyle,
                },

                ]
              },


              //第二个图表
              {
                type: 'pie',
                hoverAnimation: false,
                radius: ['55%', '60%'],
                center: ['70%', '50%'],
                startAngle: 225,
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                label: {
                  normal: {
                    position: 'center'
                  }
                },
                data: [{
                  value: 100,
                  itemStyle: {
                    normal: {
                      color: '#3360B9'


                    }
                  },

                }, {
                  value: 35,
                  itemStyle: placeHolderStyle,
                },

                ]
              },

              //上层环形配置
              {
                type: 'pie',
                hoverAnimation: false,
                radius: ['55%', '60%'],
                center: ['70%', '50%'],
                startAngle: 225,
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                label: {
                  normal: {
                    position: 'center'
                  }
                },
                data: [{
                  value: 30,
                  itemStyle: {
                    normal: {
                      color: '#FB9A55'
                    }
                  },
                  label: dataStyle,
                }, {
                  value: 55,
                  itemStyle: placeHolderStyle,
                },

                ]
              },
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
