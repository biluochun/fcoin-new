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

import commonLang from './common/commonLang';

Vue.use(VueI18n);
Vue.use(vueWechatTitle);
Vue.use(VueLocalStorage);

Vue.config.productionTip = false;

let currentLang = window.localStorage.getItem('lang') || store.state.LANG_CN;
if (currentLang) {
    store.commit('setLang', currentLang);
}

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
    i18n: {
        locale: store.state.lang,
        messages: {
            cn: {
                common: commonLang.cn
            },
            en: {
                common: commonLang.en
            }
        }
    },
    router,
    store,
    components: {
        App
    },
    template: '<App></App>'
});
