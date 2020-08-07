<template>
<div class="videoMonitoringClass">
    <div class="clear">
        <!--左侧-->
        <div class="l">
            <div class="hj-right1">
                <div style="position: relative">
                    <div class="clear" style="padding: 43px;">
                        <div class="l">
                            <div class="left2Class">
                                <div id="myChart" :style="{width: '160px', height: '160px'}"></div>
                            </div>
                        </div>
                        <div class="l">
                            <div class="left1-block" v-for="data in leftList1">
                                <div class="clear">
                                    <div class="l">
                                        <div class="hj-left1-1">
                                            <img style="position:relative; top:10px" :src="data.src" alt="">
                                        </div>
                                        <div style="text-align: center">{{data.name}}</div>
                                    </div>
                                    <div class="l">
                                        <div style="color:#03EAFF;font-size:36px;text-align: center">{{data.num}}</div>
                                        <div style="text-align: center">{{data.unit}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hj-right2">
                <div style="position: relative">
                    <div style="position: absolute;left: 15px;top: 15px;">
                        <img src="../../assets/vi-5.png" alt="">
                    </div>
                    <div class="clear" style="padding:100px 40px;padding-right: 0;">
                        <div v-for="(data,index) in viNumList" @click="setActive(index)" :key="'viNum' + index" :class="[index == isActive ? 'viNum' : 'viNum-2']" class="l viNum" style="margin-right: 50px;">
                            {{data.num}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="hj-right3">
                <div style="position: relative">
                    <div style="position: absolute;left: 15px;top: 15px;">
                        <img src="../../assets/vi-6.png" alt="">
                    </div>
                    <div class="clear" style="padding:70px 10px;">
                        <div style="padding-left:12px">
                            <div class="l right3-block" v-for="(data,index) in rightList3NewTitle" :key="'videTableTitle' + index">
                                <div class="right3-block"> {{data}}</div>
                            </div>
                        </div>

                        <div class="l right3-block-new" v-for="(data,index) in rightList3NewData" :key="'videTable' + index" :style="{'padding-top' : index == 0 ? '12px' : '0px'}">

                            <div class="l right3-block" :style="{'background': index % 2 == 0 ?  'rgba(70,127,224,0.2)' : 'none'}">
                                <span :class="[data.state == '开' ? 'switchOn' : 'switchOff']"></span>
                                {{data.state}}
                            </div>

                            <div class="l right3-block" :style="{'background': index % 2 == 0 ?  'rgba(70,127,224,0.2)' : 'none'}">
                                {{data.location}}
                            </div>

                            <div class="l right3-block" :style="{'background': index % 2 == 0 ?  'rgba(70,127,224,0.2)' : 'none'}">
                                {{data.onlineDay}}
                            </div>

                            <div class="l right3-block" :style="{'background': index % 2 == 0 ?  'rgba(70,127,224,0.2)' : 'none'}">
                                {{data.offlineDay}}
                            </div>

                            <div class="l right3-block" :style="{'background': index % 2 == 0 ?  'rgba(70,127,224,0.2)' : 'none'}">
                                {{data.time}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--右侧-->
        <div class="l vi-right-1">
            <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                <video id="video-1" muted autoplay class="video video-js vjs-default-skin vjs-big-play-centered">
                </video>
            </div>
            <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                <video id="video-2" muted autoplay class="video video-js vjs-default-skin vjs-big-play-centered">
                </video>
            </div>
            <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                <video id="video-3" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                </video>
            </div>
            <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                <video id="video-4" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                </video>
            </div>
            <span v-show="videoNum == '9' || videoNum == '12'">
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' ,'height' : videoNum == '4' ? '403px' : '257px' }">
                    <video id="video-5" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-6" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-7" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-8" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-9" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
            </span>
            <span v-show="videoNum == '12'">
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-10" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-11" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
                <div class="borderImg" :style="{'width' : videoNum == '4' ? '620px' : videoNum == '9' ? '402px' : '287px' , 'height' : videoNum == '4' ? '403px' : '257px'}">
                    <video id="video-12" muted autoplay class=" video video-js vjs-default-skin vjs-big-play-centered">
                    </video>
                </div>
            </span>
        </div>
    </div>
</div>
</template>

<script>
import viLeft1 from './vi-left1'
import axios from 'axios'
export default {
    name: 'videoMonitoring',
    components: {
        viLeft1
    },
    created() {
        axios.get("../../../static/json/videoMonitoringTableData.json").then((res) => {
            if (res.data.success) {
                this.rightList3NewData = res.data.rightList3NewData;
                this.echartData = this.getEchartData(res.data.rightList3NewData);
                this.getPassRadio();
                this.drawLine();
                this.videoAllInit()

            }
        })
    },
    mounted() {

    },
    data() {
        return {
            isActive: 0,
            echartData: [],
            rightList3: [],
            rightList3NewTitle: [
                '启用状态', '安装位置', '在线天数', '离线天数', '安装时间'
            ],

            rightList3NewData: [],
            viNumList: [{
                    num: '4'
                },
                {
                    num: '9'
                },
                {
                    num: '12'
                },
            ],
            leftList1: [{
                    src: require('../../assets/vi-1-1.png'),
                    name: '',
                    num: "",
                    unit: '摄像头总数'
                },
                {
                    src: require('../../assets/vi-1-2.png'),
                    name: '',
                    num: "",
                    unit: '故障数量'
                },
            ],
            videoNum: '4',
            passRadio: '0',
        }
    },
    methods: {
        setActive(index) {
            this.isActive = index;
            this.videoNum = this.viNumList[index].num
        },
        videoInit(id, num) {
            let _this = this;
            var myVideo = this.$video(id, {
                bigPlayButton: true,
                // textTrackDisplay: false,
                // posterImage: false,
                controls: true,
                errorDisplay: false,
                autoplay: true,
            }, )
            let vdoSrc = '';
            if (this.rightList3NewData && this.rightList3NewData[num]) {
                vdoSrc = this.rightList3NewData[num - 1].src
            }

            // if (vdoSrc) {
            myVideo.src({
                src: vdoSrc,
                type: 'application/x-mpegURL' //在重新添加视频源的时候需要给新的type的值
            })
            // }else{
            // myVideo.dispose();
            // }

        },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            let itemStyle1 = {
                normal: { //颜色渐变
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: "rgba(102,72,255)" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(16,12,48)" // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
            this.echartData[1].itemStyle = itemStyle1;

            // let itemStyle2 = {
            //     normal: {
            //         color: "rgba(50,201,252)" // 100% 处的颜色
            //     }
            // }
            let itemStyle2 = {
                normal: { //颜色渐变
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: "rgba(50,201,252)" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(50,201,252)" // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    }
                }
            }

            this.echartData[0].itemStyle = itemStyle2;
            console.log(this.echartData)
            // 绘制图表
            myChart.setOption({
                title: {
                    text: this.passRadio + '%',
                    left: "center",
                    top: "36%",
                    textStyle: {
                        color: "#17c7fb",
                        fontSize: 24,
                        align: "center"
                    }
                },

                graphic: {
                    type: "text",
                    left: "center",
                    top: "54%",
                    style: {
                        text: "在线率",
                        textAlign: "center",
                        fill: "#fff",
                        fontSize: 12,
                        fontWeight: 500
                    }
                },
                series: [{
                    name: '在线率',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                    },
                    data: this.echartData
                }]
            });
        },
        videoAllInit() {
            //可用循环代替
            debugger
            this.videoInit('video-1', 1);
            this.videoInit('video-2', 2);
            this.videoInit('video-3', 3);
            this.videoInit('video-4', 4);
            this.videoInit('video-5', 5);
            this.videoInit('video-6', 6);
            this.videoInit('video-7', 7);
            this.videoInit('video-8', 8);
            this.videoInit('video-9', 9);
            this.videoInit('video-10', 10);
            this.videoInit('video-11', 11);
            this.videoInit('video-12', 12);
        },
        getPassRadio() {
            let result = 0;
            let num = 0;
            let passNum = 0;
            let d = this.echartData;
            for (var n in d) {
                if (n != 'remove') {
                    let count = parseInt(d[n].value);
                    num += count;
                    if (d[n].name == '在线') {
                        passNum += parseInt(d[n].value);
                    }
                }
            }
            result = parseInt((passNum / num) * 100)
            this.passRadio = isNaN(result) || Math.abs(result) == Infinity ? '0' : result
            this.leftList1[0].num = passNum + '/' + num
            this.leftList1[1].num = num - passNum;
        },
        getEchartData(data) {
            let mortalityNum = 0;
            let passNum = 0;
            for (var n in data) {
                if (n != 'remove') {
                    if (data[n].state == '开') {
                        passNum++;
                    } else {
                        mortalityNum++;
                    }
                }
            };
            return [{
                    "value": passNum,
                    "name": "在线"
                },
                {
                    "value": mortalityNum,
                    "name": "不在线"
                }
            ]
        }
    },
    destroyed() {

    }
}
</script>

<style scoped>
.left,
.right {
    display: inline-block;
}

.videoMonitoringClass {
    padding: 10px 25px;
}

.vi-right-1 {
    width: 1315px;
    height: 873px;
    background: url("../../assets/vi-right1-bg.png") 0 0 no-repeat;
    margin-left: 20px;
    background-size: 100% 100%;
}

.hj-right1 {
    width: 488px;
    height: 242px;
    margin-bottom: 19px;
    background: url("../../assets/hj-right1-bg.png") 0 0 no-repeat;
}

.hj-right2 {
    background: url("../../assets/hj-right1-bg.png") 0 0 no-repeat;
    width: 488px;
    height: 242px;
    margin-bottom: 10px;
}

.hj-right3 {
    background: url("../../assets/hj-right3-bg.png") 0 0 no-repeat;
    width: 488px;
    height: 360px;
}

.hj-left1-1 {
    width: 80px;
    height: 64px;
    background: url("../../assets/hj-left-block1-0.png") 0px 0 no-repeat;
    background-size: 100% 100%;
    background-position: center;
    text-align: center;
}

.left1-block {
    margin-bottom: 40px;
}

.viNum {
    text-align: center;
    line-height: 73px;
    width: 94px;
    height: 73px;
    color: #2ECFFF;
    font-size: 36px;
    background: url("../../assets/vi-2-1.png") 0px 0 no-repeat;
    cursor: pointer;

}

.viNum-2 {
    text-align: center;
    line-height: 73px;
    width: 94px;
    height: 73px;
    color: #2ECFFF;
    opacity: 0.5;
    font-size: 36px;
    background: url("../../assets/vi-2-3.png") 0px 0 no-repeat;
    cursor: pointer;
}

.hj-right3 {
    background: url("../../assets/hj-right3-bg.png") 0 0 no-repeat;
    width: 488px;
    height: 360px;
}

.right3-block {
    width: 88px;
}

.right3-block div {
    padding: 7px 8px;
    text-align: right;
    height: 30px;
}

.right3-block-new div {
    padding: 7px 8px;
    text-align: right;
    line-height: 17px;
}

.right3-block-new {
    padding: 0px 8px;
}

.video-block {
    width: 1316px;
    height: 881px;
    background: url("../../assets/hj-right1-bg.png") 0 0 no-repeat;
    margin-bottom: 10px;
}

.borderImg {
    width: 620px;
    height: 403px;
    margin-bottom: 19px;
    background: url("../../assets/video-border.png") 0 0 no-repeat;
    background-size: 100% 100%;
    margin: 20px 10px 10px 20px;
    display: inline-block;
}

video {
    margin: 0px !important;
}

.video {
    position: relative;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
}

.switchOn {
    width: 24px;
    height: 12.5px;
    background: url("../../assets/switch-on.png") 0 0 no-repeat;
    display: inline-block;
    background-size: 100% 100%;
}

.switchOff {
    width: 24px;
    height: 12.5px;
    background: url("../../assets/switch-off.png") 0 0 no-repeat;
    display: inline-block;
    background-size: 100% 100%;
}
</style>
