<template>
<div>
    <div class="center-1">
        <div class="l center-1-block-1">
            <span class="center-1-text-1">告警信息</span>
        </div>

        <div class="l center-1-block-2">
            <div id="myChart-center-1" :style="{width: '88px', height: '100px'}"></div>
        </div>

        <div class="l center-1-block-3">
            <div class="center-1-block-3-1 l">
                <span class="center-1-text-2">4</span><span class="center-1-text-3">个</span><br>
                <span class="center-1-text-10">红色预警</span>
            </div>
            <div class="center-1-block-3-2 l">
                <span class="center-1-text-4">4</span><span class="center-1-text-5">个</span><br>
                <span class="center-1-text-11">黄色预警</span>
            </div>
            <div class="center-1-block-3-3 l">
                <span class="center-1-text-6">4</span><span class="center-1-text-7">个</span><br>
                <span class="center-1-text-12">蓝色预警</span>
            </div>
            <div class="center-1-block-3-4 l">
                <span class="center-1-text-8">4</span><span class="center-1-text-9">个</span><br>
                <span class="center-1-text-13">橙色预警</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'center1',
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(function () {
            this.drawLine();
        })
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart-center-1'))
            // 绘制图表
            myChart.setOption({
                // tooltip: {
                //     trigger: 'item',
                //     formatter: '{a} <br/>{b}: {c} ({d}%)'
                // },
                legend: {
                    orient: 'horizontal',
                    show: false,
                    left: '13%',
                    top: '55%',
                    textStyle: {
                        color: '#c2d8ff',
                        fontFamily: "Microsoft YaHei",
                        fontsize: '12px',
                        fontWeight: '290',
                    },
                    itemHeight: 6,
                    itemWidth: 15,
                    data: ['已升级', '已整改', '待整改']
                },
                graphic: {
                    type: "text",
                    left: "center",
                    top: "30%",
                    style: {
                        text: "15",
                        textAlign: "center",
                        fill: "#fff",
                        fontFamily: 'Impact',
                        fontSize: 36,
                        fontWeight: 400
                    }
                },
                color: ['#ee3e3e', '#fdea18', '#5db0fd','#fb9a55'],
                series: [{
                    type: 'pie',
                    radius: ['65%', '90%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    itemStyle: {
                        borderWidth: 4,
                        borderColor: 'rgba(17,17,65)',
                    },
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: false,
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                            value: 335,
                            name: '红色预警'
                        },
                        {
                            value: 335,
                            name: '黄色预警'
                        },
                        {
                            value: 335,
                            name: '蓝色预警'
                        }, {
                            value: 335,
                            name: '橙色预警'
                        }
                    ]
                }]
            });
        },
    }
}
</script>

<style scoped>
.l {
    display: inline-block;
}

.center-1 {
    padding: 18px 30px;
}

.center-1-block-2 {
    margin-left: 40px;
}

.center-1-block-3-1 {
    width: 56px;
    height: 56px;
}

.center-1-block-3-2 {
    width: 56px;
    height: 56px;
    margin-left: 50px;
}

.center-1-block-3-3 {
    width: 56px;
    height: 56px;
}

.center-1-block-3-4 {
    width: 56px;
    height: 56px;
    margin-left: 50px;
}

.center-1-block-3 {
    width: 162px;
    margin-left: 40px;
}

.center-1-text-1 {
    color: #00e7ff;
    font-family: "Microsoft YaHei";
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.5px;
    width: 18px;
    display: inline-block;
}

.center-1-text-2 {
    color: #ee3e3e;
    font-family: Impact;
    font-size: 28px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.center-1-text-3 {
    color: #ee3e3e;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
}

.center-1-text-4 {
    color: #fdea18;
    font-family: Impact;
    font-size: 28px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.center-1-text-5 {
    color: #fdea18;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
}

.center-1-text-6 {
    color: #5db0fd;
    font-family: Impact;
    font-size: 28px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.center-1-text-7 {
    color: #5db0fd;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
}

.center-1-text-8 {
    color: #fb9a55;
    font-family: Impact;
    font-size: 28px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.center-1-text-9 {
    color: #fb9a55;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
}

.center-1-text-10 {
    color: #ee3e3e;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
    position:relative;
    bottom: 5px;
}

.center-1-text-11 {
    color: #fdea18;  
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
    position:relative;
    bottom: 5px;
}

.center-1-text-12 {
    color: #5db0fd;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
    position:relative;
    bottom: 5px;
}

.center-1-text-13 {
    color: #fb9a55;
    font-family: Impact;
    font-size: 14px;
    font-stretch: condensed;
    font-weight: 500;
    line-height: 24px;
    position:relative;
    bottom: 5px;
}
</style>
