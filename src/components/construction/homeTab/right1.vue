<template>
<div v-if="showFlag">
    <div class="right-1-block-1">
        <div class="right-1-title-1"></div>
        <div class="right-1-block-2">
            <span class="right-1-text-1">{{weatherData.tod.location}}</span>
            <span class="right-1-text-2">{{weatherData.tod.time}}</span>
        </div>
    </div>
    <div class="right-1-block-3">
        <div class="right-1-icon-1"></div>
        <div class="right-1-text-3">{{weatherData.tod.curWeather}}</div>
        <div class="right-1-text-4">{{weatherData.tod.curTemp}}</div>
        <div class="right-1-text-5">{{weatherData.tod.situation}}</div>
    </div>
    <div class="right-1-block-4">
        <div class="right-1-block-5">
            <div class="right-1-text-6">南风&nbsp;&nbsp;{{weatherData.tod.wind}}</div>
            <div class="right-1-text-7">降水量&nbsp;&nbsp;{{weatherData.tod.precipitation}}</div>
            <div class="right-1-text-8">温度&nbsp;&nbsp;{{weatherData.tod.humidity}}</div>
            <div class="right-1-text-9">大气压&nbsp;&nbsp;{{weatherData.tod.pressure}}</div>
        </div>
        <div class="right-1-block-6">
            <div class="right-1-block-7">
                <div class="right-1-text-10">{{weatherData.tod.type}}&nbsp;</div>
                <div class="right-1-text-12">{{weatherData.tod.situation}}&nbsp;</div>
                <div class="right-1-icon-2"></div>

                <div class="right-1-text-13">{{weatherData.tod.tempRange}}</div>
            </div>
            <div class="right-1-block-8">
                <div class="right-1-text-14">{{weatherData.tor.type}}&nbsp;</div>
                <div class="right-1-text-15">{{weatherData.tor.situation}}&nbsp;</div>
                <div class="right-1-icon-3"></div>
                <div class="right-1-text-16">{{weatherData.tor.tempRange}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "right1",
    data() {
        return {
            weatherData: {},
            showFlag:false,
        }
    },
    created() {
        axios.get("../../../static/homeTabJson/right-1.json").then((res) => {
            if (res.data.success) {
                this.weatherData = res.data.weatherData;
                this.showFlag = true;
            }
        })
    },
}
</script>

<style scoped>
.right-1-title-1 {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 209px;
    height: 40px;
    background: url('./images/right/right-icon-2.png') 100% 100% no-repeat
}

.right-1-block-1,
.right-1-block-2 {
    position: relative;
}

.right-1-block-1 {
    height: 55px;
    width: 100%;
}

.right-1-block-2 {
    display: inline-block;
    position: absolute;
    right: 45px;
    top: 22px;
}

.right-1-text-1 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
}

.right-1-text-2 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
    padding-left: 25px;
}

.right-1-block-3 {
    text-align: left;
    padding-top: 10px;
}

.right-1-icon-1 {
    display: inline-block;
    width: 120px;
    height: 120px;
    position: relative;
    left: 15px;
    background: url('./images/right/right-icon-1.png') 100% 100% no-repeat
}

.right-1-text-3 {
    display: inline-block;
    position: relative;
    bottom: 23px;
    padding-left: 20px;
}

.right-1-text-4 {
    display: inline-block;
    position: relative;
    bottom: 23px;
    padding-left: 80px;
    color: #ffffff;
    font-family: "PingFangSC-Light";
    font-size: 64px;
    font-weight: 400;
    line-height: 81px;
}

.right-1-text-5 {
    display: inline-block;
    position: relative;
    bottom: 23px;
    width: 33px;
    text-align: center;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    border-radius: 4px;
    background: #0d1137;
    box-shadow: inset 0px 1px 27px rgba(75, 137, 255, 0.5);
}

.right-1-block-5 {
    text-align: left;
    display: inline-block;
    padding-left: 15px;
    width: 50%;

    border-right: solid 1px #2d99ff;
}

.right-1-block-6 {
    text-align: left;
    display: inline-block;
    width: calc(50% - 15px);
}

.right-1-block-7 {
    display: inline-block;
    padding-left: 20px;
}

.right-1-block-8 {
    display: inline-block;
    padding-left: 20px;
}

.right-1-block-4 {
    text-align: left;
    padding-top: 10px;
}

.right-1-text-6 {
    display: inline-block;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    width: 35%;
}

.right-1-text-7 {
    display: inline-block;
    padding-left: 30px;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}

.right-1-text-8 {
    display: inline-block;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    width: 35%;
}

.right-1-text-9 {
    display: inline-block;
    padding-left: 30px;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}

.right-1-text-10,
.right-1-text-11,
.right-1-text-12,
.right-1-text-13,
.right-1-text-14,
.right-1-text-15,
.right-1-text-16 {
    display: inline-block;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}

.right-1-text-13,
.right-1-text-16 {
    padding-left: 20px;
}

.right-1-icon-2,
.right-1-icon-3 {
    display: inline-block;
    padding-left: 25px;
}

.right-1-icon-2 {
    width: 16px;
    height: 16px;
    padding-left: 25px;
    background: url('./images/right/right-icon-12.png') 100% 100% no-repeat
}

.right-1-icon-3 {
    width: 16px;
    height: 16px;
    padding-left: 25px;
    background: url('./images/right/right-icon-13.png') 100% 100% no-repeat
}
</style>
