export default {
    name: 'App',
    data() {
        return {
            showLangBox: false,
            langText: '简体中文',
            showUserMenu: false,
        }
    },
    created() {
        
    },
    methods: {
        changeLang(str) {
            this.langText = str
            this.showLangBox = false
            this.$store.commit('setLang','cn-zh')
        }
    },
};