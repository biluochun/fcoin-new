/**
 * @file
 * @author fuheyong
 * @date 2018/9/11 下午2:00
 */
export default {
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