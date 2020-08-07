<template>
    <div class="left2Class">
      <div id="myChart" :style="{width: '160px', height: '160px'}"></div>
    </div>
</template>

<script>
    export default {
        name: "vi-left1",
      data(){
          return {
            pieDataY: [
              {value: 30, name: '房屋建筑工程'},
              {value: 36, name: '市政公路工程'},
              {value: 21, name: '机电安装工程'},
              {value: 5, name: '公共建筑'},
              {value: 8, name: '化工石油工程'}
            ],
            pieDataX:['房屋建筑工程', '市政公路工程', '机电安装工程', '公共建筑', '化工石油工程']
          }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title:{
              x:'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{c}%'
            },
            // backgroundColor:'#111c3b',
            itemStyle:{
              borderWidth:5, //设置border的宽度有多大
              borderColor:'#111c3b',
              normal:{
                label:{
                  show:true,
                  position:'inner'
                }
              }

            },
            grid:{
              top:'25%',//距上边距
              left:'25%',//距离左边距
              right:'25%',//距离右边距
              bottom:'25%',//距离下边距
            },

            series: [
              {
                name: '',
                type: 'pie',
                center: ['35%', '50%'], //图的位置，距离左跟上的位置
                radius: ['50%', '63%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'inside'
                },
                emphasis: {
                  label: {
                    // show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                //自定义颜色数组
                color:['#F1EF64','#FB9A55','#EE3E3E','#6BD98D','#78D7ED'],
                data:this.pieDataY
              }
            ]
          });
        }
      }
    }
</script>

<style scoped>
.left2Class{
  padding-left: 12px;
}
</style>
