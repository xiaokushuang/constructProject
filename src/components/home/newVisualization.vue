<template>
<div class="visualizationClass">
    <!--导航栏头部-->
    <div class="navClass">全国中小企业直接融资服务平台</div>
    <!--内容部分-->
    <div style="padding: 0 15px;">
        <div class="contentClass clear" style="padding-top:30px">
            <!--左边部分-->
            <div class="left l ">
                <!--左1-->
                <div class="smallBlock">
                    <div class="titleClass">机构库</div>
                    <div class="clear">
                        <div v-for="data in leftList1" class="lightSmark clear l">
                            <div class="l clear">
                                <div class="left1-class l">
                                    <img style="position: relative;left: 28px;top: 17px;" :src="data.src" alt="">
                    </div>
                                    <div class="l" style="margin-top: 20px;margin-left:7px;">
                                        <div style="color:#6EFF8B;font-size:34px;text-align: center">
                                            <i-count-up :start="0" :end="parseInt(data.num)" :decimals="0" :duration="2.5" :options="options"></i-count-up>
                                        </div>
                                        <div style="font-size:14px;font-weight:bold;color:#fff;" v-html="data.name">{{}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--左2-->
                    <div class="smallBlock">
                        <div class="titleClass">分类比例</div>
                        <left2></left2>
                    </div>
                    <!--左3-->
                    <div class="smallBlock">
                        <div class="titleClass">公司分类情况</div>
                        <left3></left3>
                    </div>
                </div>
                <!--中间部分-->
                <div class="center l" style="padding: 0 10px;">
                    <!--中间地图-->
                    <div class="centerTop">
                        <registerMap></registerMap>
                    </div>
                    <!--安全检查情况-->
                    <div class="centerBottomLeft l">
                        <div class="titleClass1" style="padding-left:20px">企业数量</div>
                        <newPortOne></newPortOne>
                    </div>
                    <div class="centerBottomRight l"></div>
                </div>
                <!--右侧部分-->
                <div class="right l">
                    <!--右1-->
                    <div class="smallBlock1">
                        <div>
                            <div class="titleClass" style="padding-left: 210px;">投资行业比例</div>
                            <div class="clear" style="margin-top: 30px; margin-left: 20px;">
                                <div v-for="data in rightList1" class="l right1-class">
                                    <div style="color:#fff;font-weight: bold;font-size:20px;margin-bottom:35px;">{{data.radio}}</div>
                                    <div style="margin-bottom:25px;width: 32px;height: 32px;"><img :src="data.src" alt=""></div>
                                        <div style="color:#D8D8D8;font-size:14px">{{data.name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--右2-->
                        <div class="smallBlock1">
                            <div>
                                <div class="titleClass" style="padding-left: 250px;">投资企业融资</div>
                                <right2></right2>
                            </div>
                        </div>
                        <!--右3-->
                        <div class="smallBlock1">
                            <div>
                                <div class="titleClass" style="padding-left: 250px;">IPO过会数</div>
                                <div style="padding-right: 55px;">
                                    <div class="clear">
                                        <!--扬尘警告和噪声警告-->
                                        <!-- <div class="l">
                    <div style="border:1px solid #2CD4FF;border-radius:5px;padding:5px 7px">
                      <span style="color:#2CD6FF">扬尘警告</span>
                      <span style="color:#207DB9">噪声警告</span>
                    </div>
                  </div> -->
                                        <!--今日&&本周-->
                                        <!-- <div style="margin-top: 20px;" class="r">
                    <div>
                      <span style="color:#2CD6FF">今日</span>
                      <span style="color:#2CD6FF">|</span>
                      <span style="color:#207DB9">本周</span>
                    </div>
                  </div> -->
                                    </div>
                                </div>
                            </div>
                            <right3></right3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import mapSelf from './newMap'
import registerMap from './registerMap'
import left2 from './left2'
import left3 from './left3'
import right2 from './right2'
import right3 from './right3'
import newPortOne from './newPort_1';
import ICountUp from 'vue-countup-v2'
export default {
    name: 'HelloWorld',
    components: {
        mapSelf,
        registerMap,
        left2,
        left3,
        right2,
        right3,
        newPortOne
    },
    data() {
        return {
            options: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            },
            leftList1: [{
                    src: require('../../assets/left1-1.png'),
                    num: '890',
                    name: '投资机构'
                },
                {
                    src: require('../../assets/left1-2.png'),
                    num: '360',
                    name: '&nbsp;&nbsp;&nbsp;&nbsp;LP'
                },
                {
                    src: require('../../assets/left1-3.png'),
                    num: '180',
                    name: '&nbsp;&nbsp;&nbsp;&nbsp;GP'
                },
                {
                    src: require('../../assets/left1-4.png'),
                    num: '350',
                    name: '&nbsp;&nbsp;&nbsp;&nbsp;基金'
                }
            ],
            rightList1: [{
                    radio: '19%',
                    src: require('../../assets/right1-1.png'),
                    name: '新能源'
                },
                {
                    radio: '5%',
                    src: require('../../assets/right1-2.png'),
                    name: '汽车'
                },
                {
                    radio: '21%',
                    src: require('../../assets/right1-3.png'),
                    name: '医药'
                },
                {
                    radio: '32%',
                    src: require('../../assets/right1-4.png'),
                    name: '电子'
                },
                {
                    radio: '23%',
                    src: require('../../assets/right1-5.png'),
                    name: '新工业'
                },
            ],
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.visualizationClass {
    background: url("../../assets/bg1.png") 0 0 no-repeat,
        url("../../assets/bg2.png") 0px 0 no-repeat;
    height: 937px;
}

.navClass {
    text-align: center;
    font-size: 36px;
    line-height: 91px;
    color: #fff;
    width: 100%;
    height: 91px;
    background: url("../../assets/nav.png") 0 0 no-repeat;
}

.contentClass {
    width: 100%;
    background: url("../../assets/bg3.png") 0 0 no-repeat;
    background-size: 100% 100%;
    padding: 25px;
}

.smallBlock {
    width: 487px;
    height: 253px;
    padding-left: 34px;
    background: url("../../assets/left1.png") 0 0 no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
}

.smallBlock1 {
    width: 487px;
    height: 253px;
    padding-left: 34px;
    background: url("../../assets/right1-0.png") 0 0 no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
}

.titleClass {
    color: #B5DEFF;
    font-size: 20px;
    font-weight: bold;
    padding-left: 64px;
    padding-top: 18px;
}

.titleClass1 {
    text-align: left;
    color: #B5DEFF;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
    margin-bottom: 19px;
}

.left1-class {
    width: 79px;
    height: 64px;
    margin-top: 17px;
    background: url("../../assets/left1-0.png") 0 0 no-repeat;
}

.lightSmark {
    margin-bottom: 0px;
    width: 220px;
    height: 81px;
}

.centerTop {
    width: 815px;
    height: 500px;
    background: url("../../assets/center1.png") 0 0 no-repeat;
    background-size: 100% 100%;
    margin-bottom: 10px;
    padding: 15px;
}

.centerBottom {
    width: 815px;
    height: 253px;
    padding: 10px;
    padding-top: 0;
    /* background: url("../../assets/center2.png") 0 0 no-repeat; */
    background-size: 100% 100%;
}

.centerBottomLeft {
    width: 407.5px;
    height: 253px;
    padding: 10px;
    padding-top: 0;
    background: url("../../assets/center2.png") 0 0 no-repeat;
    background-size: 100% 100%;
    display: inline-block;
}

.centerBottomRight {
    width: 407.5px;
    height: 253px;
    padding: 10px;
    padding-top: 0;
    background: url("../../assets/center2.png") 0 0 no-repeat;
    background-size: 100% 100%;
    display: inline-block;
}

.centerBottom-circle {
    width: 159px;
    height: 159px;
    line-height: 159px;
    background: url("../../assets/center2-0.png") 0 0 no-repeat,
        url("../../assets/center2-1.png") 0px 0 no-repeat;
    background-position: center;
}

.centerBottom-circle-1 {
    width: 159px;
    height: 159px;
    line-height: 159px;
    background: url("../../assets/center2-2.png") 0 0 no-repeat,
        url("../../assets/center2-1.png") 0px 0 no-repeat;
    background-position: center;
}

.centerBottom-circle-text {
    color: #fff;
    font-size: 28.5px;
    text-align: center;
}

.centerBottom-circle-text1 {
    color: #fff;
    font-size: 16px;
    padding-left: 31px;
}

.right1-class {
    border-right: 1px solid #138DD8;
    padding-right: 22px;
    margin-right: 22px;
}

.right1-class:last-of-type {
    border: none
}
</style>
