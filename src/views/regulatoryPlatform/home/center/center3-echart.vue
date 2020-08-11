<template>
  <div class="left2Class">
    <div id="myChart" :style="{width: '200px', height: '120px'}"></div>
  </div>
</template>

<script>
  export default {
    name: "left2",
    data(){
      return {
      }
    },

    mounted(){
    },
    methods: {
      drawLine(pieChartData) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        var data = pieChartData
        var titleArr= [];
        var seriesArr=[];
        var colors=[['#FB9A55', '#3360B9'],['#FB9A55', '#3360B9']]
        data.forEach(function(item, index){
          titleArr.push(
            {
              text:item.name,
              left: index * 40 + 30 +'%',
              top: '86%',
              textAlign: 'center',
              textStyle: {
                fontWeight: 'normal',
                fontSize: '14',
                color: '#C2D8FF',
                textAlign: 'center',
              },
            }
          );
          seriesArr.push(
            {
              name: item.name,
              type: 'pie',
              clockWise: false,
              radius: ['45%', '50%'],
              center: ['50%', '50%'],
              itemStyle:  {
                normal: {
                  color: colors[index][0],
                  shadowColor: colors[index][0],
                  shadowBlur: 0,
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  },
                }
              },
              hoverAnimation: false,
              center: [index * 40 + 30 +'%', '50%'],
              data: [{
                value: item.value,
                label: {
                  normal: {
                    formatter: function(params){
                      return params.value;
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                      fontSize: '22',
                      fontWeight: 'bold',
                      color: '#fff'
                    }
                  }
                },
              }, {
                value: 100-item.value,
                name: 'invisible',
                itemStyle: {
                  normal: {
                    color: colors[index][1]
                  },
                  emphasis: {
                    color: colors[index][1]
                  }
                }
              }]
            }
          )
        });
        myChart.setOption(
          {
            title:titleArr,
            series: seriesArr
          }
        );
      }
    }
  }
</script>

<style scoped>
  .left2Class{
  }
</style>
