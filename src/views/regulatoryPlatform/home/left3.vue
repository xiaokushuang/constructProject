<template>
<div>
    <div class="right-1">
        <div class="title-1">风险信息</div>
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
                <div class="right-1-1-icon-1">
                    <div class="right-1-1-icon-3"></div>
                </div>
            </div>
            <div class="l right-1-1-block-4">
                <span class="right-1-1-text-6">15</span>
                <span class="right-1-1-text-7">升级量</span>
            </div>
        </div>
        <div class="l right-1-2">
            <div id="myChart-left-2" :style="{width: '102px', height: '160px'}"></div>
        </div>
        <div class="l right-1-3">
            <div class="right-1-3-block-1" v-if="currentProData[0].name">
                <div class="l right-1-3-icon-1"></div>
                <div class="l right-1-3-block-4">
                    <span class="right-1-3-text-1">{{currentProData[0].name}}</span><br>
                    <span class="right-1-3-text-2" :class="[currentProData[0].value == '合格' ? 'pass' : 'no-pass']">{{currentProData[0].value}}</span>
                </div>
            </div>

            <div class="right-1-3-block-2" v-if="currentProData[1].name">
                <div class="l right-1-3-icon-1"></div>
                <div class="l right-1-3-block-5">
                    <span class="right-1-3-text-3">{{currentProData[1].name}}</span><br>
                    <span class="right-1-3-text-4" :class="[currentProData[1].value == '合格' ? 'pass' : 'no-pass']">{{currentProData[1].value}}</span>
                </div>
            </div>

            <div class="right-1-3-block-3" v-if="currentProData[2].name">
                <div class="l right-1-3-icon-1"></div>
                <div class="l right-1-3-block-6">
                    <span class="right-1-3-text-3">{{currentProData[2].name}}</span><br>
                    <span class="right-1-3-text-4" :class="[currentProData[2].value == '合格' ? 'pass' : 'no-pass']">{{currentProData[2].value}}</span>
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
            proData: [{
                    name: '项目一',
                    value: '合格'
                },
                {
                    name: '项目二',
                    value: '不合格'
                },
                {
                    name: '项目三',
                    value: '合格'
                },
                {
                    name: '项目四',
                    value: '合格'
                },
                {
                    name: '项目五',
                    value: '不合格'
                },
                {
                    name: '项目六',
                    value: '合格'
                },
                {
                    name: '项目七',
                    value: '不合格'
                }
            ],
            currentProData: [],
        }
    },
    created() {
        this.currentProData = [this.proData[0], this.proData[1], this.proData[2]];
    },
    mounted() {
        this.changeData(this.proData);
        this.$nextTick(function () {
            this.drawLine();
        })
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart-left-2'))
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
                    data: ['蓝色预警', '橙色预警', '红色预警']
                },
                color: ['#5db0fd', '#fb9a55', '#ee3e3e'],
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
                            name: '蓝色预警'
                        },
                        {
                            value: 335,
                            name: '橙色预警'
                        },
                        {
                            value: 335,
                            name: '红色预警'
                        }
                    ]
                }]
            });
        },
        changeData(data) {
            let count = 0;
            let maxCount = parseInt(data.length / 3);
            maxCount += data.length % 3 == 0 ? 0 : 1;
            setInterval(() => {
                if (maxCount == count) {
                    count = 0;
                }
                let data1 = data[parseInt(0 + count * 3)] ? data[parseInt(0 + count * 3)] : {
                    name: '',
                    value: ''
                }
                let data2 = data[parseInt(1 + count * 3)] ? data[parseInt(1 + count * 3)] : {
                    name: '',
                    value: ''
                }
                let data3 = data[parseInt(2 + count * 3)] ? data[parseInt(2 + count * 3)] : {
                    name: '',
                    value: ''
                }
                this.currentProData = [
                    data1, data2, data3
                ]
                count++;
            }, 3000);
        }
    }
}
</script>

<style scoped>
.l {
    display: inline-block;
}

.title-1 {

    text-align: right;
    padding: 0px 95px 40px 0px;
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
    margin-left: 32px;
    margin-top: 10px;
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
    left: 19px;
    height: 19px;
    background: url('../images/left/left-icon-2.png') no-repeat;
}

.right-1-1-icon-3 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 19px;
    height: 19px;
    background: url('../images/left/left-icon-3.png') no-repeat;
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

.pass {
    color: #6ffcaa;
}

.no-pass {
    color: #ee3e3e;
}
</style>
