import './scss/base.scss';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLocalStorage from 'vue-ls';
import VueI18n from 'vue-i18n';

Vue.use(require('vue-wechat-title'));
Vue.config.productionTip = false;
Vue.use(VueLocalStorage);

let lang = Vue.ls.get('lang', 'en-us');
//store.commit('setLang',lang);

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: lang,    // 语言标识
    //locale: 'en-us',
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        //'zh-cn': require('./lang/zh'),   // 中文语言包
        //'en-us': require('./lang/en')    // 英文语言包
    }
});

let is_closed = process.env.IS_CLOSED;
router.beforeEach((to, from, next) => {
    if (is_closed && to.path !== '/') {
        next(
            {path: '/'}
        )
    } else {
        next();
    }
});

new Vue({
    el: '#app',
    router,
    i18n,
    components: {App},
    template: '<App/>'
});
