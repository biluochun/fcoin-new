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
                <div v-if="showLangBox" class="lang-box">
                    <p class="lang-item" @click="changeLang('简体中文')">
                        <img class="lang-country" src="./img/Chinese.png" alt="">简体中文
                    </p>
                    <p class="lang-item" @click="changeLang('English')">
                        <img class="lang-country" src="./img/English.png" alt="">English
                    </p>
                </div>
                <span class="header-top-entry">App下载</span>
                <span class="header-top-entry" @click="showLangBox=!showLangBox">{{langText}}</span>
            </div>
        </div>
        <div class="header-bottom">
            <div class="header-bottom-left">                
                <img class="header-logo" src="./logo.svg" alt="">
                <!-- <span style="width: 100px; height: 30px;"> 
                    <i class="icon icon-logo"></i>
                    <i class="icon icon-github"></i>
                </span> -->
                <!-- <i class="icon icon-logo header-logo"></i> -->
                <span class="header-exchange-entry">主板交易</span>
                <span class="header-exchange-entry">FOne交易</span>
            </div>
            <div class="header-bottom-right">
                <div v-if="showUserMenu" class="user-menu">
                    <p class="menu-item">交易</p>
                    <p class="menu-item">账户</p>
                    <p class="menu-item">订单管理</p>
                    <p class="menu-item">财务明细</p>
                    <p class="menu-item">设置</p>
                    <p class="menu-item">退出</p>
                </div>
                <span @click="showUserMenu=!showUserMenu">巴斯光年老铁</span>
            </div>
        </div>
    </header>
</template>
 <style lang="scss">
    @import './header.scss';
</style>
 <script>
    import vm from './header.js'
    export default vm
</script>