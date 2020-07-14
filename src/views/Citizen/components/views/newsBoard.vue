<template>
    <div class="news-board-container">
        <div class="inner-title">
            <h2 class="title">{{ $t(newsTitle)}}</h2>
            <div class ='cboth'></div>
        </div>
        <div class="link-title">
            <div class="link">
                <a class="view-all">{{$t('city.news.board.view_all')}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['newsTitle'],
}
</script>


<style lang="less" scoped>
    .news-board-container{
        width: 100%;
        margin:0px auto;
        margin-top: 40px;
        display: flex;
        min-width: 120px;
        max-width: 1140px;
    }
    h2{
        font-family: 'Electrolize',Arial,Helvetica,sans-serif;
        font-size: 500 18px/18px Orbitron;
        text-transform: uppercase; 
        left: 30px;
        letter-spacing: 2px;
        text-align: left;
        margin: 0.83em 0;
    }
    .inner-title>*{
        position: relative;
    }
    .inner-title {
        flex: 1;
        position: relative;
        &::after{
            content: '';
            width: calc(100% + 4px);
            height: 1px;
            background: #0a5688;
            display: block;
            position: absolute;
            top: 45px;
        }
        .title{
            color: #00e7ff;
            &::after{
                content: '/';
                padding-left: 7px;
                padding-right: 7px;
            }
        }
    }
    
    .cboth {
        display: block;
        clear: both;
        font-size: 1px;
        line-height: 1px;
        float: none;
    }

    // link-title
    .link-title {
        padding-left: 22px;
        position: relative;
        margin-top: 34px;
        &::before{
            width: 6px;
            height: 16px;
            content: '';
            background: #43edf8;
            box-shadow: 14px 2px 50px 4px rgba(0, 112, 202, 0.79), 2px 2px 12px 1px rgba(0, 112, 202, 0.5);
            top: -4px;
            left: 8px;
            position: absolute;
            -webkit-transform: skew(-45deg);
            -ms-transform: skew(-45deg);
            transform: skew(-45deg);
            z-index: 2;
        }
        .link{
            top: -4px;
            text-transform: uppercase;
            font-family: Electrolize,sans-serif,Arial,Verdana;
            font-size: 12px;
            color: #2c799f;
            padding: 10px 16px 0 14px;
            position: relative;
            transition-duration: 0.3s;
            perspective: 1000;
            z-index: 1;
            &:hover{
                color: #43edf8;
                &::after{
                    width: calc(100% + 6px);
                    box-shadow: 14px 12px 50px 7px rgba(0, 112, 202, 0.79), 0 0 12px 1px rgba(0, 112, 202, 0.6)
                }
            }
            &::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 1px;
                background: #0a5688;
                display: block;
                top: 0;
                left: 0;
            }
            &::after{
                content: '';
                position: absolute;
                background: #43edf8;
                transform: skew(-45deg);
                -webkit-transform: skew(-45deg);
                -ms-transform: skew(-45deg);
                height: 4px;
                width: 0;
                top: -3px;
                left: -5px;
                transition-duration: 0.2s;
                -moz-transition-duration: 0.2s;
                -o-transition-duration: 0.2s;
                perspective: 1000;
                -webkit-perspective: 1000;
            }
        }
    }
    .view-all {
        font-family: Electrolize,sans-serif,Arial,Verdana;
        font-size: 12px;
        color: #0788b9;
        transition-duration: 0.3s;
        perspective: 1000;
        margin-right: 15px;
        text-transform: uppercase;
        &:hover{
            color: #43edf8;
        }
    }
</style>

