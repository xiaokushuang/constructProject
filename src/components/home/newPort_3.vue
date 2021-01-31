<template>
<div>
    <div id="main_3">
        <div class="block_1">
            <span style="display: inline-block;width: 100%;text-align: center;padding-top: 38px;font-size: 18px;">累计签单数</span>
            <span style="color: #FFCC66;font-size: 30px;font-family:lcd-font;display: inline-block;width: 100%;text-align: center;padding-top: 10px;">
                 <ICountUp :start="0" :endVal="parseInt(124)" :decimals="0" :duration="2.5" :options="options"></ICountUp>
                </span>
            <!-- <div class="light" style="padding:10px 0px 0px 10px">
                <div class="digits"></div>
            </div> -->
            <div style="text-align: center;padding: 16px 0px 10px 0px;"><span style="display: inline-block;color: #c1c1c1;font-size: 14px;padding-right: 16px;">月总签单数</span>
                <span style="color: #33CCFF;opacity: 0.9;font-size: 20px;font-family:lcd-font"><ICountUp :start="0" :endVal="parseInt(27)" :decimals="0" :duration="2.5" :options="options"></ICountUp></span>
            </div>
            <div style="text-align: center;"><span style="display: inline-block;color: #c1c1c1;font-size: 14px;padding-right: 16px;">日总签单数</span>
                <span style="font-size: 20px;font-family:lcd-font;color: #33CCFF;opacity: 0.9;"><ICountUp :start="0" :endVal="parseInt(8)" :decimals="0" :duration="2.5" :options="options"></ICountUp></span></div>
        </div>
        <div class="block_2">
            <span style="display: inline-block;width: 100%;text-align: center;padding-top: 38px;font-size: 18px;">累计签约金额</span>
            <span style="color: #FFCC66;font-size: 30px;font-family:lcd-font;display: inline-block;width: 100%;text-align: center;padding-top: 10px;">
                <ICountUp :start="0" :endVal="parseInt(175224.96)" :decimals="0" :duration="2.5" :options="options"></ICountUp><span style="left: 2px;font-size: 26px;font-family: none;position: relative;bottom: 3px;">万元</span>
                </span>
            <!-- <div class="light" style="padding:10px 0px 0px 10px">
                <div class="digits"></div>
            </div> -->
            <div style="text-align: center;padding: 15px 0px 10px 0px;"><span style="display: inline-block;color: #c1c1c1;font-size: 14px;padding-right: 16px;">月总签约金额</span>
                <span style="font-size: 20px;font-family:lcd-font;color: #33CCFF;opacity: 0.9;">
                <ICountUp :start="0" :endVal="parseInt(7301.04)" :decimals="0" :duration="2.5" :options="options"></ICountUp><span style="left: 2px;font-size: 18px;font-family: none;position: relative;bottom: 2px;">万元</span>
                    </span>
            </div>
            <div style="text-align: center;"><span style="display: inline-block;color: #c1c1c1;font-size: 14px;padding-right: 16px;">日总签约金额</span>
                <span style="font-size: 20px;font-family:lcd-font;color: #33CCFF;opacity: 0.9;">
                    <ICountUp :start="0" :endVal="parseInt(248.36)" :decimals="0" :duration="2.5" :options="options"></ICountUp><span style="left: 2px;font-size: 18px;font-family: none;position: relative;bottom: 2px;">万元</span>
                    </span></div>
        </div>
    </div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
    name: 'newPort_3',
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
        }
    },
    components: {
        ICountUp
    },
    mounted() {
        // this.clocknum(888)
    },
    methods: {
        clocknum(num) {
            document.querySelectorAll(".digits").innerHTML = "";
            var html = '';
            var strarr = num.toString().split('');
            var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
            for (var i = 0; i < strarr.length; i++) {
                if (strarr[i] == '.') {
                    html += '<div class="dot"></div>'
                } else {
                    var clasname = digit_to_name[strarr[i]];
                    html += '<div class="' + clasname + '">' +
                        '<span class="d1"></span>' +
                        '<span class="d2"></span>' +
                        '<span class="d3"></span>' +
                        '<span class="d4"></span>' +
                        '<span class="d5"></span>' +
                        '<span class="d6"></span>' +
                        '<span class="d7"></span>' +
                        '</div>';
                }
            }
            debugger
            document.querySelectorAll(".digits")[0].innerHTML = html
        }
    }
}
</script>

<style>
#main_3 {
    width: 250px;
    height: 470px;
}

.block_1 {
    background: url("../../assets/group1.png") 0 0 no-repeat;
    background-size: 100% 100%;
    width: 250px;
    height: 215px;
    margin: 20px 0px;
}

.block_2 {
    background: url("../../assets/group1.png") 0 0 no-repeat;
    background-size: 100% 100%;
    width: 250px;
    height: 215px;
    margin: 20px 0px;
}

.light {
    background: transparent;
    height: 60px;
    text-align: center;
}

.digits div {
    text-align: left;
    position: relative;
    width: 28px;
    height: 50px;
    display: inline-block;
    margin: 0 4px;
}

