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
                    <div class="item-label">{{$t('circulating')}}</div>
                    <div class="item-text">{{ftCirculation}} <span>FT</span></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('destruction')}}</div>
                    <div class="item-text">{{ftDestruction}} <span>FT</span></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('secondary')}}</div>
                    <div class="item-text">{{ftSecondary}} <span>FT</span></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('yesterdayConvert')}}</div>
                    <div class="item-text">{{yesterdayConvert}}</div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('weekFci06')}}（{{$t('fci06Clock')}}{{fci06_base}}）</div>
                    <div class="item-text">
                        <span :class="fci06_color">{{fci06_rate}}</span>
                        <span :class="fci06_color" class="item-label">（{{$t('fci06Curr')}}{{fci06_curr}})</span>
                    </div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('todayIncome')}}{{$t('todayUndeducted')}}</div>
                    <div class="item-text">
                        <span v-show="status==='normal'">{{todaySummary}} <i>BTC</i></span>
                        <span v-show="status==='calculating'">{{$t('maintain')}}</span>
                        <span v-show="status==='dividend_payment'">{{$t('calculation')}}</span>
                    </div>
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
