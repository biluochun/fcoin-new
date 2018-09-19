/**
 * @file
 * @author fuheyong
 * @date 2018/9/11 下午2:00
 */

import lang from './lang';

export default {
    i18n: {
        locale: 'cn',
        messages: {
            cn: lang.cn,
            en: lang.en
        },
    },
    data() {
        return {
            toggleLang:false
        }
    },
    created() {
        
    },
    methods: {

    },
};
