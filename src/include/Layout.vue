<template>
    <div class="layout">
        <slot name="header">
            <layout-header></layout-header>
        </slot>
        <slot name="main"></slot>
        <slot name="footer">
            <layout-footer></layout-footer>
        </slot>
        <slot name="other"></slot>
    </div>
</template>

<script>
    import Header from './header/Header.vue';
    import Footer from './Footer';

    export default {
        components: {
            layoutHeader: Header,
            layoutFooter: Footer
        }
    }
</script>
