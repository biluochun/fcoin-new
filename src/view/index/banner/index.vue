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
                    <div class="item-text">{{ft_circulation}} <span>FT</span></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('destruction')}}</div>
                    <div class="item-text">{{ft_destruction}} <span>FT</span></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('secondary')}}</div>
                    <div class="item-text">{{ft_secondary}} <span>FT</span></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('yesterday_convert')}}</div>
                    <div class="item-text"></div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('week_fci06')}}（{{$t('fci06_clock')}}{{fci06_base}}）</div>
                    <div class="item-text">
                        <span :class="fci06_color">{{fci06_rate}}</span>
                        <span :class="fci06_color" class="item-label">（{{$t('fci06_curr')}}{{fci06_curr}})</span>
                    </div>
                </li>
                <li class="item">
                    <div class="item-label">{{$t('today_income')}}{{$t('today_undeducted')}}</div>
                    <div class="item-text">
                        <span v-show="status==='normal'">{{today_summary}} <i>BTC</i></span>
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
