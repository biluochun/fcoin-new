/**
 * @file
 * @author jinguangguo
 * @date 2018/9/7 下午8:56
 */

import ajax from '../../common/ajax';

export default {
    /**
     * 获取公告
     * @param params
     * @returns {*}
     */
    getAnnouncement(params) {
        return ajax.get('/openapi/v1/hc/announcements', params);
    }
}
