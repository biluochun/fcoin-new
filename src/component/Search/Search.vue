/*
 * @Author: liujikuan 
 * @Date: 2018-09-20 15:13:39 
 * @Last Modified by: liujikuan
 * @Last Modified time: 2018-09-21 17:59:19
 */
<template>
    <div class="module-search">

                        <div class="search" ref="searchBox">

                            <div class="search-select">
                                <div class="select-curr">
                                    <span>交易对</span>
                                    <!-- <span>机构/推荐者</span> -->
                                    <i class="icon-right icon-down"></i>
                                    <!-- <i class="icon-right icon-up"></i> -->
                                </div>
                                <div class="select-options" v-if="true">
                                    <div class="option">交易对</div>
                                    <div class="option">机构/推荐者</div>
                                </div>
                            </div>
                            <div class="search-input">
                                <input class="input" type="text" ref="searchInput">
                                <i class="icon-search"></i>

                                <ul ref="ulSymbol" class="search-symbol">
                                    <li class="item">
                                        <a class="item-a" href="javascript:;">
                                            <span class="symbol">
                                                <span class="text">FT/USDT</span>
                                                <span class="text"></span>
                                            </span>
                                            <em class="category">(老姚严选)</em>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a class="item-a" href="javascript:;">
                                            <span class="symbol">
                                                <span class="text">FT/USDT</span>
                                                <span class="text"></span>
                                            </span>
                                            <em class="category">(老姚严选)</em>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a class="item-a" href="javascript:;">
                                            <span class="symbol">
                                                <span class="text">FT/USDT</span>
                                                <span class="text"></span>
                                            </span>
                                            <em class="category">(老姚严选)</em>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a class="item-a" href="javascript:;">
                                            <span class="symbol">
                                                <span class="text">FT/USDT</span>
                                                <span class="text"></span>
                                            </span>
                                            <em class="category">(老姚严选)</em>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            
                            <!-- <div class="search-box-input">
                                <input class="input" type="text" v-model="searchValue" ref="searchInput" @keyup.up="keydownOrUp('up')" @keyup.down="keydownOrUp('down')" @keyup.enter="searchEnter" @input="_search">
                                <span class="search-icon" @click="searchFocus"></span>
                            </div>


                            <div class="search-box-select">
                                <div class="select-box more-select" @click="showType"  v-bind:class="{active: moreSelectStatus}" >
                                    <div class="select-curr">
                                        <span v-if="isSymbolSelect">{{$t('fone.symbol')}}</span>
                                        <span v-if="!isSymbolSelect">{{$t('fone.search_option')}}</span>
                                        <i class="icon icon-down"></i>
                                    </div>
                                    <div class="select-options more select-position" :class="{active : moreSelectStatus}">
                                        <div @click="setType('symbol')" class="option">{{$t('fone.symbol')}}</div>
                                        <div @click="setType('category')" class="option">{{$t('fone.search_option')}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="search-box-input">
                                <input class="input" type="text" v-model="searchValue" ref="searchInput" @keyup.up="keydownOrUp('up')" @keyup.down="keydownOrUp('down')" @keyup.enter="searchEnter" @input="_search">
                                <span class="search-icon" @click="searchFocus"></span>
                            </div> -->
                            <!-- <ul ref="ulSymbol" v-if="(searchValue !=='') && (searchSymbolData.length > 0) && hasInitData" class="search-box-ul">
                                <li v-for="(item, index) in searchSymbolData" :key="index" class="item">
                                    <a 
                                        class="item-a"
                                        @mouseover="hoverOption(index)"
                                        :href="`${exchange_url}/ex/${item.categoryForSearch.category_suffix}/${item.base_currency}-${item.quote_currency}`">
                                        <em class="category" v-if="$store.state.lang === 'zh-cn'">{{item.categoryForSearch.category_name_cn}}</em>
                                        <em class="category" v-if="$store.state.lang === 'en-us'">{{item.categoryForSearch.category_name_en}}</em>
                                        <span class="symbol">
                                            <span class="text" v-html="formatSearchResult(item.base_currency.toUpperCase())"></span>
                                            <span class="text">/{{(item.quote_currency).toUpperCase()}}</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul ref="ulCategory" v-if="(searchValue !=='') && (searchCategoryData.length > 0)" class="search-box-ul">
                                <li v-for="(item, index) in searchCategoryData" :key="index" class="item" @mouseover="hoverOption(index)">
                                    <router-link class="item-a" :to="`/category/${item.category_suffix}`">
                                        <em class="category">{{Number(item.total_usdt).toFixed(2)+' USDT'}}</em>
                                        <span v-if="$store.state.lang === 'zh-cn'" v-html="formatSearchResult(item.category_name_cn)"></span>
                                        <span v-if="$store.state.lang === 'en-us'" v-html="formatSearchResult(item.category_name_en)"></span>
                                    </router-link>
                                </li>
                            </ul> -->
                            <!-- <ul v-if="(searchValue !=='') && !hasInitData" class="search-box-ul">
                                <li  class="item">
                                    <a class="item-a item-a-center" href="javascript:;">{{$t('fone.search_loading')}}</a>
                                </li>
                            </ul>
                            <ul v-if="((searchValue !=='') && hasInitData && (searchSymbolData.length === 0) && isSymbolSelect)" class="search-box-ul">
                                <li  class="item">
                                    <a class="item-a item-a-center" href="javascript:;">{{$t('fone.no_data')}}</a>
                                </li>
                            </ul>
                            <ul v-if="((searchValue !=='') && hasInitData && (searchCategoryData.length === 0) && !isSymbolSelect)" class="search-box-ul">
                                <li  class="item">
                                    <a class="item-a item-a-center" href="javascript:;">{{$t('fone.no_data')}}</a>
                                </li>
                            </ul> -->
                        </div>
        
    </div>
</template>

<style lang='scss'>
    @import './search.scss';
</style>

<script>
    import vm from './search.js';
    export default vm;
</script>
