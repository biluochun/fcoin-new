/**
 * @file
 * @author liujikuang
 * @date 20180907
 */

import Vue from 'vue';
import Vuex from 'vuex';
import ajax from '../common/ajax';

Vue.use(Vuex);

const state = {
    LANG_EN: 'en',
    LANG_CN: 'cn',
    lang: '',
    flag: '$',
    username: ''
};

const store = new Vuex.Store({
    state,
    mutations: {
        setLang(state, lang) {
            state.lang = lang;

            window.localStorage.setItem('lang', lang);

            let ajaxLang;
            if (lang === state.LANG_CN) {
                state.flag = '¥';
                ajaxLang = 'zh-cn,zh;q=0.8';
            } else {
                state.flag = '$';
                ajaxLang = 'en-us,en;q=0.8';
            }
            ajax.setHeader('Accept-Language', ajaxLang);
        },
        setUsername(state, username) {
            state.username = username
        }
    },
    actions: {},
    modules: {}
});

export default store;
