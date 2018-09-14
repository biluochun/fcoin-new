<template>
    <div class="page-demo" slot="main">
        <a href="javascript:;" class="alert" @click="showAlert">Alert</a>
        <a href="javascript:;" class="confirm" @click="showConfirm">Confirm</a>
    </div>
</template>

<style lang='scss'>

</style>

<script>
    import vm from './main.js';
    export default vm;
</script>
