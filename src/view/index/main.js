/**
 * @file
 * @author liujikuang
 * @date 20180907
 */

import Layout from '../../include/Layout.vue';
import Advantage from './advantage/index.vue';
import Banner from './banner/index.vue';
import Symbols from './symbols/index.vue';
import Year from './year/index.vue';
import App from './app/index.vue';

import lang from './lang';

export default {
    name: 'Index',
    i18n: {
        locale: 'cn',
        messages: lang
    },
    components: {
        Layout,
        Banner,
        Symbols,
        Advantage,
        Year,
        App
    },
    created() {

    },
    data(){
        return {

        }
    },
    methods: {

    }

}
