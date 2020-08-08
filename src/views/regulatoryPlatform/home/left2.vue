<template>
<div>
    <div class="left-2">
        <div class="title-1">进度状态</div>
        <div class="l left-2-1">
            <div style="height:91px">
                <div class="left-2-1-block-1 l">
                    <span class="left-2-1-text-1 l">进展偏差</span>
                    <div class="left-2-1-text-2-circle-1"></div>
                    <span class="left-2-1-text-2"></span>
                    <div class="left-2-1-text-2-circle-2"></div>
                </div>
                <div class="left-2-1-block-3 l">
                    <span class="l left-2-1-text-5">业务节点<span class="left-2-1-text-7">{{num1}}</span></span><br>
                    <span class="l left-2-1-text-6">关键节点<span class="left-2-1-text-7">{{num2}}</span></span>
                </div>
            </div>
            <div style="height:91px">
                <div class="left-2-1-block-1 l">
                    <span class="left-2-1-text-1 l">近期节点</span>
                    <div class="left-2-1-text-2-circle-1"></div>
                    <span class="left-2-1-text-2"></span>
                    <div class="left-2-1-text-2-circle-2"></div>

                </div>
                <div class="left-2-1-block-3 l">
                    <span class="l left-2-1-text-5">业务节点<span class="left-2-1-text-7">{{num1}}</span></span><br>
                    <span class="l left-2-1-text-6">关键节点<span class="left-2-1-text-7">{{num2}}</span></span>
                </div>
            </div>

            <!-- <div class="left-2-1-block-2">
                <span class="left-2-1-text-3 l">近期节点</span>
                <div class="left-2-1-text-2-circle-1"></div>
                <span class="left-2-1-text-4"></span>

                <div class="left-2-1-text-2-circle-2"></div>
            </div> -->
        </div>
        <div class="l left-2-2">
            <div id="myChart-left-1" :style="{width: '102px', height: '160px'}"></div>
        </div>
        <div class="l left-2-3">
            <div class="left-2-3-block-1" v-if="currentProData[0].name">
                <div class="l left-2-3-icon-1"></div>
                <div class="l left-2-3-block-4">
                    <span class="left-2-3-text-1">{{currentProData[0].name}}</span><br>
                    <span class="left-2-3-text-2" :class="[currentProData[0].value == '关键节点延期' ? 'pass' : 'no-pass']">{{currentProData[0].value}}</span>
                </div>
            </div>

            <div class="left-2-3-block-2" v-if="currentProData[1].name">
                <div class="l left-2-3-icon-1"></div>
                <div class="l left-2-3-block-5">
                    <span class="left-2-3-text-3">{{currentProData[1].name}}</span><br>
                    <span class="left-2-3-text-4" :class="[currentProData[0].value == '关键节点延期' ? 'pass' : 'no-pass']">{{currentProData[1].value}}</span>
                </div>
            </div>

            <div class="left-2-3-block-3" v-if="currentProData[2].name">
                <div class="l left-2-3-icon-1"></div>
                <div class="l left-2-3-block-6">
                    <span class="left-2-3-text-3">{{currentProData[2].name}}</span><br>
                    <span class="left-2-3-text-4" :class="[currentProData[0].value == '关键节点延期' ? 'pass' : 'no-pass']">{{currentProData[2].value}}</span>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "left2",
    data() {
        return {
            num1: '6',
            num2: '8',
            proData: [{
                    name: '项目一',
                    value: '关键节点延期'
                },
                {
                    name: '项目二',
                    value: '业主节点延期'
                },
                {
                    name: '项目三',
                    value: '关键节点延期'
                },
                {
                    name: '项目四',
                    value: '业主节点延期'
                },
                {
                    name: '项目五',
                    value: '业主节点延期'
                },
                {
                    name: '项目六',
                    value: '业主节点延期'
                },
                {
                    name: '项目七',
                    value: '关键节点延期'
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
            let myChart = this.$echarts.init(document.getElementById('myChart-left-1'))
            // 绘制图表
            myChart.setOption({
                // tooltip: {
                //     trigger: 'item',
                //     formatter: '{a} <br/>{b}: {c} ({d}%)'
                // },
                legend: {
                    orient: 'horizontal',
                    left: '0%',
                    top: '55%',
                    textStyle: {
                        color: '#c2d8ff',
                        fontFamily: "Microsoft YaHei",
                        fontsize: '12px',
                        fontWeight: '290',
                    },
                    itemHeight: 6,
                    itemWidth: 15,
                    data: ['关键节点延期', '业主节点延期']
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
                            name: '关键节点延期'
                        },
                        {
                            value: 335,
                            name: '业主节点延期'
                        },
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

.left-2 {
    /* background-image: url('../images/right/right-border-1.png'); */
    width: 497px;
    height: 252px;

}

.left-2-1 {
    width: 142px;
    height: 151px;
    padding-left: 18px;
}

.left-2-2 {
    width: 102px;
    height: 160px;
    margin-left: 32px;
    margin-top: 10px;
}

.left-2-3 {
    width: 124px;
    height: 151px;
    margin-left: 48px;
}

.left-2-1-text-2 {
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

.left-2-1-text-3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.left-2-1-text-4 {
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

.left-2-1-text-5 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 17px;
    line-height: 16px;
    position: relative;
    bottom: 10px;
}

.left-2-1-text-6 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 17px;
    padding-top: 30px;
    line-height: 16px;
    position: relative;
}

.left-2-1-text-7 {
    color: #2ecfff;
    font-family: Impact;
    font-size: 20px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 24px;
    padding-left: 10px;
}

.left-2-1-icon-1 {
    width: 56px;
    height: 46px;
    background: url('../images/right/right-icon-1.png') no-repeat;
}

.left-2-1-icon-2 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 17px;
    height: 19px;
    background: url('../images/right/right-icon-2.png') no-repeat;
}

.left-2-3-icon-1 {
    width: 2px;
    height: 35px;
    margin-right: 10px;
    background: url('../images/right/right-icon-3.png') no-repeat;
}

.left-2-3-block-1 {
    width: 140px;
    height: 37px;
}

.left-2-3-block-2 {
    margin-top: 20px;
    width: 140px;
    height: 37px;
}

.left-2-3-block-3 {
    margin-top: 20px;
    width: 140px;
    height: 37px;
}

.left-2-3-block-4 {
    line-height: 19px;
    width: calc(100% - 12px)
}

.left-2-3-block-5 {
    line-height: 19px;
    width: calc(100% - 12px)
}

.left-2-3-block-6 {
    line-height: 19px;
    width: calc(100% - 12px);
    margin-top: 8px;
}

.left-2-3-text-1 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.left-2-3-text-2 {
    color: #5db0fd;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.left-2-3-text-3 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.left-2-3-text-4 {
    color: #5db0fd;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.left-2-3-text-5 {
    color: #6ffcaa;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.left-2-1-text-1 {
    width: 14px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 17px;
    text-align: right;
}

.left-2-1-text-2 {
    width: 1px;
    height: 64px;
    border: solid 1px #9fc2ff;
    margin-left: 5px;
    position: relative;
    bottom: 4px;
}

.left-2-1-text-2-circle-1 {
    border: 1px solid #9fc2ff;
    width: 6px;
    height: 6px;
    background: #9fc2ff;
    border-radius: 6px;
    position: relative;
    left: 17px;
    bottom: 2px;
}

.left-2-1-text-2-circle-2 {
    border: 1px solid #9fc2ff;
    width: 6px;
    height: 6px;
    background: #9fc2ff;
    border-radius: 6px;
    position: relative;
    left: 17px;
    bottom: 8px;
}

.left-2-1-text-3 {
    width: 14px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 17px;
    text-align: right;
}

.left-2-1-text-4 {
    width: 1px;
    height: 64px;
    border: solid 1px #9fc2ff;
    margin-left: 5px;
    left: 17px;
    bottom: 8px;
}

.left-2-1-block-2 {
    margin-top: 15px;
}

.left-2-1-block-1 {
    width: 30px;
}

.pass {
    color: #6bd98d;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.no-pass {
    color: #fb9a55;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}
</style>
