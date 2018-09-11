<template>
    <layout>
        <div class="page-index" slot="main">
            <banner></banner>
            <symbols></symbols>
            <advantage></advantage>
            <year></year>
            <app></app>
            {{$t('advantage.tip1')}}
            {{$t('common.serverError')}}
        </div>
    </layout>
</template>

<style lang='scss'>
    @import './style.scss';
</style>

<script>
    import vm from './main.js';

    export default vm;
</script>
