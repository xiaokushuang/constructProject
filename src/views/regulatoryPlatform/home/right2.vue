<template>
<div>
    <div class="right-2">
        <div class="title-1">项目质量</div>
        <div class="l right-2-1">
            <div class="l right-2-1-block-1">
                <div class="right-2-1-icon-1">
                    <div class="right-2-1-icon-3"></div>
                </div>
            </div>
            <div class="l right-2-1-block-2">
                <span class="right-2-1-text-2">{{num1}}</span>
                <span class="right-2-1-text-3">质量整改单</span>
            </div>
            <div class="l right-2-1-block-3">

                <div class="right-2-1-icon-1">
                    <div class="right-2-1-icon-3"></div>
                </div>
            </div>
            <div class="l right-2-1-block-4">
                <span class="right-2-1-text-6">{{num2}}</span>
                <span class="right-2-1-text-7">质量检验合格</span>
            </div>
        </div>
        <div class="l right-2-2">
            <div id="myChart-right-2" :style="{width: '188px', height: '170px'}"></div>
        </div>
        <div class="l right-2-3" v-if="currentProData">
            <div class="right-2-3-block-1">
                <div class="l right-2-3-icon-1"></div>
                <div class="l right-2-3-block-4">
                    <span class="right-2-3-text-1">{{currentProData[0].name}}</span><br>
                    <span class="right-2-3-text-4" :class="[currentProData[0].value == '合格' ? 'pass' : 'no-pass']">{{currentProData[0].value}}</span>
                </div>
            </div>

            <div class="right-2-3-block-2" v-if="currentProData[1].name">
                <div class="l right-2-3-icon-1"></div>
                <div class="l right-2-3-block-5">
                    <span class="right-2-3-text-3">{{currentProData[1].name}}</span><br>
                    <span class="right-2-3-text-4" :class="[currentProData[1].value == '合格' ? 'pass' : 'no-pass']">{{currentProData[1].value}}</span>
                </div>
            </div>

            <div class="right-2-3-block-3" v-if="currentProData[2].name">
                <div class="l right-2-3-icon-1"></div>
                <div class="l right-2-3-block-6">
                    <span class="right-2-3-text-3">{{currentProData[2].name}}</span><br>
                    <span class="right-2-3-text-4" :class="[currentProData[2].value == '合格' ? 'pass' : 'no-pass']">{{currentProData[2].value}}</span>
                </div>
            </div>
            <!-- {{currentProData}} -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "right2",
    data() {
        return {
            num1:'6',
            num2:'15',
            xData: ['季度一', '季度二', '季度三', '季度四'],
            yData: [{
                    name: '合格',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '不合格',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ],
            proData: [{
                    name: '项目1',
                    value: '合格'
                },
                {
                    name: '项目2',
                    value: '不合格'
                },
                {
                    name: '项目3',
                    value: '合格'
                },
                {
                    name: '项目4',
                    value: '合格'
                },
                {
                    name: '项目5',
                    value: '不合格'
                },
                {
                    name: '项目6',
                    value: '合格'
                },
                {
                    name: '项目7',
                    value: '不合格'
                }
            ],
            currentProData: [],
        }
    },
    created(){
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
            let myChart = this.$echarts.init(document.getElementById('myChart-right-2'))
            var color = ['rgba(26,201,234', 'rgba(134,255,183', 'rgba(26,201,234', 'rgba(134,255,183', ]

            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // legend: {
                //     data: ['合格', '不合格'],
                //     top:'40%'

                // },
                grid: {
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
                        formatter: function (value) {
                            return value.split("").join("\n")
                        },
                        color: '#fff',
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                    },
                    splitLine:{
                        show:false,
                    }
                }],
                grid: {
                    y: 10,
                    x: '20%'
                },
                series: [{
                        name: '合格',
                        type: 'bar',
                        data: [10, 20, 30, 40],
                        type: 'bar',
                        barWidth: '20%',
                        itemStyle: {
                            //柱形图圆角，鼠标移上去效果
                            emphasis: {
                                barBorderRadius: [10, 10, 10, 10],
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                            offset: 0,
                                            color: "rgba(103,203,146)" // 100% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(25,40,87)" // 0% 处的颜色

                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },

                            normal: { //颜色渐变
                                barBorderRadius: [10, 10, 10, 10],
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                            offset: 0,
                                            color: "rgba(103,203,146)" // 100% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(25,40,87)" // 0% 处的颜色

                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },

                    },
                    {
                        name: '不合格',
                        type: 'bar',
                        data: [10, 20, 30, 40],
                        type: 'bar',
                        barWidth: '20%',
                        itemStyle: {
                            //柱形图圆角，鼠标移上去效果
                            emphasis: {
                                barBorderRadius: [10, 10, 10, 10],
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                            offset: 0,
                                            color: "rgba(243,143,84)" // 100% 处的颜色
                                        },
                                        {
                                            offset: 1,

                                            color: "rgba(25,40,87)" // 0% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                            normal: {
                                //柱形图圆角，初始化效果
                                barBorderRadius: [10, 10, 10, 10],
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                            offset: 0,
                                            color: "rgba(243,143,84)" // 100% 处的颜色
                                        },
                                        {
                                            offset: 1,

                                            color: "rgba(25,40,87)" // 0% 处的颜色
                                        }
                                    ],
                                    globalCoord: false // 缺省为 false
                                }
                            },
                        }
                    },
                ]
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
    padding: 0px 0px 40px 70px;
    height: 24px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.5px;
}

