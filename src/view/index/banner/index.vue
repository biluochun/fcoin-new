<template>
    <div class="module-banner">
        <swiper-banner :bannerlist='bannerList'></swiper-banner>
        <div class="banner-notice">
            <div class="notice-item">
                <h5 class="title">社区治理公告</h5>
                <ul class="list">
                    <li v-for="(item,index) in communityAnnouncementList" :key='index' class="item fn-ellipsis">
                        <a :href="item.html_url" class="link">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="notice-item">
                <h5 class="title">平台公告</h5>
                <ul class="list">
                    <li v-for="(item,index) in mainAnnouncementList" :key='index' class="item fn-ellipsis">
                        <a :href="item.html_url" class="link">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="banner-tip">
            <ul class="list">
                <li class="item">
                    <div class="item-label">{{$t('banner.circulating')}}</div>
                    <div class="item-text"></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('banner.destruction')}}</div>
                    <div class="item-text"></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('banner.secondary')}}</div>
                    <div class="item-text"></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('banner.yesterday_convert')}}</div>
                    <div class="item-text"></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('banner.week_fci06')}}</div>
                    <div class="item-text"></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('banner.today_income')}}</div>
                    <div class="item-text"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    /**
     * @file
     * @author jinguangguo
     * @date 2018/9/12 上午10:00
     */
    import vm from './main.js';
    export default vm;
</script>

<style lang="scss">
    @import "./style";
</style>
