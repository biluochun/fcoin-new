<template>
    <div class="layout">
        <layout-header></layout-header>
        <slot></slot>
        <!--<layout-footer></layout-footer>-->
    </div>
</template>

<script>
    import Header from './header/Header.vue';
    import Footer from './footer/Footer.vue';

    export default {
        components: {
            layoutHeader: Header,
            layoutFooter: Footer
        }
    }
</script>
