<template>
    <header class="header-container">
        <div class="header-top">
            <div class="header-top-left">
                <span class="header-entry">FT</span>
                <span class="header-entry">白皮书</span>
                <span class="header-entry">资产透明</span>
                <span class="header-entry">FInsur</span>
                <span class="header-entry">FCandy</span>
            </div>
            <div class="header-top-right">
                <span class="header-top-entry">App下载</span>
                <span class="header-top-entry">简体中文</span>
            </div>
        </div>
        <div class="header-bottom">
            <div class="header-bottom-left">                
                <img class="header-logo" src="./logo.svg" alt="">
                <span style="width: 100px; height: 30px;"> 
                    12
                <i class="icon icon-logo"></i>icon-github
                <i class="icon icon-github"></i>
                </span>
                <span class="header-exchange-entry">主板交易</span>
                <span class="header-exchange-entry">FOne交易</span>
            </div>
            <div class="header-bottom-right">
                <span>巴斯光年</span>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header-container {
        width: 100%;
        color: #737C80;
        background-color: #2F3D45;
        .header-top {
            width: 100%;
            height: 39px;
            line-height: 16px;
            border-bottom: 1px solid #15232C;
            font-size: 13px;
            .header-top-left {
                display: inline-block;
                .header-entry {
                    display: inline-block;
                    padding: 12px 15px 11px 15px;
                    cursor: pointer;
                    &:first-child {
                        padding-left: 27px;    
                        width: 30px;
                    }
                    &:hover {
                        background: #394A53;
                        color: #E9E9E9;
                    }
                }
            }
            .header-top-right {
                display: inline-block;
                float: right;
                .header-top-entry {
                    display: inline-block;
                    margin: 12px 30px 11px 0px;
                    cursor: pointer;
                }
            }
        }
        .header-bottom {
            width: 100%;
            height: 60px;
            color: #E9E9E9;
            font-size: 14px;
            .header-bottom-left {
                display: inline-block;
                .header-logo {
                    width: 133px;
                    height: 28px;
                    margin: 18px 0 0 30px;
                    cursor: pointer;
                }
                .header-exchange-entry {
                    display: inline-block;
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    margin: 10px;
                    text-align: center;
                    vertical-align: top;
                    cursor: pointer;
                    &:hover {
                        background: #394A53;
                    }
                }
            }
            .header-bottom-right {
                float: right;
                display: inline-block;
                margin-right: 30px;
                line-height: 60px;
                font-size: 13px;
                cursor: pointer;
            }
        }
        .header-active-entry {
            background: #394A53;
            color: #E9E9E9;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                
            }
        },
        created() {
            
        },
        methods: {
            
        },
    };
</script>
