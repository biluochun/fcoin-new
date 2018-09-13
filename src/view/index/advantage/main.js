/**
 * @file
 * @author jinguangguo
 * @date 2018/9/7 下午7:33
 */

import Modal from '../../../component/Modal';

export default {
    name: 'Advantage',
    components: {
        Modal
    },
    created() {

    },
    data(){
        return {
            isShowDemo: false
        }
    },
    methods: {
        submit() {
            this.isShowDemo = false;
        },
        hideDialog() {
            this.isShowDemo = false;
        }
    }

}
