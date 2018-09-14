import './scss/base.scss';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLocalStorage from 'vue-ls';
import VueI18n from 'vue-i18n';
import vueWechatTitle from 'vue-wechat-title';

import store from './store';
import './component/Alert/Alert';
import './component/Confirm/Confirm';

Vue.use(VueI18n);
Vue.use(vueWechatTitle);
Vue.use(VueLocalStorage);

Vue.config.productionTip = false;

let lang = Vue.ls.get('lang', 'en-us');
store.commit('setLang',lang);

// const i18n = new VueI18n({
//     locale: lang,    // 语言标识
//     //locale: 'en-us',
//     //this.$i18n.locale // 通过切换locale的值来实现语言切换
//     messages: {
//         //'zh-cn': require('./lang/zh'),   // 中文语言包
//         //'en-us': require('./lang/en')    // 英文语言包
//     }
// });

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
    store,
    components: {App},
    template: '<App/>'
});
