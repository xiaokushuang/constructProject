<template>
    <div class="left2Class">
      <div id="myChart" :style="{width: '400px', height: '200px'}"></div>
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
          myChart.setOption({
            title:{
              x:'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{c}%'
            },
            graphic:{
              elements: [
                {
                  type: 'image',
                  style: {
                    // image: "../assets/pie-center.png",
                    image: "http://119.3.213.166/images/spot.png",
                    width: 80,
                    height: 80
                  },
                  left: '100',
                  top: 'center'
                },
                ]
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
              data: this.pieDataX
            },
            series: [
              {
                name: '',
                type: 'pie',
                center: ['35%', '50%'], //图的位置，距离左跟上的位置
                radius: ['50%', '63%'],
                avoidLabelOverlap: false,
                /*label: {
                  // show: false,
                  position: 'inside'
                },*/
                label: {
                  normal: {
                    formatter: '{d}%  ',
                  }
                },
                emphasis: {
                  label: {
                    // show: true,
                    // fontSize: '30',
                    // fontWeight: 'bold'
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
