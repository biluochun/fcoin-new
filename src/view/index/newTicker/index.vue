<template>
    <div class="module-ticker">
        <div class="index-title ticker-title">
            <ul>
                <li :class="{'active':tabFlag==='main'}" @click="toggleTicker('main')"><h3>主板交易</h3></li>
                <li :class="{'active':tabFlag==='fone'}"  @click="toggleTicker('fone')"><h3>FOne交易</h3></li>
            </ul>
        </div>
        <div class="layout-container">
            <table-box :tabSymbol='tabFlag'></table-box>
        </div>
    </div>
</template>
<script>
import vm from './main.js'
export default vm
</script>
<style lang="scss">
@import './style.scss';
</style>


