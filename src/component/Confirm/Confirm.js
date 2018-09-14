/**
 * @file
 * @author jinguangguo
 * @date 2018/9/14 上午11:55
 */

import Vue from 'vue';
import Modal from '../Modal.vue';
import html from './Confirm.html';

const CONFIRM_ELEMENT_ID = 'compConfirmDialog';
const DEFAULT_ALERT_DATA = {
    title: 'Tip',
    confirmText: 'Yes',
    cancelText: 'No'
};

let vm = new Vue({
    template: html,
    components: {
        Modal
    },
    data: {
        CONFIRM_ELEMENT_ID,
        hasInit: false,
        visible: false,
        title: DEFAULT_ALERT_DATA.title,
        content: '',
        confirmText: DEFAULT_ALERT_DATA.confirmText,
        cancelText: DEFAULT_ALERT_DATA.cancelText,
        onConfirm() {

        },
        onCancel() {

        }
    },
    methods: {
        show() {
            if (this.hasInit === false) {
                let elem = document.createElement('div');
                elem.id = CONFIRM_ELEMENT_ID;
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


/**
 *
 * @param config
 * {
 *  title:
 *  content: ,
 *  confirmText:
 *  cancelText,
 *  onConfirm,
 *  onCancel
 * }
 * @returns {*}
 */
const confirm = function (config) {
    let option = Object.assign({}, {
        title: config.title || DEFAULT_ALERT_DATA.title,
        content: config.content,
        confirmText: config.confirmText || DEFAULT_ALERT_DATA.confirmText,
        cancelText: confirm.cancelText || DEFAULT_ALERT_DATA.cancelText,
        onConfirm: () => {
            vm.hide();
            if (config.onConfirm) {
                config.onConfirm();
            }
        },
        onCancel: () => {
            vm.hide();
            if (config.onCancel) {
                config.onCancel();
            }
        }
    });

    $.map(option, (value, key) => {
        vm[key] = value;
    });

    vm.show();
};

Vue.prototype.$confirm = confirm;
