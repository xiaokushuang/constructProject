<template>
<div style="padding-top:30px">
    <div class="center-2-2-block-1">
        <span>{{currentNum}}</span>
    </div><br>
    <div class="center-2-2-block-2">
        <span>{{currentState}}</span>
    </div>

    <div class="center-2-2-block-3">
        <span class="center-2-2-text-1">
            {{minNum}}
        </span>
        <progress :value="currentNum" :max="maxNum"></progress>
        <span class="center-2-2-text-2">
            {{maxNum}}
        </span>
    </div>

    <div class="center-2-2-block-4">
        <span class="center-2-2-text-3">{{startTime}}</span>
        <span class="center-2-2-text-4">{{endTime}}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'center22',
    data() {
        return {
            currentNum: '364',
            currentState: '已施工',
            minNum: '0',
            maxNum: '700',
            startTime: '2019-08-01开工',
            endTime: '2019-08-01竣工',
        }
    }
}
</script>

<style scoped>
progress::-webkit-progress-bar {
    background-color: #17265a;
    border-radius: 0.2rem;
}

progress::-webkit-progress-value {
    background-image: linear-gradient(to right, rgb(17, 62, 142), rgb(30, 206, 245));
    border-radius: 2rem;

}

progress {
    width: 262px;
    height: 9px;
    border-radius: 0.1rem;
}

.center-2-2-block-1 {
    width: 57px;
    height: 44px;
    color: #cef4ff;
    font-family: Impact;
    font-size: 36px;
    font-stretch: condensed;
    font-weight: 400;
    line-height: 44px;
    text-align: center;
    display: inline-block;
}

.center-2-2-block-2 {
    width: 42px;
    height: 18px;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    display: inline-block;
}

.center-2-2-block-3 {
    position: relative;
    width: 262px;
    padding-top:10px;
    margin: auto;
}

.center-2-2-block-4 {
    position: relative;
    width: 262px;
    margin: auto;
    text-align: left;
}

.center-2-2-text-1 {
    position: relative;
    right: 49%;
}

.center-2-2-text-2 {
    position: relative;
    bottom: 35px;
    left: 45%;
}

.center-2-2-text-3 {
    display: inline-block;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
}

.center-2-2-text-4 {
    display: inline-block;
    color: #ffffff;
    font-family: "PingFangSC-Regular";
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    position: absolute;
    right: 0px;
    top: 2px;
}
</style>
