/**
 * @file
 * @author jinguangguo
 * @date 2018/9/14 上午11:55
 */

import Vue from 'vue';
import Modal from '../Modal.vue';
import html from './Alert.html';

const ALERT_ELEMENT_ID = 'compAlertDialog';
const DEFAULT_ALERT_DATA = {
    title: 'Tip',
    btnText: 'Yes'
};

let vm = new Vue({
    template: html,
    components: {
        Modal
    },
    data: {
        ALERT_ELEMENT_ID,
        hasInit: false,
        visible: false,
        title: DEFAULT_ALERT_DATA.title,
        content: '',
        btnText: DEFAULT_ALERT_DATA.btnText,
        callback() {

        }
    },
    methods: {
        show() {
            if (this.hasInit === false) {
                let elem = document.createElement('div');
                elem.id = ALERT_ELEMENT_ID;
                document.body.appendChild(elem);
                this.visible = true;
                this.hasInit = true;
                vm.$mount(elem);
            } else {
                this.visible = true;
            }
        },
        hide() {
            this.visible = false;
        }
    }
});


// show();

/**
 *
 * @param config
 * {
 *  title:
 *  content: ,
 *  btnText:
 *  callback
 * }
 * @returns {*}
 */
const alert = function (config) {
    let option = Object.assign({}, {
        title: config.title || DEFAULT_ALERT_DATA.title,
        content: config.content,
        btnText: config.btnText || DEFAULT_ALERT_DATA.btnText,
        callback() {
            vm.visible = false;
            if (config.callback) {
                config.callback();
            }
        }
    });

    $.map(option, (value, key) => {
        vm[key] = value;
    });

    vm.show();
};

Vue.prototype.$alert = alert;
