<template>
<div>
    <div class="right-1">
        <div class="title-1">项目安全</div>
        <div class="l right-1-1">
            <div class="l right-1-1-block-1">
                <div class="right-1-1-icon-1">
                    <div class="right-1-1-icon-2"></div>
                </div>
            </div>
            <div class="l right-1-1-block-2">
                <span class="right-1-1-text-2">6</span>
                <span class="right-1-1-text-3">发现隐患</span>
            </div>
            <div class="l right-1-1-block-3">
                <span class="right-1-1-text-4">8</span>
                <span class="right-1-1-text-5">整改中</span>
            </div>
            <div class="l right-1-1-block-4">
                <span class="right-1-1-text-6">15</span>
                <span class="right-1-1-text-7">升级量</span>
            </div>
        </div>
        <div class="l right-1-2">
            <div id="myChart-right-1" :style="{width: '102px', height: '160px'}"></div>
        </div>
        <div class="l right-1-3">
            <div class="right-1-3-block-1">
                <div class="l right-1-3-icon-1"></div>
                <div class="l right-1-3-block-4">
                    <span class="right-1-3-text-1">项目名称</span><br>
                    <span class="right-1-3-text-2">项目三</span>
                </div>
            </div>

            <div class="right-1-3-block-2">
                <div class="l right-1-3-icon-1"></div>
                <div class="l right-1-3-block-5">
                    <span class="right-1-3-text-3">隐患类型</span><br>
                    <span class="right-1-3-text-4">现场安全管理-临时用电</span>
                </div>
            </div>

            <div class="right-1-3-block-3">
                <div class="l right-1-3-icon-1"></div>
                <div class="l right-1-3-block-6">
                    <span class="right-1-3-text-5">升级一次</span>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "left3",
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
            let myChart = this.$echarts.init(document.getElementById('myChart-right-1'))
            // 绘制图表
            myChart.setOption({
                // tooltip: {
                //     trigger: 'item',
                //     formatter: '{a} <br/>{b}: {c} ({d}%)'
                // },
                legend: {
                    orient: 'horizontal',
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
                color: ['#8ED840', '#FB9A55', '#EE3E3E'],
                series: [{
                    type: 'pie',
                    radius: ['65%', '80%'],
                    center: ['50%', '25%'],
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
                            name: '已升级'
                        },
                        {
                            value: 335,
                            name: '已整改'
                        },
                        {
                            value: 335,
                            name: '待整改'
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

.title-1 {
    padding: 0px 0px 50px 70px;
    height: 24px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.5px;
}

.right-1 {
    /* background-image: url('../images/right/right-border-1.png'); */
    width: 497px;
    height: 252px;

}

.right-1-1 {
    width: 142px;
    height: 151px;
    padding-left: 18px;
}

.right-1-2 {
    width: 102px;
    height: 160px;
    margin-left: 52px;
}

.right-1-3 {
    width: 124px;
    height: 151px;
    margin-left: 48px;
}

.right-1-1-block-1 {
    width: 56px;
    height: 45px;
}

.right-1-1-block-2 {
    width: 56px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    margin-left: 12px;
}

.right-1-1-block-3 {
    width: 56px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    padding-top: 54px;
}

.right-1-1-block-4 {
    width: 56px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    margin-left: 12px;
    padding-top: 54px;
}

.right-1-1-text-2 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #2ecfff;
    font-family: Impact;
    font-size: 20px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.right-1-1-text-3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-1-1-text-4 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #58c591;
    font-family: Impact;
    font-size: 20px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.right-1-1-text-5 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-1-1-text-6 {
    display: inline-block;
    width: 100%;
    color: #58c591;
    text-align: center;
    font-family: Impact;
    font-size: 20px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
}

.right-1-1-text-7 {
    display: inline-block;
    width: 100%;
    color: #c2d8ff;
    text-align: center;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-1-1-icon-1 {
    width: 56px;
    height: 46px;
    background: url('../images/right/right-icon-1.png') no-repeat;
}

.right-1-1-icon-2 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 17px;
    height: 19px;
    background: url('../images/right/right-icon-2.png') no-repeat;
}

.right-1-3-icon-1 {
    width: 2px;
    height: 35px;
    margin-right: 10px;
    background: url('../images/right/right-icon-3.png') no-repeat;
}

.right-1-3-block-1 {
    width: 140px;
    height: 37px;
}

.right-1-3-block-2 {
    margin-top: 20px;
    width: 140px;
    height: 37px;
}

.right-1-3-block-3 {
    margin-top: 20px;
    width: 140px;
    height: 37px;
}

.right-1-3-block-4 {
    line-height: 19px;
    width: calc(100% - 12px)
}

.right-1-3-block-5 {
    line-height: 19px;
    width: calc(100% - 12px)
}

.right-1-3-block-6 {
    line-height: 19px;
    width: calc(100% - 12px);
    margin-top: 8px;
}

.right-1-3-text-1 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-1-3-text-2 {
    color: #5db0fd;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-1-3-text-3 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-1-3-text-4 {
    color: #5db0fd;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.right-1-3-text-5 {
    color: #6ffcaa;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}
</style>
