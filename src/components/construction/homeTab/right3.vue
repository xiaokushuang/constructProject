<template>
<div v-if="showFlag">
    <div class="right-3-block-1">
        <div class="right-3-title-1"></div>
    </div>
    <div class="right-3-block-2 lb">
        <div class="right-3-icon-1"></div>
        <div class="right-3-block-3 lb">
            <div class="right-3-block-4 lb">
                <div class="right-3-block-7">
                    <div class="right-3-icon-2 lb"></div>
                    <div class="right-3-text-1 lb">PM10&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="right-3-text-2 lb">{{propData['PM10']}}</div>
                    &nbsp;&nbsp;
                </div>
                <div class="right-3-block-7">
                    <div class="right-3-icon-3 lb"></div>
                    <div class="right-3-text-1 lb">PM2.5&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="right-3-text-2 lb">{{propData['PM2.5']}}</div>
                </div>

            </div>
            <div class="right-3-block-5">
                <div class="right-3-block-7">
                    <div class="right-3-icon-4 lb"></div>
                    <div class="right-3-text-1 lb">噪音&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="right-3-text-2 lb">{{propData['噪音']}}</div>
                    &nbsp;&nbsp;
                </div>
                <div class="right-3-block-7">
                    <div class="right-3-icon-5 lb"></div>
                    <div class="right-3-text-1 lb">温度&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="right-3-text-2 lb">{{propData['温度']}}</div>
                </div>
            </div>
            <div class="right-3-block-6">
                <div class="right-3-block-7">
                    <div class="right-3-icon-6 lb"></div>
                    <div class="right-3-text-1 lb">北风&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="right-3-text-2 lb">{{propData['北风']}}</div>
                    &nbsp;&nbsp;
                </div>
                <div class="right-3-block-7">
                    <div class="right-3-icon-7 lb"></div>
                    <div class="right-3-text-1 lb">湿度&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="right-3-text-2 lb">{{propData['湿度']}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'right3',
    data() {
        return {
            propData: {},
            showFlag:false,
        }
    },
    created() {
        axios.get("../../../static/homeTabJson/right-3.json").then((res) => {
            debugger
            if (res.data.success) {
                this.propData = res.data.propData;
                this.showFlag = true;
            }
        })
    },
}
</script>

<style scoped>
.lb {
    display: inline-block;
    text-align: left;
}

.right-3-block-1,
.right-3-block-2 {
    position: relative;
}

.right-3-block-2 {
    padding-top: 30px;
    padding-left: 15px;
    text-align: left;
    width: 100%;
}

.right-3-block-1 {
    height: 55px;
    width: 100%;
}

.right-3-title-1 {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 209px;
    height: 40px;
    background: url('./images/right/right-icon-4.png') 100% 100% no-repeat;
    display: inline-block;
}

.right-3-icon-1 {
    width: 175px;
    height: 175px;
    background: url('./images/right/right-icon-5.png') 100% 100% no-repeat;
    display: inline-block;
}

.right-3-icon-2 {
    width: 18px;
    height: 18px;
    background: url('./images/right/right-icon-6.png') 100% 100% no-repeat;
    margin-right: 5px;
}

.right-3-icon-3 {
    width: 18px;
    height: 18px;
    background: url('./images/right/right-icon-7.png') 100% 100% no-repeat;
    margin-right: 5px;
}

.right-3-icon-4 {
    width: 18px;
    height: 18px;
    background: url('./images/right/right-icon-8.png') 100% 100% no-repeat;
    margin-right: 5px;
}

.right-3-icon-5 {
    width: 18px;
    height: 18px;
    background: url('./images/right/right-icon-9.png') 100% 100% no-repeat;
    margin-right: 5px;
    position: relative;
    right: 4px;
}

.right-3-icon-6 {
    width: 18px;
    height: 18px;
    background: url('./images/right/right-icon-10.png') 100% 100% no-repeat;
    margin-right: 5px;
}

.right-3-icon-7 {
    width: 18px;
    height: 18px;
    background: url('./images/right/right-icon-11.png') 100% 100% no-repeat;
    margin-right: 5px;
    position: relative;
    right: 4px;
}

.right-3-block-3 {
    position: relative;
    bottom: 48px;
    left: 25px;
}

.right-3-block-4 {}

.right-3-block-5 {
    padding-top: 20px;
}

.right-3-block-6 {
    padding-top: 20px;
}

.right-3-block-7 {
    width: 130px;
    display: inline-block;
}

.right-3-text-1 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    width: 55px;
    position: relative;
    bottom: 2px;
}

.right-3-text-2 {
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    width: 20px;
    position: relative;
    bottom: 2px;
}
</style>
