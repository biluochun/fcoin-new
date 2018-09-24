<template>
    <div class="module-table">
        <div class="table-nav">
            <ul>
                <li :class="{'active':tabTitle==='selection'}" @click="tabTable('selection')">自选</li>
                <li :class="{'active':tabTitle==='usdt'}" @click="tabTable('usdt')">USDT</li>
                <li v-show="tabSymbol==='main'" :class="{'active':tabTitle==='btc'}" @click="tabTable('btc')">BTC</li>
                <li :class="{'active':tabTitle==='eth'}" @click="tabTable('eth')">ETH</li>
            </ul>
        </div>
        <div class="table">
            <div v-if="!symbolList.length&&tabTitle==='selection'">
                <p>暂无收藏</p>
            </div>
            <div v-else-if="!symbolList.length">
                <p>暂无数据</p>
            </div>
            
            <table v-if="symbolList.length">
                <thead>
                    <tr>
                        <td>交易对</td>
                        <td>最新价格</td>
                        <td>24h涨幅</td>
                        <td>24h高点</td>
                        <td>24h低点</td>
                        <td>24h交易量</td>
                        <td>去交易</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item,index) in symbolList' :key='index'>
                        <td>
                            <span :class="['icon',{'active':checkActive(item.symbol)}]" @click='setCollection(item)'></span>
                            {{(item.base_currency).toUpperCase()}}/{{(item.quote_currency).toUpperCase()}}
                        </td>
                        <td>59.3900/$600.00</td>
                        <td>+0.80</td>
                        <td>+0.80</td>
                        <td>598.3900</td>
                        <td>598.3900</td>
                        <td><img src="./img/exchange.png" alt=""></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import vm from './main.js'
export default vm
</script>
<style lang='sass'>
@import './style.scss'
</style>


