<template>
    <header class="header-container">
        <div class="header-top">
            <div class="header-top-left">
                <span class="header-top-entry">FT</span>
                <span class="header-top-entry">白皮书</span>
                <span class="header-top-entry">资产透明</span>
                <span class="header-top-entry">FInsur</span>
                <span class="header-top-entry">FCandy</span>
            </div>
            <div class="header-top-right">
                <span class="header-top-entry">App下载</span>
                <span class="header-top-entry">简体中文</span>
            </div>
        </div>
        <div class="header-bottom">
            bottom
        </div>
    </header>
</template>

<style lang="scss">
    @import '../scss/base.scss';
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
                .header-top-entry {
                    display: inline-block;
                    margin: 12px 0 11px 30px;
                    cursor: pointer;
                }
            }
            .header-top-right {
                display: inline-block;
                float: right;
                .header-top-entry {
                    display: inline-block;
                    margin: 12px 30px 11px 0px;
                }
            }
        }
        .header-bottom {
            
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
