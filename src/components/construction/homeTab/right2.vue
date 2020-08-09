<template>
<div v-if="showFlag">
    <div class="right-2-block-1">
        <div class="right-2-title-1"></div>
    </div>
    <div class="right-2-block-2">
        <div class="right-2-block-3" v-for="(data,index) in proDataTitle" :key="'videTableTitle' + index">
            <div class="right-2-block-4"> {{data}}</div>
        </div>
        <div class="right-2-block-5" v-for="(data,index) in proData" :key="'videTable' + index" :style="{'background': index % 2 == 0 ?  'rgba(70,127,224,0.2)' : 'none'}">
            <div class="right-2-block-6">
                {{data.name}}
            </div>

            <div class="right-2-block-6">
                {{data.num}}
            </div>

            <div class="right-2-block-6">
                {{data.online}}
            </div>

            <div class="right-2-block-6">
                {{data.offline}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'right2',
    data() {
        return {
            proDataTitle: [],
            proData: [],
            showFlag: false,
        }
    },
    created() {
        axios.get("../../../static/homeTabJson/right-2.json").then((res) => {
            if (res.data.success) {
                this.proDataTitle = res.data.proDataTitle;
                this.proData = res.data.proData;
                this.showFlag = true;
            }
        })
    },
}
</script>

<style scoped>
.right-2-title-1 {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 209px;
    height: 40px;
    background: url('./images/right/right-icon-3.png') 100% 100% no-repeat
}

.right-2-block-1 {
    position: relative;
}

.right-2-block-1 {
    height: 55px;
    width: 100%;
}

.right-2-block-3,
.right-2-block-6 {
    display: inline-block;
    width: 112px;
}

.right-2-block-5 {
    padding-left: 12px;
}

.right-2-block-6 {
    color: #ffffff;
    font-family: "PingFangSC-Semibold";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    line-height: 29px;
}

.right-2-block-4 {
    margin-top: 20px;
    margin-bottom: 15px;
    color: #ffffff;
    font-family: "PingFangSC-Semibold";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}
</style>
