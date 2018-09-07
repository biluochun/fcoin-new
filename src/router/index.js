import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var is_closed = process.env.IS_CLOSED;
export default new Router({
    // 哈斯
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // 兼容
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: [
        // {
        //     // 首页
        //     path: '/',
        //     meta: {
        //         title: is_closed ? 'maintain.title' : 'index.meta_title'
        //     },
        //     component(resolve) {
        //         if (is_closed) {
        //             require(['../view/index/index.vue'], resolve);
        //         } else {
        //             require(['../views/index/index.vue'], resolve);
        //         }
        //     }
        // },
        {
            // FT
            path: '/',
            meta: {
                title: 'index'
            },
            component(resolve) {
                require(['../view/index/index.vue'], resolve);
            }
        },
    ]
})
