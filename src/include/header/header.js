

import lang from './lang';
const LANG_TEXT_EN = 'English';
const LANG_TEXT_CN = '简体中文';

export default {
    name: 'Header', 
    i18n: {
        messages: {
            cn: lang.cn,
            en: lang.en
        },
    },
    data() {
        return {
            LANG_TEXT_EN,
            LANG_TEXT_CN,
            showLangBox: false,
            langText: LANG_TEXT_CN,
            showUserMenu: false,
        }
    },
    created() {
        
    },
    methods: {
        changeLang(langKey, langText) {
            this.langText = langText;
            this.showLangBox = false;
            this.$i18n.locale = langKey;
            this.$store.commit('setLang', langKey);
        }
    },
};
