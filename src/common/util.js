import axios from 'axios';

let util = {};

// const ajaxUrl = process.env.NODE_ENV === 'development'
//   // 测试环境api接口
//   ? 'http://yibowanbo.test/api'
//   // 线上环境api接口
//   : 'http://api.yibowanbo.com';
const ajaxUrl = process.env.API_URL
util.ajax = axios.create({
  //baseURL: ajaxUrl,
  timeout: 30000
});

util.api = ajaxUrl;
util.oauthUrl = ajaxUrl;

//千分位
util.toThousands = function(num){
  var num_arr = (num.toString()).split('.');
    var new_num = (num_arr[0] || 0).toString(), result = '';
    while (new_num.length > 3) {
        result = ',' + new_num.slice(-3) + result;
        new_num = new_num.slice(0, new_num.length - 3);
    }
    if (new_num) {
        result = new_num + result;
        if(num_arr[1]){
            num_arr[0] = result;
            result = num_arr.join('.');

        }
    }
    return result;
}


/**
 * 加法运算
 */
util.numAdd = function(num1, num2){
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
};

/**
 * 减法运算
 */
util.numSub = function(num1, num2){
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
}


/**
 * 乘法运算
 */
 util.numMulti = function(num1, num2) {
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
}


/**
 * 除法運算
 */
util.numDiv = function(num1, num2){ 
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
    
}


//去空格
util.trim = function(str){
  　　return str.replace(/(^\s*)|(\s*$)/g, "");
}
//获取时分秒
util.get_date = function(time,type){
  var date = new Date(time);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
  let s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
  type = type || 'YMDhms';
  if (type == 'MD'){
      return this.trim(M+D);
  }
  if (type == 'YMD'){
      return Y+M+D;
  }
  return Y+M+D+h+m+s;
}

    //获取cookie、
    export function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
        return (arr[2]);
        else
        return null;
    }
    
    //设置cookie,增加到vue实例方便全局调用
    export function setCookie (c_name, value, expiredays, domain, path) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        var expires = (expiredays == null) ? "" : ";expires=" + exdate.toGMTString();
        var _domain = (domain == null) ? "" :'; domain='+domain;
        var _path = (path == null) ? "" :'; path='+path;
        document.cookie = [c_name, '=', value, expires, _path, _domain].join('');
    };
    
    //删除cookie
    export function delCookie (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    };


/**
 * 是否是移动端
 * @returns {boolean}
 */
util.isMobile = function () {
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
};

export default util;
