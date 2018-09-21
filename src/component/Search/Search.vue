/*
 * @Author: liujikuan 
 * @Date: 2018-09-20 15:13:39 
 * @Last Modified by: liujikuan
 * @Last Modified time: 2018-09-21 19:39:19
 */
<template>
    <div class="module-search">
        <div class="search" ref="searchBox">

            <div class="search-select">
                <div class="select-curr" @click="showType">
                    <span v-if="isSymbolSelect">交易对</span>
                    <span v-if="!isSymbolSelect">机构/推荐者</span>
                    <i v-if="!showSelect" class="icon-right icon-down"></i>
                    <i v-if="showSelect" class="icon-right icon-up"></i>
                </div>
                <div class="select-options" v-if="showSelect">
                    <div @click="setType('symbol')" class="option">交易对</div>
                    <div @click="setType('category')" class="option">机构/推荐者</div>
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
                </ul>

            </div>
            
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
