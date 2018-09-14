<template>
    <div id="app" v-wechat-title="'FCoin'">
        <layout>
            <router-view></router-view>
        </layout>
    </div>
</template>

<script>
    import Layout from './include/Layout';
    export default {
        components: {
            Layout
        }
    }
</script>
