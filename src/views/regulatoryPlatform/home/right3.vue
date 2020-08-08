<template>
<div>
    <div class="right-3">
        <div class="title-1">视频监控</div>
        <div class="l right-3-1">
            <div class="l right-3-1-block-1">
                <div class="right-3-1-icon-1">
                    <div class="right-3-1-icon-2"></div>
                </div>
            </div>
            <div class="l right-3-1-block-2">
                <span class="right-3-1-text-2">6</span>
                <span class="right-3-1-text-3">摄像头总数</span>
            </div>
            <div class="l right-3-1-block-3">

                <div class="right-3-1-icon-1">
                    <div class="right-3-1-icon-3"></div>
                </div>
            </div>
            <div class="l right-3-1-block-4">
                <span class="right-3-1-text-6">15</span>
                <span class="right-3-1-text-7">在线视频</span>
            </div>
        </div>

        <div class="l right-3-2">
            <div class="right-3-2-icon-1"></div>
            <div class="right-3-2-block-1">
                <span class="right-3-2-text-1">监控时间：</span><span class="right-3-2-text-2">2020.7.16 12:30</span>
            </div>
            <div class="right-3-2-block-2">
                <span class="right-3-2-text-3">违规问题：</span><span class="right-3-2-text-4">未戴安全帽2人</span>
            </div>
            <div class="right-3-2-block-3">
                <span class="right-3-2-text-5">项目名称：</span><span class="right-3-2-text-6">项目十</span>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "right3",
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

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

.right-3 {
    /* background-image: url('../images/right/right-border-1.png'); */
    width: 497px;
    height: 252px;

}

.right-3-1 {
    width: 170px;
    height: 151px;
    padding-left: 18px;
}

.right-3-1-block-1 {
    width: 56px;
    height: 45px;
}

.right-3-1-block-2 {
    width: 84px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    margin-left: 12px;
}

.right-3-1-block-3 {
    width: 56px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    padding-top: 54px;
}

.right-3-1-block-4 {
    width: 84px;
    height: 45px;
    font-size: 14px;
    font-weight: 290;
    line-height: 22.5px;
    margin-left: 12px;
    padding-top: 54px;
}

.right-3-1-text-2 {
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

.right-3-1-text-3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-3-1-text-4 {
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

.right-3-1-text-5 {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #c2d8ff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-3-1-text-6 {
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

.right-3-1-text-7 {
    display: inline-block;
    width: 100%;
    color: #c2d8ff;
    text-align: center;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
}

.right-3-1-icon-1 {
    width: 56px;
    height: 46px;
    background: url('../images/right/right-icon-1.png') no-repeat;
}

.right-3-1-icon-2 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 18px;
    height: 19px;
    background: url('../images/right/right-icon-6.png') no-repeat;
}

.right-3-1-icon-3 {
    width: 19px;
    position: relative;
    top: 17px;
    left: 19px;
    height: 19px;
    background: url('../images/right/right-icon-7.png') no-repeat;
}

.right-3-2 {
    width: 237px;
    position: relative;
    bottom: 22px;
    margin-left:35px;
}

.right-3-2-icon-1 {
    width: 237px;
    height: 118px;
    background: url('../images/right/right-icon-9.png') no-repeat;
    background-size: 100% 100%;
    margin-bottom: 5px;
}

.right-3-2-block-1 {
    height: 21px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 21px;
    text-align: left;

}

.right-3-2-block-2 {
    height: 21px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 21px;
    text-align: left;
}

.right-3-2-block-3 {
    height: 21px;
    color: #ffffff;
    font-family: "Microsoft YaHei";
    font-size: 14px;
    font-weight: 290;
    line-height: 21px;
    text-align: left;
}
</style>
