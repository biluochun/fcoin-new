<template>
    <header class="module-header">
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
                        <img class="lang-country" src="./img/Chinese.png" alt="">
                        <span class="text">简体中文</span>
                    </p>
                    <p class="lang-item" @click="changeLang('English')">
                        <img class="lang-country" src="./img/English.png" alt="">
                        <span class="text">English</span>
                    </p>
                </div>
                <span class="header-top-entry">
                    <i class="icon-app icon-top-left">
                        <i class="path1"></i><i class="path2"></i>    
                    </i>
                    <span class="text">App下载</span>
                </span>
                <span class="header-top-entry" @click="showLangBox=!showLangBox">
                    <i class="icon-language icon-top-left">
                        <i class="path1"></i><i class="path2"></i>    
                    </i>
                    <span class="text">{{langText}}</span>
                </span>
            </div>
        </div>
        <div class="header-bottom">
            <div class="header-bottom-left">                
                <img class="header-logo" src="../../img/logo.png" alt="">
                <!-- <span class="header-logo">
                    <i class="icon-logo icon-logo-size">
                        <i class="path1"></i><i class="path2"></i>   
                    </i>
                </span> -->
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
                <span class="user-box" @click="showUserMenu=!showUserMenu">
                    <i class="icon-user icon-user-size">
                        <i class="path1"></i><i class="path2"></i>    
                    </i>
                    <span class="user-name">巴斯光年</span> 
                    <i v-if="!showUserMenu" class="icon-down icon-up-down"></i>
                    <i v-if="showUserMenu" class="icon-up icon-up-down"></i>
                </span>
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
