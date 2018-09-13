<template>
    <div class="module-advantage">
        <modal title="温馨提示"
               :show="isShowDemo === true"
               :on-hide="hideDialog"
               :on-confirm="submit">
            <div class="advantage-content">这里是内容</div>
        </modal>
    </div>
</template>

<style lang='scss'>
    @import './style.scss';
</style>

<script>
    import vm from './main.js';
    export default vm;
</script>
