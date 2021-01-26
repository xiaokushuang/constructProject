<template>
<div>
    <div id="main">
    </div>
</div>
</template>

<script>
export default {
    name: 'registerMap',
    data() {
        return {
            dataList: [
            {name:"南海诸岛",value:0},
            {name: '北京', value: this.randomValue()},
            {name: '天津', value: this.randomValue()},
            {name: '上海', value: this.randomValue()},
            {name: '重庆', value: this.randomValue()},
            {name: '河北', value: this.randomValue()},
            {name: '河南', value: this.randomValue()},
            {name: '云南', value: this.randomValue()},
            {name: '辽宁', value: this.randomValue()},
            {name: '黑龙江', value: this.randomValue()},
            {name: '湖南', value: this.randomValue()},
            {name: '安徽', value: this.randomValue()},
            {name: '山东', value: this.randomValue()},
            {name: '新疆', value: this.randomValue()},
            {name: '江苏', value: this.randomValue()},
            {name: '浙江', value: this.randomValue()},
            {name: '江西', value: this.randomValue()},
            {name: '湖北', value: this.randomValue()},
            {name: '广西', value: this.randomValue()},
            {name: '甘肃', value: this.randomValue()},
            {name: '山西', value: this.randomValue()},
            {name: '内蒙古', value: this.randomValue()},
            {name: '陕西', value: this.randomValue()},
            {name: '吉林', value: this.randomValue()},
            {name: '福建', value: this.randomValue()},
            {name: '贵州', value: this.randomValue()},
            {name: '广东', value: this.randomValue()},
            {name: '青海', value: this.randomValue()},
            {name: '西藏', value: this.randomValue()},
            {name: '四川', value: this.randomValue()},
            {name: '宁夏', value: this.randomValue()},
            {name: '海南', value: this.randomValue()},
            {name: '台湾', value: this.randomValue()},
            {name: '香港', value: this.randomValue()},
            {name: '澳门', value: this.randomValue()}
        ]
        }
    },
    mounted() {
        this.chartInit();
    },
    methods: {
        chartInit() {
            var option = {
                tooltip: {
                    formatter: function (params, ticket, callback) {
                        return params.seriesName + '<br />' + params.name + '：' + params.value + '家'
                    }
                },
                visualMap: {
                    min: 0,
                    max: 1500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    inRange: {
                        color: ['#e0ffff', '#006edd']
                    },
                    show: true
                },
                geo: {
                    map: 'china',
                    roam: false,
                    zoom: 1.23,
                    label: {
                        normal: {
                            show: true,
                            fontSize: '10',
                            color: 'rgba(0,0,0,0.7)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)'
                        },
                        emphasis: {
                            areaColor: '#F3B329',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },
                series: [{
                    name: '信息量',
                    type: 'map',
                    geoIndex: 0,
                    data: this.dataList
                }]
            };
            var myChart = this.$echarts.init(document.getElementById('main'));
            myChart.setOption(option);
        },
        randomValue() {
            return Math.round(Math.random() * 1000);
        }
    }
}
</script>

<style>
#main {
    width: 785px;
    height: 558px;
}
</style>
