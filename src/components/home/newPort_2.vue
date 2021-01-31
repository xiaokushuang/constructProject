<template>
<div>
    <div id="main_2">
    </div>
</div>
</template>

<script>
export default {
    name: 'newPort_2',
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
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 500,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [{
                            value: 335,
                            name: '类型A'
                        },
                        {
                            value: 310,
                            name: '类型B'
                        },
                        {
                            value: 274,
                            name: '类型C'
                        },
                        {
                            value: 235,
                            name: '类型D'
                        },
                        {
                            value: 400,
                            name: '类型E'
                        }
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        color: '#99A4B7'
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#99A4B7'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    color: [ //自定义的颜色
                        '#00FF00',
                        '#00FF00',
                        '#00CCFF',
                        '#FF9966',
                        '#FF9966',

                    ],
                    // itemStyle: {
                    //     color: '#c23531',
                    //     shadowBlur: 200,
                    //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                    // },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }]
            };
            var myChart = this.$echarts.init(document.getElementById('main_2'));
            myChart.setOption(option);
        },
        randomValue() {
            return Math.round(Math.random() * 1000);
        }
    }
}
</script>

<style>
#main_2 {
    width: 372.5px;
    height: 247px;
}
</style>
