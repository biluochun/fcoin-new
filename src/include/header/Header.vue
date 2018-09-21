/*
 * @Author: liujikuan 
 * @Date: 2018-09-20 17:48:16 
 * @Last Modified by:   liujikuan 
 * @Last Modified time: 2018-09-20 17:48:16 
 */
<template>
    <header class="module-header">
        <div class="header-top">
            <div class="header-top-left">
                <span class="header-entry">{{$t('header.ft')}}</span>
                <span class="header-entry">{{$t('header.white_paper')}}</span>
                <span class="header-entry">{{$t('header.transparent_assets')}}</span>
                <span class="header-entry">{{$t('header.finsur')}}</span>
                <span class="header-entry">{{$t('header.fcandy')}}</span>
            </div>
            <div class="header-top-right">
                <div v-if="showLangBox" class="lang-box">
                    <p class="lang-item" @click="changeLang($store.state.LANG_CN, LANG_TEXT_CN)">
                        <img class="lang-country" src="./img/Chinese.png" alt="">
                        <span class="text">{{LANG_TEXT_CN}}</span>
                    </p>
                    <p class="lang-item" @click="changeLang($store.state.LANG_EN, LANG_TEXT_EN)">
                        <img class="lang-country" src="./img/English.png" alt="">
                        <span class="text">{{LANG_TEXT_EN}}</span>
                    </p>
                </div>
                <span class="header-top-entry">
                    <i class="icon-app icon-top-left">
                        <i class="path2"></i>    
                    </i>
                    <span>{{$t('header.app_select')}}</span>
                    <!-- <span class="text">{{$t(header.app_select)}}</span> -->
                </span>
                <span class="header-top-entry" @click="showLangBox=!showLangBox">
                    <i class="icon-language icon-top-left">
                        <i class="path2"></i>    
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
                <span class="header-exchange-entry">{{$t('header.exchange')}}</span>
                <span class="header-exchange-entry">{{$t('header.fone_exchange')}}</span>
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
                <span class="user-box" @click="showUserMenu=!showUserMenu" style="display:none;">
                    <i class="icon-user icon-user-size">
                       <i class="path2"></i>  
                    </i>
                    <span class="user-name">巴斯光年</span> 
                    <i :class="[{'icon-down icon-up-down':!showUserMenu},{'icon-up icon-up-down':showUserMenu}]"></i>
                </span>
                <ul class="login-btn">
                    <li class="btn"><a class="link" href="javascript:;">{{$t('header.sign_in')}}</a></li>
                    <li class="btn"><a class="link" href="javascript:;">{{$t('header.sign_up')}}</a></li>
                </ul>
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