.right-2 {
    /* background-image: url('../images/right/right-border-1.png'); */
    width: 497px;
    height: 252px;

}

.right-2-1 {
    width: 170px;
    height: 151px;
    padding-left: 18px;
}

.right-2-2 {
    width: 188px;
    height: 170px;
    margin-left: 22px;

}

.right-2-3 {
    width: 110px;
    height: 151px;
    margin-left: 5px;
}

.right-2-1-block-1 {
    width: 56px;
    height: 45px;
}

.right-2-1-block-2 {
    width: 84px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    margin-left: 12px;
}

.right-2-1-block-3 {
    width: 56px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    padding-top: 54px;
}

.right-2-1-block-4 {
    width: 84px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    margin-left: 12px;
    padding-top: 54px;
}

.right-2-1-text-2 {
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

.right-2-1-text-3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-2-1-text-4 {
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

.right-2-1-text-5 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-2-1-text-6 {
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

.right-2-1-text-7 {
    display: inline-block;
    width: 100%;
    color: #c2d8ff;
    text-align: center;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-2-1-icon-1 {
    width: 56px;
    height: 46px;
    background: url('../images/right/right-icon-1.png') no-repeat;
}

.right-2-1-icon-2 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 18px;
    height: 19px;
    background: url('../images/right/right-icon-2.png') no-repeat;
}

.right-2-1-icon-3 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 19px;
    height: 19px;
    background: url('../images/right/right-icon-4.png') no-repeat;
}

.right-2-3-icon-1 {
    width: 2px;
    height: 35px;
    margin-right: 10px;
    background: url('../images/right/right-icon-3.png') no-repeat;
}

.right-2-3-block-1 {
    width: 140px;
    height: 37px;
}

.right-2-3-block-2 {
    margin-top: 20px;
    width: 140px;
    height: 37px;
}

.right-2-3-block-3 {
    margin-top: 20px;
    width: 140px;
    height: 37px;
}

.right-2-3-block-4 {
    line-height: 19px;
    width: calc(100% - 12px)
}

.right-2-3-block-5 {
    line-height: 19px;
    width: calc(100% - 12px)
}

.right-2-3-block-6 {
    line-height: 19px;
    width: calc(100% - 12px);
}

.right-2-3-text-1 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-2-3-text-2 {
    color: #5db0fd;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-2-3-text-3 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-2-3-text-4 {
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}

.right-2-3-text-5 {
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
