<template>
    <div class="module-advantage">
       <h3 class="index-title module-advantage-title">{{$t('advantage')}}</h3>
       <div class="layout-container">
            <div class="module-advantage-nav">
                <ul class="advantage-nav-list">
                    <li :class="['item',{'active':currentTab==='advantage_1_title'}]" @mousemove="toggleTab('advantage_1_title')">{{$t('advantage_1.title')}}</li>
                    <li :class="['item',{'active':currentTab==='advantage_2_title'}]" @mousemove="toggleTab('advantage_2_title')">{{$t('advantage_2.title')}}</li>
                    <li :class="['item',{'active':currentTab==='advantage_3_title'}]" @mousemove="toggleTab('advantage_3_title')">{{$t('advantage_3.title')}}</li>
                    <li :class="['item',{'active':currentTab==='advantage_4_title'}]" @mousemove="toggleTab('advantage_4_title')">{{$t('advantage_4.title')}}</li>
                    <li :class="['item',{'active':currentTab==='advantage_5_title'}]" @mousemove="toggleTab('advantage_5_title')">{{$t('advantage_5.title')}}</li>
                    <li :class="['item',{'active':currentTab==='advantage_6_title'}]" @mousemove="toggleTab('advantage_6_title')">{{$t('advantage_6.title')}}</li>
                </ul>
            </div>
            <div class="module-advantage-content">
                <ul class="advantage-content-list">
                    <li class="item" v-show="currentTab==='advantage_1_title'">
                        <div class="item-text">
                            <h5 class="title">{{$t('advantage_1.title')}}</h5>
                            <p class="word" v-html="$t('advantage_1.word')"></p>
                        </div>
                        <div class="item-pic">
                            <img src="./img/advantage_1_title.png" alt="">
                        </div>
                    </li>
                    <li class="item" v-show="currentTab==='advantage_2_title'">
                        <div class="item-text">
                            <h5 class="title">{{$t('advantage_2.title')}}</h5>
                            <p class="word" v-html="$t('advantage_2.word')"></p>
                        </div>
                        <div class="item-pic">
                            <img src="./img/advantage_2_title.png" alt="">
                        </div>
                    </li>
                    <li class="item" v-show="currentTab==='advantage_3_title'">
                        <div class="item-text">
                            <h5 class="title">{{$t('advantage_3.title')}}</h5>
                            <p class="word" v-html="$t('advantage_3.word')"></p>
                        </div>
                        <div class="item-pic">
                            <img src="./img/advantage_3_title.png" alt="">
                        </div>
                    </li>
                    <li class="item" v-show="currentTab==='advantage_4_title'">
                        <div class="item-text">
                            <h5 class="title">{{$t('advantage_4.title')}}</h5>
                            <p class="word" v-html="$t('advantage_4.word')"></p>
                        </div>
                        <div class="item-pic">
                            <img src="./img/advantage_4_title.png" alt="">
                        </div>
                    </li>
                    <li class="item" v-show="currentTab==='advantage_5_title'">
                        <div class="item-text">
                            <h5 class="title">{{$t('advantage_5.title')}}</h5>
                            <p class="word" v-html="$t('advantage_5.word')"></p>
                        </div>
                        <div class="item-pic">
                            <img src="./img/advantage_5_title.png" alt="">
                        </div>
                    </li>
                    <li class="item" v-show="currentTab==='advantage_6_title'">
                        <div class="item-text">
                           <h5 class="title">{{$t('advantage_6.title')}}</h5>
                            <p class="word" v-html="$t('advantage_6.word')"></p>
                        </div>
                        <div class="item-pic">
                            <img src="./img/advantage_6_title.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>

<style lang='scss'>
    @import './style.scss';
</style>
<script>
    import vm from './main.js';
    export default vm;
</script>
