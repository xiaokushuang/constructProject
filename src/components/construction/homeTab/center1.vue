<template>
<div class="center1-1Class">
    <div class="upAngle"></div>
    <div class="changeBtnClass clear" style="z-index:2">
        <div @click="handleChange('1')" class="l">实景效果</div>
        <div @click="handleChange('2')" class="r">宣传视频</div>
    </div>
    <img v-show="showImg" src="./images/center/center-icon-2.png" alt="">
    <video style="z-index:-1" v-if="showVide" src="https://vdept.bdstatic.com/4976396259354c684a73364b74524550/325842545a624c74/52947aef42001a838ea9367de0bca21cade3da8c6275cf5d3ade39839dfc412bba283a2bfde0c9011333ad618808f687.mp4?auth_key=1596963813-0-0-951ea098559719818e2ad68092b68ac7" width="813" height="583" autoplay controls="controls">
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
