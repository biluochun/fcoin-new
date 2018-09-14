/**
 * @file
 * @author liujikuang
 * @date 20180907
 */

import Layout from '../../include/Layout.vue';

export default {
    name: 'Index',
    components: {
        Layout
    },
    created() {
    },
    data(){
        return {
            
        }
    },
    methods: {
        showAlert() {
            this.$alert({
                title: '提示',
                content: '这里是content',
                btnText: '开始吧',
                callback: () => {
                    console.log('Alert callback');
                }
            });
        },

        showConfirm() {
            this.$confirm({
                title: '提示',
                content: '这里是content',
                confirmText: '确认',
                cancelText: '取消',
                onConfirm: () => {
                    console.log('Confirm callback')
                },
                onCancel: () => {
                    console.log('Cancel callback')
                }
            });
        }
    }

}
