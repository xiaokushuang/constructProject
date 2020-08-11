<template>
<div class="center1-1Class">
    <div class="upAngle"></div>
    <div class="changeBtnClass clear" style="z-index:100">
        <div @click="handleChange('1')" class="l" style="cursor:pointer">实景效果</div>
        <div @click="handleChange('2')" class="r" style="cursor:pointer">宣传视频</div>
    </div>
    <img v-show="showImg" src="./images/center/center-icon-2.png" alt="">
    <video style="z-index:-1" v-if="showVide" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" width="813" height="583" autoplay controls="controls">
    </video>
    <div class="downAngle"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showImg: true,
            showVide: false,
        }
    },
    methods: {
        handleChange(type) {
            if (type == '1') {
                this.showImg = true;
                this.showVide = false;
            } else {
                this.showImg = false;
                this.showVide = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.center1-1Class {
    position: relative;

    .changeBtnClass {
        cursor: pointer;
        position: absolute;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
        width: 100%;
        padding: 10px 143px;
    }

    .downAngle {
        background: url("./images/center/center-icon-4.png") 0 0 no-repeat;
        width: 816px;
        height: 74px;
        position: absolute;
        bottom: 3px;
        right: 0px;
        background-size: 100% 100%;
        z-index: 99;
    }

    .upAngle {
        background: url("./images/center/center-icon-5.png") 0 0 no-repeat;
        width: 829px;
        height: 39px;
        position: absolute;
        right: -5px;
        top: -8px;
        z-index: 99;
        background-size: 100% 100%;
    }
}
</style>
