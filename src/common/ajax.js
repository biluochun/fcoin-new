/**
 * @file
 * @author jinguangguo
 * @date 2018/9/12 下午12:22
 */


import Vue from 'vue';
import axios from 'axios';

let ajax = axios.create();

ajax.defaults.timeout = 30000;

ajax.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};

ajax.defaults.withCredentials = true;

ajax.interceptors.request.use(config => {
    /**
     * 在这里做loading ...
     * @type {string}
     */

    // 获取token
    config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("web-token");
    return config

}, error => {
    return Promise.reject(error)
});

ajax.interceptors.response.use(response => {

    /**
     * 在这里做loading 关闭
     */

    // 如果后端有新的token则重新缓存
    let newToken = response.headers['new-token'];

    if (newToken) {
        Vue.ls.set("web-token", newToken);
    }

    return response;

}, error => {
    let response = error.response;

    if (response.status == 401) {
        // 处理401错误

    } else if (response.status == 403) {
        // 处理403错误

    } else if (response.status == 412) {
        // 处理412错误

    } else if (response.status == 413) {
        // 处理413权限不足

    }

    return Promise.reject(response);

});

export default {
    
    post(url, data) {
        return new Promise((resolve, reject) => {
            ajax({
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }).then(httpRep => {
                resolve(httpRep.data);
            });
        });
    },

    get(url, params) {
        return new Promise((resolve, reject) => {
            ajax({
                method: 'get',
                url: url,
                params,
            }).then((httpRep) => {
                resolve(httpRep.data);
            });
        });
    },

    delete(url, params) {
        return new Promise((resolve, reject) => {
            ajax({
                method: 'delete',
                url: url,
                params
            }).then((httpRep) => {
                resolve(httpRep.data);
            });
        });
    },

    put(url, data) {
        return new Promise((resolve, reject) => {
            ajax({
                method: 'put',
                url: url,
                data: $.stringify(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((httpRep) => {
                resolve(httpRep.data);
            });
        });

    },

    all() {

    }
}
