<template>
<div>
    <div class="right-2">
        <div class="title-1">项目安全</div>
        <div class="l right-2-1">
            <div class="l right-2-1-block-1">
                <div class="right-2-1-icon-1">
                    <div class="right-2-1-icon-3"></div>
                </div>
            </div>
            <div class="l right-2-1-block-2">
                <span class="right-2-1-text-2">6</span>
                <span class="right-2-1-text-3">质量整改单</span>
            </div>
            <div class="l right-2-1-block-3">

                <div class="right-2-1-icon-1">
                    <div class="right-2-1-icon-3"></div>
                </div>
            </div>
            <div class="l right-2-1-block-4">
                <span class="right-2-1-text-6">15</span>
                <span class="right-2-1-text-7">质量检验合格</span>
            </div>
        </div>
        <div class="l right-2-2">
            <div id="myChart-right-2" :style="{width: '188px', height: '170px'}"></div>
        </div>
        <div class="l right-2-3">
            <div class="right-2-3-block-1">
                <div class="l right-2-3-icon-1"></div>
                <div class="l right-2-3-block-4">
                    <span class="right-2-3-text-1">项目名称</span><br>
                    <span class="right-2-3-text-2">项目三</span>
                </div>
            </div>

            <div class="right-2-3-block-2">
                <div class="l right-2-3-icon-1"></div>
                <div class="l right-2-3-block-5">
                    <span class="right-2-3-text-3">隐患类型</span><br>
                    <span class="right-2-3-text-4">现场安全管理-临时用电</span>
                </div>
            </div>

            <div class="right-2-3-block-3">
                <div class="l right-2-3-icon-1"></div>
                <div class="l right-2-3-block-6">
                    <span class="right-2-3-text-5">升级一次</span>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "right2",
    data() {
        return {

        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart-right-2'))
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
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
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
    padding: 9px 0px 26px 70px;
}

.right-2 {
    background-image: url('../images/right/right-border-1.png');
    width: 497px;
    height: 252px;

}

.right-2-1 {
    width: 142px;
    height: 151px;
    padding-left: 18px;
}

.right-2-2 {
    width: 188px;
    height: 170px;
    margin-left: 52px;
    
}

.right-2-3 {
    width: 124px;
    height: 151px;
    margin-left: 48px;
}

.right-2-1-block-1 {
    width: 56px;
    height: 45px;
}

.right-2-1-block-2 {
    width: 56px;
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
    width: 56px;
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
    margin-top: 8px;
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
    color: #5db0fd;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.right-2-3-text-5 {
    color: #6ffcaa;
    font-family: "Microsoft YaHei";
    font-size: 12px;
    font-weight: 290;
    line-height: 16px;
}
</style>
