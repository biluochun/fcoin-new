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
    },
    // 获取收入分配
    get_trading_fees_group(params) {
        return ajax.get('/openapi/v1/exchange/trading_fees_group', params)
    },
    // 获取fci06
    get_fci06(params) {
        return ajax.get('/openapi/v1/indexes/index/current', params)
    },
}
