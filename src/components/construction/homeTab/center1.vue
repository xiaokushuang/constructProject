<template>
<div class="center1-1Class">
    <div class="changeBtnClass clear" style="z-index:2">
        <div @click="handleChange('1')" class="l">实景效果</div>
        <div @click="handleChange('2')" class="r">宣传视频</div>
    </div>
    <img v-show="showImg" src="./images/center/center-icon-2.png" alt="">
    <video style="z-index:-1" v-if="showVide" src="https://vdept.bdstatic.com/446c6b3841514932536677353949617a/58775a7339796d41/979d2b5f5ef257426fb98734eb0d38777cfa91d1e79f74edf181b30e395a50961d7ed1533c3876513c3d7797020f8048.mp4?auth_key=1596956473-0-0-f07d5235cf493fc56e413b934d38b078" width="813" height="583" autoplay controls="controls">
    </video>
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
}
</style>
