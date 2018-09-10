export default {
    name: 'Header',
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
        }
    },
}; 