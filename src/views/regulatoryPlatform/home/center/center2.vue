<template>
<div>
    <div class="center-2">
        <div class="l center-2-block-1">
            <span class="center-2-text-1">工单统计</span>
        </div>
        <div class="l center-2-block-2">
            <div id="myChart-center-2" :style="{width: '310px', height: '100px'}"></div>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'center1',
    data() {
        return {
            xData: [],
            yData: [],
        }
    },
    created() {
        axios.get("../../../static/homeJson/center-2.json").then((res) => {
            if (res.data.success) {
                this.xData = res.data.xData;
                this.yData = res.data.yData;
                this.$nextTick(function () {
                    this.drawLine();
                })
            }
        })
    },
    mounted() {

    },
    methods: {
        drawLine() {
            // 基于准备好的doam，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart-center-2'))
            var charts = { // 按顺序排列从大到小
                xData: this.xData,
                yData: this.yData
            }
            var top10xData = charts.xData
            var top10yData = charts.yData
            var color = ['rgba(102,207,138', 'rgba(212,133,64', 'rgba(23,96,242', 'rgba(221,73,85']

            let lineY = []
            for (var i = 0; i < charts.xData.length; i++) {
                var x = i
                if (x > color.length - 1) {
                    x = color.length - 1
                }
                var data = {
                    name: charts.xData[i],
                    color: color[x] + ')',
                    value: top10yData[i],
                    itemStyle: {
                        normal: {
                            show: true,
                            color: {
                                type: "linear",
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: color[x] + ', 0.3)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: color[x] + ', 1)' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            barBorderRadius: 10
                        },
                        emphasis: {
                            shadowBlur: 15,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    }
                }
                lineY.push(data)
            }

            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '10%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: this.xData,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        color: '#c2d8ff',
                        fontFamily: "Microsoft YaHei",
                        fontsize: '14px',
                        fontWeight: 290,
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                        show: false,
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                    }
                }],
                series: {
                    type: 'bar',
                    data: lineY,
                    barWidth: '15%',
                }
            });
        },
    }
}
</script>

<style scoped>
.l {
    display: inline-block;
}

.center-2 {
    padding: 18px 30px;
}

.center-2-text-1 {
    width: 18px;
    display: inline-block;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.5px;
}

.center-2-block-2 {
    padding-left: 20px
}
</style>
