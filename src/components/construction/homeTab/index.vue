<template>
<div class="homeTabClass">
    <div class="clear">
        <div class="l leftAllClass">
            <div class="bg">
                <div class="left1Class">
                    <left1></left1>
                </div>
            </div>

            <div class="bg">
                <div class="left2Class">
                    <left2></left2>
                </div>
            </div>

        </div>
        <div class="l centerAllClass">
            <div class="bg">
                <div class="center1Class">
                    <center1></center1>
                </div>
            </div>

            <div class="bg">
                <div class="center2Class">
                    <div class="title"></div>
                    <div class="l center-2-1">
                        <center-2-1></center-2-1>
                    </div>
                    <div class="l center-2-2">
                        <center-2-2></center-2-2>
                    </div>
                </div>
            </div>

        </div>
        <div class="l rightAllClass">
            <div class="bg">
                <div class="right1Class">
                    <right1></right1>
                </div>
            </div>

            <div class="bg">
                <div class="right2Class">
                    <right2></right2>
                </div>
            </div>

            <div class="bg">
                <div class="right3Class">
                    <right3></right3>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import left1 from './left1'
import left2 from './left2'
import center1 from './center1'
import center21 from './center21'
import center22 from './center22'
import right1 from './right1'
import right2 from './right2'
import right3 from './right3'
export default {
    components: {
        left1,
        left2,
        center1,
        center21,
        center22,
        right1,
        right2,
        right3
    },
}
</script>

<style lang="scss" scoped>
.homeTabClass {
    /*padding: 0px 25px;*/
    padding-left: 42px;
    .leftAllClass {
        width: 489px;
        margin-right: 10px;

        .left1Class {
            width: 489px;
            height: 583px;
            padding: 20px;
            margin-bottom: 20px;
            background: url("./images/left/left-border-1.png") 0 0 no-repeat;
        }

        .left2Class {
            width: 489px;
            height: 280px;
            padding: 20px;
            background: url("./images/left/left-border-2.png") 0 0 no-repeat;
        }
    }

    .centerAllClass {
        width: 816px;
        margin-right: 10px;

        .center1Class {
            width: 816px;
            height: 584px;
            margin-bottom: 20px;
            background: url("./images/center/center-border-3.png") 0 0 no-repeat;
        }

        .center2Class {
            position: relative;
            width: 816px;
            height: 280px;
            padding: 10px;
            background: url("./images/center/center-border-1.png") 0 0 no-repeat;
        }
    }

    .rightAllClass {
        width: 489px;

        .right1Class {
            width: 489px;
            height: 280px;
            margin-bottom: 20px;
            background: url("./images/right/right-border-1.png") 0 0 no-repeat;
        }

        .right2Class {
            width: 489px;
            height: 280px;
            margin-bottom: 20px;
            background: url("./images/right/right-border-2.png") 0 0 no-repeat;
        }

        .right3Class {
            width: 489px;
            height: 280px;
            background: url("./images/right/right-border-3.png") 0 0 no-repeat;
        }
    }

    .bg {
        background-color: rgba(11, 8, 40, 0.7);
    }

    .title {
        position: relative;
        top: 5px;
        left: 5px;
        width: 209px;
        height: 40px;
        background: url('./images/right/right-icon-2.png') 100% 100% no-repeat
    }

    .center-2-1,
    .center-2-2 {
        display: inline-block;
        background: url('./images/center/center-border-2.png') 100% 100% no-repeat;
        width: calc(50% - 10px);
        height: 200px;
        margin-top: 20px;
        background-size: 100% 100%;
    }

    .center-2-1 {
        position: relative;
        left: 4px;
    }

    .center-2-2 {
        position: relative;
        left: 18px;
    }
}
</style>