.light .digits div span {
    background-color: #FFCC66;
    border-color: #FFCC66;
}

.digits div span {
    opacity: 0;
    position: absolute;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    transition: 0.25s;
}

.digits div span:before,
.digits div span:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
}

.digits .d1 {
    height: 5px;
    width: 10px;
    top: 0;
    left: 6px;
}

.digits .d1:before {
    border-width: 0 5px 5px 0;
    border-right-color: inherit;
    left: -5px;
}

.digits .d1:after {
    border-width: 0 0 5px 5px;
    border-left-color: inherit;
    right: -5px;
}

.digits .d2 {
    height: 5px;
    width: 10px;
    top: 19px;
    left: 6px;
}

.digits .d2:before {
    border-width: 3px 4px 2px;
    border-right-color: inherit;
    left: -8px;
}

.digits .d2:after {
    border-width: 3px 4px 2px;
    border-left-color: inherit;
    right: -8px;
}

.digits .d3 {
    height: 5px;
    width: 10px;
    top: 39px;
    left: 6px;
}

.digits .d3:before {
    border-width: 5px 5px 0 0;
    border-right-color: inherit;
    left: -5px;
}

.digits .d3:after {
    border-width: 5px 0 0 5px;
    border-left-color: inherit;
    right: -5px;
}

.digits .d4 {
    width: 5px;
    height: 10px;
    top: 7px;
    left: 0;
}

.digits .d4:before {
    border-width: 0 5px 5px 0;
    border-bottom-color: inherit;
    top: -5px;
}

.digits .d4:after {
    border-width: 0 0 5px 5px;
    border-left-color: inherit;
    bottom: -5px;
}

.digits .d5 {
    width: 5px;
    height: 10px;
    top: 7px;
    right: 5px;
}

.digits .d5:before {
    border-width: 0 0 5px 5px;
    border-bottom-color: inherit;
    top: -5px;
}

.digits .d5:after {
    border-width: 5px 0 0 5px;
    border-top-color: inherit;
    bottom: -5px;
}

.digits .d6 {
    width: 5px;
    height: 10px;
    top: 27px;
    left: 0;
}

.digits .d6:before {
    border-width: 0 5px 5px 0;
    border-bottom-color: inherit;
    top: -5px;
}

.digits .d6:after {
    border-width: 0 0 5px 5px;
    border-left-color: inherit;
    bottom: -5px;
}

.digits .d7 {
    width: 5px;
    height: 10px;
    top: 28px;
    right: 5px;
}

.digits .d7:before {
    border-width: 0 0 5px 5px;
    border-bottom-color: inherit;
    top: -5px;
}

.digits .d7:after {
    border-width: 5px 0 0 5px;
    border-top-color: inherit;
    bottom: -5px;
}

/* 1 */
.digits div.one .d5,
.digits div.one .d7 {
    opacity: 1;
}

/* 2 */
.digits div.two .d1,
.digits div.two .d5,
.digits div.two .d2,
.digits div.two .d6,
.digits div.two .d3 {
    opacity: 1;
}

/* 3 */
.digits div.three .d1,
.digits div.three .d5,
.digits div.three .d2,
.digits div.three .d7,
.digits div.three .d3 {
    opacity: 1;
}

/* 4 */
.digits div.four .d5,
.digits div.four .d2,
.digits div.four .d4,
.digits div.four .d7 {
    opacity: 1;
}

/* 5 */
.digits div.five .d1,
.digits div.five .d2,
.digits div.five .d4,
.digits div.five .d3,
.digits div.five .d7 {
    opacity: 1;
}

/* 6 */
.digits div.six .d1,
.digits div.six .d2,
.digits div.six .d4,
.digits div.six .d3,
.digits div.six .d6,
.digits div.six .d7 {
    opacity: 1;
}

/* 7 */
.digits div.seven .d1,
.digits div.seven .d5,
.digits div.seven .d7 {
    opacity: 1;
}

/* 8 */
.digits div.eight .d1,
.digits div.eight .d2,
.digits div.eight .d3,
.digits div.eight .d4,
.digits div.eight .d5,
.digits div.eight .d6,
.digits div.eight .d7 {
    opacity: 1;
}

/* 9 */
.digits div.nine .d1,
.digits div.nine .d2,
.digits div.nine .d3,
.digits div.nine .d4,
.digits div.nine .d5,
.digits div.nine .d7 {
    opacity: 1;
}

/* 0 */
.digits div.zero .d1,
.digits div.zero .d3,
.digits div.zero .d4,
.digits div.zero .d5,
.digits div.zero .d6,
.digits div.zero .d7 {
    opacity: 1;
}

/* dot */
.digits div.dot {
    width: 5px;
}

.dot:after {
    width: 5px;
    height: 5px;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    background-color: #272e38;
}

@font-face {
    font-family: 'lcd-font';
    src: url('./lcdFontStyleN.ttf'); /* IE9 Compat Modes */
   }


</style><style scoped>

</style>
