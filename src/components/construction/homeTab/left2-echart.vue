<template>
  <div class="left2Class">
    <div id="myChart" :style="{width: '400px', height: '200px'}"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "left2",
    props:[
      "pieDataY",
      "pieDataX"
    ],
    data(){
      return {
       /* pieDataY:  [
          {value: 12.3, name: '北京总建'},
          {value: 16.4, name: '通州分部'},
          {value: 13.4, name: '西安总理'},
          {value: 25.7, name: '长沙总理'},
        ],
        pieDataX:['北京总建', '通州分部', '西安总理', '长沙总理',]*/
      }
    },
 /*   created(){
      this.drawLine();
      axios.get("../../../static/json/home-left-2.json").then((res)=>{
        if(res.data.success){
          this.pieDataY = res.data.pieDataY
          this.pieDataX = res.data.pieDataX
          this.drawLine();
        }
      })
    },*/
    mounted(){
      this.drawLine();
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
                data:this.pieDataY
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
