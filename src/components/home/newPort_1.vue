<template>
<div>
    <div id="main_1">
    </div>
</div>
</template>

<script>
export default {
    name: 'newPort_1',
    data() {
        return {}
    },
    mounted() {
        this.chartInit();
    },
    methods: {
        chartInit() {
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // legend: {
                //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    top: 0,
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        color: '#99A4B7'
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['企业A', '企业B', '企业C', '企业D'],
                    axisLabel: {
                        color: '#99A4B7'
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [{
                        name: '指标A',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [220, 182, 191, 234],
                        color: "#00CCFF"
                    },
                    {
                        name: '指标B',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [150, 212, 201, 154],
                        color: '#FF9966'
                    },
                    {
                        name: '指标C',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [820, 832, 901, 934],
                        color: '#CC66CC',
                    }
                ]
            };
            var myChart = this.$echarts.init(document.getElementById('main_1'));
            myChart.setOption(option);
        },
        randomValue() {
            return Math.round(Math.random() * 1000);
        }
    }
}
</script>

<style>
#main_1 {
    width: 362.5px;
    height: 185px;
}
</style>
