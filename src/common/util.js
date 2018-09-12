/**
 * @file
 * @author jinguangguo
 * @date 2018/9/12 下午12:22
 */

export default {

    /**
     * 加法
     * @param num1
     * @param num2
     * @returns {number}
     */
    numAdd(num1, num2) {
        var baseNum, baseNum1, baseNum2;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        return (num1 * baseNum + num2 * baseNum) / baseNum;
    },

    /**
     * 减法
     * @param num1
     * @param num2
     * @returns {string}
     */
    numSub(num1, num2) {
        var baseNum, baseNum1, baseNum2;
        var precision;
        //精度
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
    },

    /**
     * 乘法
     * @param num1
     * @param num2
     * @returns {number}
     */
    numMulti(num1, num2) {
        var baseNum = 0;
        try {
            baseNum += num1.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            baseNum += num2.toString().split(".")[1].length;
        } catch (e) {
        }
        return Number(num1.toString().replace(".", ""))
            * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
    },

    /**
     * 除法
     * @param num1
     * @param num2
     * @returns {number}
     */
    numDiv(num1, num2) {
        var baseNum1 = 0, baseNum2 = 0;
        var baseNum3, baseNum4;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }

        baseNum3 = Number(num1.toString().replace(".", ""));
        baseNum4 = Number(num2.toString().replace(".", ""));
        return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
    },

    /**
     * 千分位格式化
     * @param num
     * @returns {string}
     */
    toThousands(num) {
        var num_arr = (num.toString()).split('.');
        var new_num = (num_arr[0] || 0).toString(), result = '';
        while (new_num.length > 3) {
            result = ',' + new_num.slice(-3) + result;
            new_num = new_num.slice(0, new_num.length - 3);
        }
        if (new_num) {
            result = new_num + result;
            if (num_arr[1]) {
                num_arr[0] = result;
                result = num_arr.join('.');

            }
        }
        return result;
    },

    /**
     * 日期格式化
     * @param time
     * @param type 'MD' | 'YMD'
     * @returns {*}
     */
    toDate(time, type) {
        var date = new Date(time);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
        let s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
        type = type || 'YMDhms';
        if (type == 'MD') {
            return this.trim(M + D);
        }
        if (type == 'YMD') {
            return Y + M + D;
        }
        return Y + M + D + h + m + s;
    },

    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },

    setCookie(c_name, value, expiredays, domain, path) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        var expires = (expiredays == null) ? "" : ";expires=" + exdate.toGMTString();
        var _domain = (domain == null) ? "" : '; domain=' + domain;
        var _path = (path == null) ? "" : '; path=' + path;
        document.cookie = [c_name, '=', value, expires, _path, _domain].join('');
    },

    delCookie(name) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        var expires = (expiredays == null) ? "" : ";expires=" + exdate.toGMTString();
        var _domain = (domain == null) ? "" : '; domain=' + domain;
        var _path = (path == null) ? "" : '; path=' + path;
        document.cookie = [c_name, '=', value, expires, _path, _domain].join('');
    },

    /**
     * 是否是移动端
     * @returns {boolean}
     */
    isMobile() {
        let userAgentInfo = navigator.userAgent;
        // 去除ipad
        let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPod");
        let flag = false;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = true;
                break;
            }
        }
        return flag;
    }
}
