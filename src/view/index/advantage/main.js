/**
 * @file
 * @author jinguangguo
 * @date 2018/9/7 下午7:33
 */

import lang from './lang';

export default {
    name: 'Advantage',
    i18n: {
        messages: {
            cn: lang.cn,
            en: lang.en
        },
    },
    components: {

    },
    created() {

    },
    data(){
        return {
            currentTab:'advantage_1_title'
        }
    },
    methods: {
        toggleTab(navTab){
            this.currentTab = navTab
        }
    }

}
