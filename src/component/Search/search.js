/*
 * @Author: liujikuan 
 * @Date: 2018-09-20 15:14:16 
 * @Last Modified by: liujikuan
 * @Last Modified time: 2018-09-21 19:50:24
 */
import lang from '../../common/commonLang'
import $ from "jquery"

export default {
    name: 'Search',
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
    mounted() {
        $(document).click(() => {
            this.showSelect = false
        });
    },
    data(){
        return {
            isSymbolSelect: false,
            showSelect: false,
        }
    },
    methods: {
        /**
         * 点击选择币种机构
         */
        showType: function($event) {
            
            $event.stopPropagation();
            this.showSelect = !this.showSelect
        },
        /**
         * 显示搜索类型文字
         * @param key
         */
        setType(key) {
            if (key === 'symbol') {
                this.isSymbolSelect = true
            } else {
                this.isSymbolSelect = false
            }
            this.showSelect = !this.showSelect
            $(this.$refs.searchInput).focus()
        },
    }

}
