/**
 * @file
 * @author fuheyong
 * @date 2018/9/11 下午2:00
 */

import lang from './lang';

export default {
    locale: 'cn' || $store.state.lang,    // 语言标识
    //locale: 'en-us',
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        cn: lang.cn,
        en: lang.en
    },
    data() {
        return {
            toggleLang:false
        }
    },
    created() {
        
    },
    methods: {
        toggle_language(tollge){
            if(tollge=='show'){
                this.toggleLang = true
            }else{
                this.toggleLang = false
            }
            
        },
        toggle_current(lang){
            this.toggleLang = false
            localStorage.setItem('locale', lang)
            this.$i18n.locale = localStorage.getItem('locale')
        }
    },
};
